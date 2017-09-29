/**
 "off" or 0 - turn the rule off
 "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
 "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
 **/
module.exports = {
  "rules": {
    // 检测 for loop 书写是否正确，以下写法都是错误的
    // for (var i = 0; i < 10; i--) {}
    // for (var i = 10; i >= 0; i++) {}
    "for-direction": 2,
    "getter-return": 2,
    "no-await-in-loop": 2, // Disallow await inside of loops
    "no-compare-neg-zero": 2, // 不要出现负零，即 -0
    "no-cond-assign": 2, // 条件语句中，不应该出现 = ，比如 if (x = 2) {  } 是会报错的
    "no-console": 0, // 是否允许 console
    "no-constant-condition": 2, // 是否允许使用常量式表达式 if (false) { }
    "no-control-regex": 2, // 是否允许在正则表达式中使用控制字符
    "no-debugger": 2, // 是否允许使用 debugger
    "no-dupe-args": 2, // 函数参数是否允许有重复的，如果设置了严格模式，可以不用设置该选项
    "no-dupe-keys": 2, // 是否允许对象中有相同的key
    "no-duplicate-case": 2, // 检测case语句中，是否有重复的case变量值
    "no-empty": 2, // 是否允许空的表达式，if (foo) {}
    "no-empty-character-class": 2, // 是否允许空的正则表达式，比如 var foo = /^abc[]/;
    /**
     异常时给ex赋值是不允许的
     try {
     // code
    } catch (e) {
        e = 12; //error Do not assign to the exception parameter.
    }
     **/
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2, // 在条件语句中不允许使用!!  比如 if (!!foo) {   }   /*error Redundant double negation in an if statement condition.*/
    "no-extra-parens": 0, // 不要使用冗余的括号，比如 a = (b * c);
    "no-extra-semi": 2, // 不要使用多余的分号;  比如 var x = 5;;
    "no-func-assign": 2, // 不允许给函数重新赋值  function foo() {} foo = bar; /*error 'foo' is a function.*/
    "no-inner-declarations": 2, // 不要在函数体或程序块（if或循环）中声明函数
    "no-invalid-regexp": 2, // 不允许定义无效的正则表达式
    "no-irregular-whitespace": 2, // 不允许使用除空格和制表位意外的空白字符，比如 \u222B
    "no-obj-calls": 2, // 不允许调用全局的函数对象，比如 Math 和 JSON var x = Math(); /*error 'Math' is not a function.*/ var y = JSON(); /*error 'JSON' is not a function.*/
    "no-prototype-builtins": 0, // 不建议直接使用 Object.prototypes ，而使用 call 来调用，比如 var hasBarProperty = {}.hasOwnProperty.call(foo, "bar");
    "no-regex-spaces": 2, // 正则表达式中不允许有空格
    "no-sparse-arrays": 2, // 此开关控制是否可以用稀疏数组
    "no-template-curly-in-string": 2, // 不允许字符串的模板，比如 "Hello ${name}!" 会报错
    "no-unexpected-multiline": 2, // 避免多行的表达式
    "no-unreachable": 2, // 避免书写不可达的代码，比如在return后添加新的代码，或抛出异常，中断语句后
    "no-unsafe-finally": 2, // 不用在 finally 语句中使用 return 或抛出异常（throw）
    "no-unsafe-negation": 2, // 在in 或 instanceof表达式中不要否定变量 if(!a in b) {} 是错误的，应该写成 if(!(a in b)){}
    "use-isnan": 2, // 不要用NaN跟变量作比较，而是应该调用 isNaN()
    "valid-jsdoc": 0, // 如果我们使用jsdoc[http://usejsdoc.org/]来生成js文档，可以开启该规则来检测注释的正确性
    "valid-typeof": 2, // 验证typeof与比较的值，是否为以下几种情况，"undefined", "object", "boolean", "number", "string", and "function"

    // Best Practices
    "accessor-pairs": 2, // 定义对象属性时，setter和getter应该成对出现，如果不是成对的，会出现警告信息的
    "array-callback-return": 2, // 在数组方法中,回调函数应该加上 return,比如在 array.reduce中
    "block-scoped-var": 2, // 在快作用于中不允许使用var来定义变量
    "class-methods-use-this": 0, //在 class 定义的方法中，没有使用 this，会认为是不应该的
    "complexity": 2, // 判断语句复杂度，关闭该规则
    "consistent-return": 0, // 不同的分支返回的类型应该一样
    "curly": [2, "multi-line"], // 在循环或判断语句中是否需要加花括号
    "default-case": 2, // 在 switch语句中，检测是否有默认分支
    "dot-location": [2, "property"], // 在换行时，用来检测对象的点是换行之前还是之后，这里设为放在下一行
    "dot-notation": 2, // 对于对象属性应该用点表达式，不应该用[] var x = foo["bar"]; 是错误的，应该 var x = foo.bar;  但 var x = foo[bar]; 是正确的，因为bar是变量
    "eqeqeq": [2, "allow-null"], // 使用恒等来比较两个变量
    "guard-for-in": 2, // 在 for in 表达式中需要调用 hasOwnProperty 来判断是否为自有的属性
    "no-alert": 2, // 不允许用alert语句
    "no-caller": 2, // 不允许用 arguments.caller 和 arguments.callee
    "no-case-declarations": 2, // 在 case 语句中使用声明式语句时，需要用 {} 括起来
    "no-div-regex": 0, // 消除除法运算符迷惑用户使用 例如 return /=foo/; 应该写成 return /\=foo/;
    "no-else-return": 2, // 如果在if语句中有return，则在else中可以不用return，可以放到最外面返回
    "no-empty-function": 0, //不要定义空函数
    "no-empty-pattern": 2, // 不允许空的解构赋值，例如 var {a: {}} = foo;
    "no-eq-null": 0, // 对于null比较也应该使用 === 来比较
    "no-eval": 2, // 不允许使用 eval()
    "no-extend-native": 2, // 不允许修改扩展内置对象的属性，比如 Object.prototype.a = "a";
    "no-extra-bind": 0, // 可以规范代码，防止滥用 bind 方法
    "no-extra-label": 2, // 当使用 label 表达式时，检测不必要的 label 表达式
    "no-fallthrough": 2, // 是否检测switch语句中 case 后没有break，return或throw
    "no-floating-decimal": 2, // 对于浮点数，不能省略.前或.后的数字2
    "no-global-assign": [2, {"exceptions": ["Object"]}], // 不要给全局变量赋值，需要先定义在赋值
    "no-implicit-coercion": [2, {"string": false}], // 不要使用隐身转换，应该使用直接转换，如果针对 boolean number string ，比如 var n = +foo; 应该为 var n = Number(foo); 代替
    "no-implicit-globals": 0,
    "no-implied-eval": 2, // 不要使用隐式调用eval的语句，比如 setInterval("alert('Hi!');", 122);
    "no-invalid-this": 0, // 用来检测 this 关键字使用的地方是否正确，我们可以设置关闭该规则
    "no-iterator": 2, // 在ES6中有__iterator__属性，建议不要修改该属性值
    "no-labels": 2, // 不建议使用 label 表达式
    "no-lone-blocks": 2, // 禁止内部不必要的嵌套块
    "no-loop-func": 2, // 不要在循环中定义函数，并且该函数中调用了循环变量
    "no-magic-numbers": [0, { // 一些系数最好定义为常量
      "ignore": [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16],
      "ignoreArrayIndexes": true
    }
    ],
    "no-multi-spaces": [0, { // 表达式中是否允许有多余的空格
      "exceptions": {
        "AssignmentExpression": true,
        "ArrowFunctionExpression": true,
        "CallExpression": true,
        "VariableDeclarator": true
      }
    }
    ],
    "no-multi-str": 2, // 是否允许多行字符串
    "no-new": 0, // 不允许实例化类，而没有赋给任何变量
    "no-new-func": 2, // 不建议使用 new Function 来声明函数
    "no-new-wrappers": 2, // 对于String, Number, 和 Boolean，不建议使用 new，即 new String 等
    "no-octal": 2, // 不允许使用八进制数字
    "no-octal-escape": 2, // 不允许使用八进制转义字符串
    "no-param-reassign": 0, // 如果开启，则不允许重新修改函数参数值，或者参数属性值
    "no-proto": 2, // 不建议使用该属性 __proto__
    "no-redeclare": 2, // 不允许重复声明同一个变量
    "no-restricted-properties": [2, { // 定义不允许的对象属性
      "object": "disallowedObjectName",
      "property": "disallowedPropertyName",
      "message": "Please use allowedObjectName.allowedPropertyName."
    }],
    "no-return-assign": 2, // 不允许在return语句中有赋值语句
    "no-return-await": 2, // disallow unnecessary return await
    "no-script-url": 2, // 不要使用javascript:url，比如 location.href = "scripts:void(2)";是错误的
    "no-self-assign": [2, {"props": false}],// 不建议自己给自己赋值，比如 foo = foo
    "no-self-compare": 2, // 不允许变量自己跟自己做比较
    "no-sequences": 2, // 需要正确的使用逗号操作符
    "no-throw-literal": 2, // 抛出异常时，请使用 new Error()
    "no-unmodified-loop-condition": 2, // 用来检测循环中的条件值始终没有改变
    "no-unused-expressions": 2, // 不允许出现未使用的表达式
    "no-unused-labels": 2, // 定义了 label 而没有被调用
    "no-useless-call": 2, // 对于不必要使用call或apply，建议不要使用，直接调用即可
    "no-useless-concat": 2, // 不必要的字符串连接最好去掉，写在一起
    "no-useless-escape": 2, // 不必要的转义就不要转义了
    "no-useless-return": 2, // 不允许出现不必要的 return 语句
    "no-void": 2, // 不建议使用void操作符
    "no-warning-comments": 0, // 对于注释中的 TODO FIXME XXX 等，是否给出提示，建议开发中设置为1，部署的时候设置为 2
    "no-with": 2, // 不允许使用with表达式语句
    "prefer-promise-reject-errors": 2, // 对于Promise.reject，参数必须是一个 Error 对象，比如 Promise.reject(5); 是不允许的，应该写成 Promise.reject(new Error("something bad happened"));
    "radix": 2, // 在调用 parseInt 应该指定基数
    "require-await": 2, // 对于 async 表达式，必须有对应的 await 表达式
    "vars-on-top": 0, // 所有变量声明是否都放在函数最上面或过程快最上面
    "wrap-iife": [2, "any"], // 立即执行函数是里面包裹还是外面包裹，默认是外面包裹，即 outside
    "yoda": 2, // 不允许使用 yoda 条件表达式，常量值在前的比较表达式，比如： if(1 === a){ }

    // Variables
    "init-declarations": 0, // 声明变量的时候赋值，还是在其他地方赋值，我们可以关闭该规则
    "no-catch-shadow": 2, // 在IE8或更早的浏览器中，在catch语句中引入的变量 e 会调用全局已定义的变量 e
    "no-delete-var": 2, // 不能删除变量，而只能删除属性
    "no-label-var": 2, // 使用标签label语句时，不要跟变量同名，建议不要使用标签
    "no-restricted-globals": 2, // 不要使用全局变量
    "no-shadow": 0, // 全局和局部变量名不要用相同的名称
    "no-shadow-restricted-names": 2, // 不要使用 NaN, Infinity, undefined 等内部定义的变量来声明变量
    "no-undef": 2, // 不要使用还没有定义的变量或函数，如果引用第三方定义的变量，可以用 /*global */ 来标注，例如 /*global require define:true*/
    "no-undef-init": 2, // 定义变量的时候，如果没有合适的赋值，不用显式设置 undefined ，因为默认声明而未赋值的变量，其默认值为 undefined
    "no-undefined": 0, // 代码中不建议使用 undefined ，包括命令和赋值等
    /**
     定义了，但没有使用该变量，vars 有两种选择 all 和 local；args 有三种选择，all after-used 和 none
     我们可以只检测变量而不检测函数参数，可以把 args 设为 none
     **/
    "no-unused-vars": [0, {"vars": "all", "args": "none"}],
    "no-use-before-define": [0, "nofunc"], // 变量和函数的声明需要在使用之前，可以设置 [2, "nofunc"]，只检测变量，而不检测函数

    //Node.scripts and CommonJS
    "callback-return": 0, // 调用callback时需要加上return语句
    "global-require": 0, // require加载依赖应该放在代码最上边显示，比如 var fs = require("fs");
    "handle-callback-err": 2, // 如果回调函数中有错误变量（比如err），我们需要判断处理错误的情况
    "no-buffer-constructor": 2, // 不建议使用 Buffer 构造函数，比如： new Buffer(5) 是错误的
    "no-mixed-requires": 2, // require与其他变量声明应该不要放在一起
    "no-new-require": 2, // 不用对表达式 require 直接使用 new,例如 var appHeader = new require('app-header');
    "no-path-concat": 2, // 不要使用 __dirname 或 __filename 与字符串连接生成路径，应该使用 path.join(__dirname, "foo.scripts"); 或 path.resolve(__dirname, "foo.scripts");
    "no-process-env": 0, // 在node环境中，不建议使用 process.env ，而使用 config 来配置
    "no-process-exit": 0, // 不要直接调用 process.exit();
    "no-restricted-modules": 2, // 限制使用某些模块，比如 no-restricted-modules: [2, "fs"] ，不能使用fs模块
    "no-sync": 0, // 我们尽量使用异步方法来代替同步方法，比如操作文件等，

    // Stylistic Issues
    "array-bracket-newline": 0, // 数组最后一个 ] 是否换行，默认规则为，写在一行不需要，多行需要
    "array-bracket-spacing": 2, // 数组元素前后是否要加一空格，默认为不必要加，如 var arr = [ 'foo', 'bar' ];  是不正确的写法
    "array-element-newline": 0, // 数组元素是写在一行，还是多行，该规则不用开启
    "block-spacing": 2, // 花括号与语句间应该有空格
    "brace-style": 2, // 条件或循环语句中，花括号是另起一行，还是与当前语句在同一行，默认跟当前语句在同一行
    "camelcase": 2, // 驼峰式命名变量或属性
    "capitalized-comments": 0, // 注释的大小写格式限制
    "comma-dangle": 0, // 对象最后一个属性，是否需要逗号
    "comma-spacing": 2, // 逗号表达式前后空格情况，默认前面没有，后边应该添加
    "comma-style": 2, // 当换行时，逗号是在当前行还是下一行，默认是当前行
    "computed-property-spacing": 2, // 用[]取属性值时，是否应该有空格
    "consistent-this": [2, "self"], // 闭包的时候，this 用变量声明上下文应该统一，该变量就不用用在其他定义变量上
    "eol-last": 2, // 在行的末尾至少空上一行
    "func-call-spacing": 2, // 函数名与括号之间是否需要一个空格
    "func-name-matching": 2, // 定义函数变量时，匿名名称是否应该跟变量名称一致，默认一致
    "func-names": 0, // 函数表达式需要一个名称，包括匿名函数，该规则可以关闭
    "func-style": [0, "declaration", {  // 是声明式的函数，还是定义变量式的函数，我们采用声明式，但箭头函数允许变量式
      "allowArrowFunctions": true
    }],
    "function-paren-newline": [0, "multiline"], // 函数参数书写格式，是否要换行
    "id-blacklist": 2, // 指定一些黑名单变量，这些变量不能出现在代码中，比如 "id-blacklist": [2, "data", "err", "e", "cb", "callback"],
    "id-length": 0, // 定义变量名或属性名的最小最大长度
    "id-match": 2, // 规范变量名或属性名的命名规范
    "indent": [2, 2, {
      "SwitchCase": 1, "VariableDeclarator": {"var": 1, "let": 1, "const": 1},
      "FunctionDeclaration": {"parameters": "first"}
    }], // 缩进，我们采用2个空格来缩进
    "jsx-quotes": 0, // jsx属性值应该用双引号
    "key-spacing": 2, // 键值之间的空格
    "keyword-spacing": 2, // 关键字 if, else, for, while, do, switch, try, catch, finally, and with 要求有空格
    "line-comment-position": 0, // 注释是放在上面还是旁边，不需要开启该规则
    "linebreak-style": 0, // 验证 unix (LF) or windows (CRLF)
    "lines-around-comment": 0, // 注释的规范写法，在旁边或上方
    "max-depth": [2, 12], // 限制语句块最大嵌套深度
    "max-len": [ // 限定每行最大长度
      2, 200, {}
    ],
    "max-lines": [2, {"max": 800, "skipBlankLines": true, "skipComments": true}], // 指定每个文件最大行
    "max-nested-callbacks": [1, 3], // 限定回调函数最大深度
    "max-params": [2, 8], // 限定函数参数最大个数
    "max-statements": [2, 80, {"ignoreTopLevelFunctions": true}], // 在一个函数中限定声明表达式最多个数,内部函数会或略
    "max-statements-per-line": [2, {"max": 2}], // 每行最大表达式
    "multiline-ternary": 0, // 三元表达式，是否需要多行书写
    "new-cap": 0, // 构造函数首字母应该大写
    "new-parens": 2, // 实例化构造函数时，需要加入()，即使没有参数值，所以比如 new Person 是不允许的
    "newline-per-chained-call": 0,
    "no-array-constructor": 0, // 不允许使用 new Array(2, 1, 2) 来创建数组，而改用 []
    "no-bitwise": 0, // 禁止使用位运算符,包括以下情况 var x = y | z; var x = y & z; var x = y ^ z; var x = ~ z; var x = y << z; var x = y >> z; var x = y >>> z; x |= y; x &= y; x ^= y; x <<= y; x >>= y; x >>>= y;
    "no-continue": 0, // 是否允许使用 continue语句
    "no-inline-comments": 0,// 注释是否允许在代码的后面，开启则不允许
    "no-lonely-if": 0, // 应该使用 else if ，而不要使用 else { if(){} }
    "no-mixed-operators": 0, // 不要把多个操作符写在一起使用，最好用括号括起来
    "no-mixed-spaces-and-tabs": 2, // 不允许空格和制表位混合使用
    "no-multi-assign": 0, // 不要连续赋值，比如 var a = b = c = 5;
    "no-multiple-empty-lines": 2, // 代码中不要出现太多空行，默认最多为2行
    "no-negated-condition": 0, // 是否允许使用否定表达式 if (!a)
    "no-nested-ternary": 0, // 是否允许使用嵌套的三元表达式
    "no-new-object": 2, // 实例化对象时，不要用 new Object(); 而用 {}
    "no-plusplus": [0, {"allowForLoopAfterthoughts": true}], // 是否允许使用 ++ 或 --
    "no-restricted-syntax": [2, "WithStatement"], // 可以指定不允许的语法
    "no-tabs": 2, // 是否允许使用制表符
    "no-ternary": 0, // 是否允许三元操作符
    "no-trailing-spaces": 0, // 不允许行尾有空白字符
    "no-underscore-dangle": 0, // 是否允许变量名前后有 _
    "no-unneeded-ternary": 2, // 请不要使用不必要的三元表达式，比如 var isYes = answer === 1 ? true : false;
    "no-whitespace-before-property": 0,
    "nonblock-statement-body-position": 2, // 如果在条件或循环表达式中，只有一行的表达式，并且没有使用 {} ，最好跟条件写在一行
    "object-curly-newline": 0,
    "object-curly-spacing": 0, // 验证花括号内的空格
    "object-property-newline": 0, // 对象属性在新行显示
    "one-var": 0, // 多个变量声明是否用一个var语句
    "one-var-declaration-per-line": [0, "always"], // 定义多个变量时,是否需要每个变量在一行显示
    "operator-assignment": 2, // 对于赋值表达式，应该使用其简略式写法，比如  x = x + y 应该用 x += y
    "operator-linebreak": 0, // 有操作符时，是否检测打断的行
    "padded-blocks": 0, // 是否验证空白块
    "padding-line-between-statements": [0, {blankLine: "always", prev: "*", next: "return"}], // 不同的语句中间是否加一空行
    "quote-props": [2, "as-needed"], // 属性加单引号或双引号，个人建议不用加的最好不加
    "quotes": [2, "single"], // 字符串引号，建议使用单引号
    "require-jsdoc": 0, // 是否需要 jsdoc 来注释代码
    "semi": [0, "always"], // 总是要求加上分号
    "semi-spacing": 2, // 分号与代码之间的间隔
    "semi-style": [2, "last"], // 分号是放到行尾还是下一行行首，默认为行尾
    "sort-keys": 0, // 属性是否需要排序
    "sort-vars": 0, // 定义多个变量时，是否按字符顺序来排序，不建议开启该规则
    "space-before-blocks": 2, // 在每一块后面需要添加一空格
    "space-before-function-paren": 0, // 在函数名和() 之间有一空格
    "space-in-parens": 0, // 括号和参数之间应该没有空格
    "space-infix-ops": 2, // 表达式中间应该添加空白
    "space-unary-ops": 2, // 在一元操作符前或后不应该有空白
    "spaced-comment": [0, "always", {
      "line": {
        "markers": ["/"],
        "exceptions": ["-", "+"]
      },
      "block": {
        "markers": ["!"],
        "exceptions": ["*"],
        "balanced": true
      }
    }], // 如果开启，则会检测注释符后是否有空白，always必须有，而never则没有
    "switch-colon-spacing": [2, {"after": true, "before": false}], // switch 语句条件冒号前后是否加空格
    "template-tag-spacing": 2, // 标记模板内容，中间是否需要加空格，默认不需要加
    "unicode-bom": 2, //
    "wrap-regex": 2, // 字面正则表达式需要用括号括起来

    // es6
    "arrow-body-style": [0, "as-needed"],// 箭头函数是否需要加上{}
    "arrow-parens": [0],// 对于箭头函数，需要添加括号，比如(a) => {}; 而不应该简写为 a => {};
    "arrow-spacing": 2,//箭头函数中，箭头运算符前后需要添加空白
    "constructor-super": 2,//父类构造函数不应该调用 super() ，但派生类必须要调用 super()
    "generator-star-spacing": 2,//generator functions 中 * 前应该添加空白，后面不应该有空白
    "no-class-assign": 2,//不能再修改已经声明的类，即不能重现给已经声明的类赋其他值
    "no-confusing-arrow": 2, //箭头函数中不建议使用引起疑惑的表达式，比如 var x = a => 1 ? 2 : 3，如果使用需要用{} 括起来
    "no-const-assign": 2,//不能修改常量值
    "no-dupe-class-members": 2,//类成员不能重复定义
    "no-duplicate-imports": 2,
    "no-new-symbol": 2, //对于 Symbol,不要使用 new,例如 var foo = new Symbol("foo");
    "no-restricted-imports": 2,// 禁止特定的导入
    "no-this-before-super": 2,//不允许在 super() 之前使用 this/super 语句
    "no-useless-computed-key": 2, //禁止不必要的属性计算表达式
    "no-useless-constructor": 2, //禁止不必要的构造方法,比如空的构造器
    "no-useless-rename": 2, // 禁止不必要的别名表达式，比如 export { foo as bar } from 'foo';
    "no-var": 2,//在需要使用const 或 let 声明时不要使用var
    "object-shorthand": 2,//利用简写法来定义对象属性，如 var foo = {x, y, z}; 表示 var foo = {x:x, y:y, z:z};
    "prefer-arrow-callback": 2,//建议使用箭头函数作为回调函数
    "prefer-const": 2,//能使用常量的地方尽量使用const
    "prefer-destructuring": [2, {
      "array": false,
    }, {
      "enforceForRenamedProperties": false
    }], // 尽量使用解构表达式，比如 const [foo] = array; 或 const {bar: foo} = object;
    "prefer-numeric-literals": 2, // 不允许直接使用 parseInt 解析字面量变量，比如 parseInt("111110111", 2)，而 parseInt(foo); 是允许的
    "prefer-rest-params": 2, // 建议使用 rest (...args) 参数来代替 arguments
    "prefer-spread": 2,//不要使用apply，应该使用扩展操作符来调用 Math.max(...args);
    "prefer-template": 2,//建议使用模板符来替代引号，比如 var str = `Hello, ${name}!`;
    "require-yield": 2,//generator functions 应该有 yield
    "rest-spread-spacing": 2,//rest 表达式中间是否加空格，默认不加
    "sort-imports": 0, // improt 的变量名称导入应该按顺序排位
    "symbol-description": 2, // 使用 Symbol 定义变量时，需要传入 Symbol description
    "template-curly-spacing": [2, "never"], // 模板表达式中 {} 前后是否需要空格
    "yield-star-spacing": [2, {"before": true, "after": false}], // yield * 号前后是否需要空格

    // eslint-plugin-ava rule
    "ava/assertion-arguments": "error",
    "ava/max-asserts": ["off", 5],
    "ava/no-async-fn-without-await": "error",
    "ava/no-cb-test": "off",
    "ava/no-duplicate-modifiers": "error",
    "ava/no-identical-title": "error",
    "ava/no-ignored-test-files": "error",
    "ava/no-invalid-end": "error",
    "ava/no-nested-tests": "error",
    "ava/no-only-test": "error",
    "ava/no-skip-assert": "error",
    "ava/no-skip-test": "error",
    "ava/no-statement-after-end": "error",
    "ava/no-todo-implementation": "error",
    "ava/no-todo-test": "warn",
    "ava/no-unknown-modifiers": "error",
    "ava/prefer-async-await": "error",
    "ava/prefer-power-assert": "off",
    "ava/test-ended": "error",
    "ava/test-title": ["error", "if-multiple"],
    "ava/use-t-well": "error",
    "ava/use-t": "error",
    "ava/use-test": "error",
    "ava/use-true-false": "error"
  },
  "parser": "babel-eslint", // 指定默认解析器
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
    "mocha": true,
    "jquery": true
  },
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module"
  },
  "globals": { // 定义全局的变量
  },
  "extends": [ // 推荐使用默认配置好的
    "eslint:recommended"
  ],
  "plugins": [ // 定义第三方插件
    "ava"
  ],
  "settings": {
  },
  "root": true // 设置他后，子的js文件找到该 eslint配置文件后，则不再向上查找其他eslint配置文件
};
