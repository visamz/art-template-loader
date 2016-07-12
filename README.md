# artTemplate loader for webpack

## Installation

`npm install art-template-loader`

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
var template = require("art-template!./file.tpl");
// => returns the template function compiled with artTemplate templating engine.

// And then use it somewhere in your code
template(data) // Pass object with data
