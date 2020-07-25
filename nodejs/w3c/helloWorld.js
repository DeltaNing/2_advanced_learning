// 请求（require）Node.js自带的http模块，并把它赋值给http变量
let http = require('http');

// 创建服务对象
// creatServer() 返回一个对象, 并使用该对象的listen()方法，参数为number，指定
// 这个http服务器监听的端口号
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('Hello Ning\n');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');