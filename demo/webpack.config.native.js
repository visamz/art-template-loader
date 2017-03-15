const path = require('path')

module.exports = {
    entry: './native/entry',
    output: {
        path: path.resolve(__dirname, 'native'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tpl$/,
                loader: '../index.js',
                options: {
                    format: 'native'
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'native')
    }
}
