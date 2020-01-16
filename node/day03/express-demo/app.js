/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-01-12 17:49:27
 * @LastEditors  : sueRimn
 * @LastEditTime : 2020-01-12 18:25:50
 */
// 0. 安装
// 1. 引包
var express = require("express")

// 2. 创建你的服务器应用程序，也就是原来的 http.createServer
var app = express();

// 公开指定目录
// 只要这样做了，你就可以直接通过 /public/xx 的方式访问 public 目录中所有的资源了
app.use('/public/', express.static('./public/'))
app.use('/static/', express.static('./static/'))

// 得到路径，以前一个一个判断，代码会冗余
app.get('/', function (req, res) {
    res.send('hello nodejs')
})
app.get('/about', function (req, res) {
    res.send('hello word')
})
app.listen(3000, function () {
    console.log('app is running at port 3000.');
})