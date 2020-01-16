/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-01-15 15:06:34
 * @LastEditors  : sueRimn
 * @LastEditTime : 2020-01-15 15:31:19
 */
var express = require('express')

var demo = require('./demo')
var express = require('express')

var app = express()
app.use(demo)
// 1. 创建一个路由容器
// var router = express.Router()
demo.fn("测试完毕")