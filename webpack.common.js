const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    entry: {
        app: './src/js/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: { // 输出
        // filename: 'main.js',
        // filename: 'bundle.js',
        filename: '[name].bundle.js',   // bundle名称
        path: path.resolve(__dirname, 'dist'),   // 生成地址
        publicPath: '/'  // 确保中间件功能可以正确启用
    },
    optimization: {
        usedExports: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, // 表示只要所有以.css结尾的文件，都将被提供给style-loader和css-loader
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
};

