/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2020-01-13 13:13:38
 * @LastEditors  : sueRimn
 * @LastEditTime : 2020-01-13 16:46:46
 */
var experss = require('express')

var bodyParser = require('body-parser')

var app = experss()
app.use('/public', experss.static('./public/'))

var comments = [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]

// 配置使用 art-temolate 模板引擎
// 第一个参数，表示，当渲染以 .art 结尾的文件的时候，使用 art-template 模板引擎
// express-art-template 是专门用来在Express中把 art-template 正和岛 express 中
// 虽然外面这里不需要记载 art-template 但是也必须安装
// 原因就在于 express-art-template 依赖了 art-template
app.engine('.html', require('express-art-template'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Express 为 Response

app.get('/', function(req, res) {
  // 默认会读取views文件夹中的index.html
  res.render('index.html', {
    comments: comments
  })
})

app.get('/post', function(req, res) {
  res.render('post.html')
})

// 当以 POST 请求 /post 路径的时候，执行处理函数
app.post('/post', function(req, res) {
  // 1. 获取表单 POST 请求体数据
  // 2. 处理
  // 3. 发送响应
  console.log(req.body.message)

  var comment = req.body
  comment.dateTime = '2020-01-13 15:53:26'
  comments.unshift(comment)

  res.redirect('/')
  //   res.statusCode = 302
  //   res.setHeader('Location', '/')
})
/* app.get('/pinglun', function(req, res) {
  var comment = req.query
  console.log(req.query)

  comment.dateTime = '2020-01-13 15:53:26'
  comments.unshift(comment)
  //   res.statusCode = 302
  //   res.setHeader('Location', '/')
  res.redirect('/')
}) */

app.listen(3000, function() {
  console.log('running...')
})
