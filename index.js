var _ = require('lodash');
var loaderUtils = require('loader-utils');
var artTmplate = require('art-template/dist/template');

module.exports = function (source) {
    this.cacheable && this.cacheable();

    var query = loaderUtils.parseQuery(this.query);
    var options = this.options.artTemplateLoader || {};
    var ANONYMOUS_RE = /^function\s+anonymous/;
    var UTILS_RE = /\$utils=this/;

    options = _.extend({}, query, options);

    var render = artTmplate.compile(source, _.extend({}, query, options));

    render = render
        .toString()
        .replace(ANONYMOUS_RE, 'function').replace(UTILS_RE, '$utils=template.utils')

    return "var template = require('art-template/dist/template');\n\n"
         + "module.exports = " + render;

};
