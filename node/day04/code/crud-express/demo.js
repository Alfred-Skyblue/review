/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-01-15 15:06:43
 * @LastEditors  : sueRimn
 * @LastEditTime : 2020-01-15 15:29:47
 */
var express = require('express')

// 1. 创建一个路由容器
var demo = express.Router()

demo.fn = function (str) {
    console.log(str + "文件读取成功");
}

// 导出
module.exports = demo