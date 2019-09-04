const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map' 
    //避免在生产中使用inline-*** 和 eval-***，它们会增加bundle体积大小，并降低整体性能
})