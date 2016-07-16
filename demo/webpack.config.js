
module.exports = {
    entry: './entry',
    output: {
        path: './',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.tpl$/,
                loader: '../index.js'
            }
        ]
    }
}
