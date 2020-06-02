/**
 * @file  : index.js
 * @author: Richard Annowit <richardannowit@gmail.com>
 * Date   : 02-06-2020 20:22:18
 */

const http = require("http");

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.end('Hello World');
});
server.listen(3000);
