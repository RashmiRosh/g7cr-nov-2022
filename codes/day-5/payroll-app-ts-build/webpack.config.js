const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
module.exports = {
    entry: resolve(__dirname, 'source', 'index.ts'),
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]
        }, {
            test: /\.html$/,
            use: 'html-loader'
        }, {
            test: /\.js$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devtools: 'inline-source-map',
    devServer: {
        static: resolve(__dirname, 'dist'),
        port: 4200,
        compress: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'public')
        },
            new CleanWebpackPlugin({
                cleanStaleWebpackAssets: true
            }))
    ]
}