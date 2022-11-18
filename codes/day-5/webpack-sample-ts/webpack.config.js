const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
const webpackConfig = {
    entry: {
        main: resolve(__dirname, 'src', 'index.ts'),
        calc: resolve(__dirname, 'src', 'calculation.ts')
    },
    output: {
        filename: '[name].bundle.js',
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }, {
            test: /\.(htm|html)$/,
            use: 'html-loader'
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true
        })
    ],
    devServer: {
        port: 4200,
        static: resolve(__dirname, 'dist'),
        compress: true
    },
    devtool: 'inline-source-map'
}
module.exports = webpackConfig