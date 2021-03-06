const merge = require('webpack-merge');
const base = require('./webpack.base.js');
module.exports=merge(base,{
    mode: "development",
    // 生成map映射文件
    devtool: "source-map",
	
    // 开发服务器配置
    devServer: {
        port: 3001,// 默认端口是8080
        // stats:'errors-only',
        host:'0.0.0.0'//支持手机ip访问
   }
})