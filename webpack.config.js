const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')


module.exports = {
    // entry: './src/js/index.js', // 入口文件
    // mode: 'development',  // 开发环境
    entry: {
        app: './src/js/index.js',
        // another: './src/js/another-module.js'
        // print: './src/js/print.js' //可以删除print.js的入口起点，因为已经在index.js中引用它了
    },
    devtool: 'inline-source-map', // source map可以将编译后的代码映射回原始源代码，可在浏览器中明确指出错误位置
    devServer: {    // webpack-dev-server 实时重新加载
        contentBase: './dist',
        // hot: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // title: '管理输出'
            title: 'Caching'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: { // 输出
        // filename: 'main.js',
        // filename: 'bundle.js',
        // filename: '[name].bundle.js',   // bundle名称
        // 热更新(HMR)不能和[chunkhash]同时使用。
        filename: '[name].[hash].js',   // bundle名称
        path: path.resolve(__dirname, 'dist'),   // 生成地址
        publicPath: '/'  // 确保中间件功能可以正确启用
    },
    mode: 'development',
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vender: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'venders',
                    chunks: 'all'
                }
            }
        },
        usedExports: true,
        // 使用 optimization.splitChunks 配置选项，防止重复
        // splitChunks: {
        //     chunks: 'all'
        // } 
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