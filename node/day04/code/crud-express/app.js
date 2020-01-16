/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2020-01-13 13:13:32
 * @LastEditors  : sueRimn
 * @LastEditTime : 2020-01-15 15:37:13
 */
/**
 * app.js 入门模块
 * 职责：
 *   创建服务
 *   做一些服务相关配置
 *     模板引擎
 *     body-parser 解析表单 post 请求体
 *     提供静态资源服务
 *   挂载路由
 *   监听端口启动服务
 */

var express = require('express')
var bodyParser = require('body-parser')
var router = require('./router')
var app = express()
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))
app.engine('.html', require('express-art-template'))
app.use(router)
app.get('/', function (req, res) {
    console.log("请求主页");

    res.render('index.html')
})

// 配置模板引擎和 body-parser 一定要在 app.use(router) 挂载路由之前
// parse application/x-www-form-urlencoded
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
// parse application/json
app.use(bodyParser.json())

// 把路由容器挂载到 app 服务中

app.listen(3000, function () {
    console.log('running 3000...')
})

module.exports = app