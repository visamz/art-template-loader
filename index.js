var _ = require('lodash')
var loaderUtils = require('loader-utils')
var template = require('art-template/dist/template')

module.exports = function(source) {
    this.cacheable && this.cacheable()

    var query = loaderUtils.parseQuery(this.query)
    var options = this.options.artTemplateLoader || {}
    var ANONYMOUS_RE = /^function\s+anonymous/
    var UTILS_RE = /\$utils=this/
    var _oldOnError = template.onerror
    var render

    template.onerror = function(e) {
        var message = 'art Template Error\n\n'
        for (var name in e) {
            if (_.includes(['name', 'message', 'source'], name)) {
                message += '<' + name + '>\n' + e[name] + '\n\n'
            }
        }

        throw new SyntaxError(message)
    }

    try {
        options = _.extend({}, query, options)
        render = template.render(source, _.extend({}, query, options))
                .toString().replace(ANONYMOUS_RE, 'function')
                .replace(UTILS_RE, '$utils=template.utils')
        render =
            "var template = require('art-template/dist/template')\n\n" +
            "module.exports = " + render

        this.callback(null, render)
    } catch (err) {
        this.callback(err)
    }
}
