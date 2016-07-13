# artTemplate loader for webpack

> [artTemplate](https://github.com/aui/artTemplate) 是新一代 javascript 模板引擎

### 模板语法
```
{{if admin}}
    {{include 'admin_content'}}

    {{each list}}
        <div>{{$index}}. {{$value.user}}</div>
    {{/each}}
{{/if}}
```

[查看语法与演示](https://github.com/aui/artTemplate/wiki/syntax:simple)

## Installation

`npm install art-template-loader`

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
var template = require("art-template!./file.tpl");
// => returns the template function compiled with artTemplate templating engine.

// And then use it somewhere in your code
template(data) // Pass object with data
```
