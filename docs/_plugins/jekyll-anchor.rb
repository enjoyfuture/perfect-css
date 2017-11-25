# 为 component 对应 html 添加锚点

require 'nokogiri'

module Jekyll
  module ContentsAnchor
    class Parser
      ANCHOR_PREFIX = 'anchor-'
      attr_reader :doc

      def initialize(html)
        @doc = Nokogiri::HTML::DocumentFragment.parse(html)
        @entries = parse_content
      end

      # 手动为内容添加锚点
      def content_anchor
        addAnchorToContent(@entries[:children], ANCHOR_PREFIX)
        @doc.inner_html
      end

      private

      # 循环遍历为内容 h1到h6 加锚点
      def addAnchorToContent(nodes, prefix)
        i = 0
        nodes.each do |node|
          # 为栏目对应的内容加锚点
          node[:content_node].children.first.add_previous_sibling(%Q{<div class="anchor-header" id="#{prefix}#{i + 1}"></div>})
          node[:content_node].children.last.add_next_sibling(%Q{<a class="anchor-link" href="##{prefix}#{i + 1}">#</a>})

          if node[:children] && node[:children].length > 0
            addAnchorToContent(node[:children], "#{prefix}#{i + 1}-");
          end
          i += 1
        end
      end

      #  解析内容
      #  根据 h1 到 h6 来动态生成目录结构，此算法实现过程比较简单，但构思巧妙，利用 Hash 对象生成了一个多叉树结构，
      #  算法实现：首先初始化根节点树，然后遍历每一个节点，比较当前节点与前一个节点，
      #  如果 header 的级别一样，则说明拥有相同的父节点，
      #  如果当前级别小于前一个，则作为前一个的孩子节点，如果当前级别大于前一个，则向上查找其祖先节点，并作为孩子节点加到该祖先节点下，
      #  遍历过程中以当前节点为基准，以上一个节点来作为比较对象，根据比较结果操作
      #  例子 ['h2', 'h2', 'h3', 'h4', 'h1', 'h1', 'h2', 'h3', 'h2', 'h4', 'h2', 'h5', 'h3', 'h3']，输出结果为

      #       root
      #       h2  h2  h1   h1
      #           h3       h2   h2   h2
      #           h4       h3   h4   h5 h3 h3

      def parse_content
        name = ''
        index = 0
        currentNode = {}

        # 初始化根节点
        entries = {
          level: 0,
          children: [],
          depth: 0,
          parent: nil,
          name: '',
          text: '',
          root: true
        }

        # 前一个元素 level
        prevLevel = 0

        # 这里不支持 >h1 查询，直接连起来查询会报错
        # nodes = doc.css('>h1, >h2, >h3, >h4, >h5, >h6')
        nodes = doc.css('h1, h2, h3, h4, h5, h6')
        nodes.each do |node|
          #puts %Q{11#{node.parent['class']}22}
          text = node.text
          name = node.name
          level = 7 - name[1].to_i
          header_content = node.children.first # 取目录下第一个元素

          # 如果目录下有内容并且不是例子中的 header
          if header_content && node.parent['class'] != 'doc-example'
            if index == 0
              # 初始化第一个元素
              anchor_node = {
                level: level,
                children: [],
                depth: 1,
                parent: entries,
                name: name,
                text: text,
                content_node: node
              }
              entries[:children] << anchor_node

             elsif
              if level == prevLevel  # 相等的话
                anchor_node = {
                  level: level,
                  children: [],
                  depth: currentNode[:depth],
                  parent: currentNode[:parent],
                  name: name,
                  text: text,
                  content_node: node
                }
                currentNode[:parent][:children] << anchor_node

              elsif level < prevLevel # 如果当前级别小于前一个
                anchor_node = {
                  level: level,
                  children: [],
                  depth: currentNode[:depth] + 1,
                  parent: currentNode,
                  name: name,
                  text: text,
                  content_node: node
                }
                currentNode[:children] << anchor_node

              else # 如果当前级别大于前一个 查找祖先节点
                ancestor = currentNode[:parent]
                while ancestor[:level] <= level && ancestor[:root] == nil do
                   ancestor = ancestor[:parent]
                end

                anchor_node = {
                  level: level,
                  children: [],
                  depth: ancestor[:depth] + 1,
                  parent: ancestor,
                  name: name,
                  text: text,
                  content_node: node
                }
                ancestor[:children] << anchor_node
              end
            end

            index += 1
            currentNode = anchor_node
            prevLevel = level
          end
        end

        entries
      end
    end
  end
end

module Jekyll
  module ContentsAnchorFilter

    # 处理锚点
    def content_anchor(html)
      return html unless page['anchor']

      ::Jekyll::ContentsAnchor::Parser.new(html).content_anchor
    end

    private

    def page
      @context.registers[:page]
    end
  end
end

Liquid::Template.register_filter(Jekyll::ContentsAnchorFilter)
