const path = require('path')

module.exports = {
    entry: './simple/entry',
    output: {
        path: path.resolve(__dirname, 'simple'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tpl$/,
                loader: '../index.js'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'simple')
    }
}
