const { resolve } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: resolve(__dirname, 'src', 'index.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(htm|html)$/,
            use: 'html-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 4000,
        static: resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'public', 'index.html')
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true
        })
    ],
    devtool: 'inline-source-map'
}