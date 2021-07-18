var express = require('express')
var cors = require('cors');

var app = express();
app.use(cors())

app.get('/api/test', (req, res) => {
  res.json({
    code: 0,
    message: '成功',
    content: '接口调用成功',
  })
})

app.listen(4000, () => {
  console.log('正在监听4000端口');
})