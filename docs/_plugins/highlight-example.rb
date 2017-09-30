# 高亮例子代码
# 打印到控制台语句 puts "#{tag_name}"

module Jekyll
  module Tags
    class ExampleBlock < Liquid::Block
      include Liquid::StandardFilters

      # 正则表达式，来高亮处理语言，比如 html 等，有四种格式：name, name attr, name attr=value or name attr="<quoted list>"
      # <quoted list> 是用空格分割开的数字列表，如 name attr="1 2 3"
      SYNTAX = /^([a-zA-Z0-9.+#-]+)((\s+\w+(=((\w|[0-9_-])+|"([0-9]+\s)*[0-9]+"))?)*)$/

      # ruby 会执行该方法，tag_name 为 example  markup 要高亮的语言，比如 html
      def initialize(tag_name, markup, tokens)
        super
        if markup.strip =~ SYNTAX
          @lang = $1.downcase
          @options = {}

          # 如果是 name=value, or name="<quoted list>" 的情况
          if defined?($2) && $2 != ''
            # puts "----#{$2}-------"
            # $2 有三种情况： attr, attr=value or attr="<quoted list>"
            $2.scan(/(?:\w+(?:=(?:(?:\w|[0-9_-])+|"[^"]*")?)?)/) do |opt|
              # puts "----#{opt}-------"
              key, value = opt.split('=')
              # 如果是数字列表的话，转换为数组
              if value && value.include?("\"")
                  value.gsub!(/"/, "")
                  value = value.split
              end
              @options[key.to_sym] = value || true
            end
          end
          @options[:linenos] = false
        else
          # 输出错误
          raise SyntaxError.new <<-eos
语法错误：在 'example' 中，由于 markup 不是这四种情况，name, name attr, name attr=value or name attr="<quoted list>"

  #{markup}

请检查 example <lang> 格式
eos
        end
      end

      # 渲染方法
      def render(context)
        prefix = context["highlighter_prefix"] || ""
        suffix = context["highlighter_suffix"] || ""
        code = super.to_s.strip

        output = case context.registers[:site].highlighter

        when 'rouge'
          render_rouge(code)
        end

        # 用 <div class="doc-example"></div> 包裹例子
        rendered_output = "<div class=\"doc-example\">\n" + example(code) + expand_code() + add_code_tag(output) + "\n</div>"
        prefix + rendered_output + suffix
      end

      # 用 <div class="doc-example-render"></div> 包裹例子渲染结果
      def example(output)
        "<div class=\"doc-example-render\" data-example-id=\"#{@options[:id]}\">\n#{output}\n</div>"
      end

      # 展开折叠
      def expand_code()
        html = %Q{<div class="doc-example-expand">\n}
        html << %Q{<div class="doc-code-icon" data-code-icon><i class="icon-pure-code"></i></div>\n}
        html << %Q{<div class="tooltip tooltip-top"><div class="arrow"></div><div class="tooltip-inner">显示 Code</div></div></div>\n}
        html
      end

      # 加入高量化代码 highlight
      def add_code_tag(code)
        code = code.sub(/<pre>\n*/,'<pre><code class="language-' + @lang.to_s.gsub("+", "-") + '" data-lang="' + @lang.to_s + '">')
        code = code.sub(/\n*<\/pre>/,"</code></pre>")
        code.strip
      end

      # 删除 holder.js
      def remove_holderjs(code)
        code = code.gsub(/data-src="holder.js.+?"/, 'src="..."')
      end

      def remove_example_classes(code)
        # 删除代码中包含 'doc-' 开头的样式
        code = code.gsub(/(?!class=".)\ *?doc-.+?(?=")/, "")
        # 删除空的 class
        code = code.gsub(/\ class=""/, "")
      end

      # 利用插件 rouge 高亮代码，并加入复制功能
      def render_rouge(code)
        require 'rouge'
        formatter = Rouge::Formatters::HTML.new(line_numbers: @options[:linenos], wrap: false)
        lexer = Rouge::Lexer.find_fancy(@lang, code) || Rouge::Lexers::PlainText
        code = remove_holderjs(code)
        code = remove_example_classes(code)
        code = formatter.format(lexer.lex(code))

        html = %Q{<div class="highlight doc-example-highlight">\n}
        html << %Q{<div class="doc-code-copy"><i class="icon-pure-copy"></i></div>\n}
        html << %Q{<div class="tooltip tooltip-top"><div class="arrow"></div><div class="tooltip-inner">复制代码</div></div>\n}
        html << %Q{<pre>#{code}</pre></div>}
        html
      end

    end
  end
end

Liquid::Template.register_tag('example', Jekyll::Tags::ExampleBlock)

