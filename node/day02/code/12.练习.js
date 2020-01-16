/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-01-10 16:15:50
 * @LastEditors  : sueRimn
 * @LastEditTime : 2020-01-10 16:44:05
 */
var http = require("http")
var fs = require("fs")
var template = require("art-template")
var server = http.createServer()
var wwwDir = 'E:/dome/node/day02/code'
server.on('request', function (req, res) {
    fs.readFile('./template-apache.html', function (err, data) {
        if (err) {
            return res.end('404 Not Found.');
        }

        // 1. 如何得到 wwwDir 目录列表中的文件名和目录名
        // fs.readdir
        // 2. 如何将得到的文件名和目录名替换到template.html中
        // 2.1 在template.html中需要替换的位置预留一个体术的标记,就像以前使用模板引擎的标记一样
        // 2.2 根据与files生成需要的html内容

        fs.readdir(wwwDir, function (err, files) {
            if (err) {
                return res.end('Can not find www dir.')
            }
            // 这里需要使用模板引擎解析替换 data 中的模板字符串就可以了
            // 数据就是 files
            // 然后去 template.html 文件中编写模板语法就可以了
            console.log("成功");

            var htmlStr = template.render(data.toString(), {
                title: '成功',
                files: files
            })

            // 3. 发送解析替换过后的响应数据
            res.end(htmlStr)

        })

    })
})
server.listen(3000, function () {
    console.log('running...');

})