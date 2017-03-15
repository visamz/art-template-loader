
var listTpl = require('./list.tpl')
var noEscapeTpl = require('./no-escape.tpl')
var template = require('art-template/dist/template')

var list = {
	title: '测试数组',
	list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
}

var noEscape = {
    value: '<span style="color:#F00">hello world!</span>'
}

var inline = {
	title: '测试模板内联',
	list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
}

document.getElementById('list').innerHTML = listTpl(list)
document.getElementById('content').innerHTML = noEscapeTpl(noEscape)
document.getElementById('inline').innerHTML = template('inlineTpl', inline)
