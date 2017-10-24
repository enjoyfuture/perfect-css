# 处理 table 给每列设置平均宽度
# 方法文档 http://www.rubydoc.info/github/sparklemotion/nokogiri/Nokogiri/XML/NodeSet
require 'nokogiri'

module Jekyll
  module ContentsTable
    class Parser
      attr_reader :doc

      def initialize(html)
        @doc = Nokogiri::HTML::DocumentFragment.parse(html)
      end

      # 为 table 每列设置平均百分比宽度
      def adjust_table_width
        setWidthToTable()
        @doc.inner_html
      end

      private

      # 处理所有 table
      def setWidthToTable()
        # 查找所有 .doc-table
        nodes = doc.css('.doc-table')

        nodes.each do |node|
          # th
          ths = node.css('thead tr').children
          #puts %Q{11#{node.css('thead tr').children}22}

          # 过滤，去掉空的内容
          ths_filter = ths.filter('th')
          average = 100 / ths_filter.length

          ths_filter.each do |th|
            th.set_attribute('style', "width: #{average}%")
          end
        end
      end

    end
  end
end
