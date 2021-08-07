var express = require('express')  //nodejs的express框架
var cors = require('cors');       //跨域处理
var mysql = require('mysql');     //mysql数据库

//连接mysql数据库
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'douban_activity'
});
conn.connect();

var app = express();
app.use(cors())

//api请求接口
app.get('/api/test', (req, res) => {
  res.json({
    code: 0,
    message: '成功',
    content: '接口调用成功',
  })
})

//监听端口
app.listen(4000, () => {
  console.log('正在监听4000端口');
})

// //查询数据库
// var sql = '';
// conn.query(sql, function (err, data) {
//   if (err) {
//     console.log('[SELECT ERROR] - ', err.message);
//     return;
//   }
//   console.log('mysql query result:');
//   console.log(data);
// });

// conn.end();


//api请求接口
app.post('/api/getDoubanActivity', (req, res) => {
  var sql = 'select * from ';
  conn.query(sql, function (err, data) {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return;
    }
    console.log('mysql query result:');
    console.log(data);

    var result = { code: 200, message: "get Douban Activity success", data: data };

    res.send(result);
    // return res.jsonp(result);
  });
  conn.end();
})