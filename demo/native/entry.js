
var listTpl = require('./list.tpl')
var noEscapeTpl = require('./no-escape.tpl')


var list = {
	title: '测试数组',
	list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
}

var noEscape = {
    value: '<span style="color:#F00">hello world!</span>'
}


document.getElementById('list').innerHTML = listTpl(list)
document.getElementById('content').innerHTML = noEscapeTpl(noEscape)
