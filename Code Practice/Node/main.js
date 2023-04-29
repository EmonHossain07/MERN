// var http = require('http');
//
// var server = http.createServer(function (req,res) {
//     if(req.url=="/"){
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write('<h1>This is Home Page </h1>')
//         res.end();
//     }
//     else if(req.url=="/contact"){
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write('<h1>This is contact Page </h1>')
//         res.end();
//     }
//     else if(req.url=="/about"){
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write('<h1>This is about Page </h1>')
//         res.end();
//     }
// });
//
// server.listen(5000);
// console.log('Server Run Successfully');



//URL Module


// var http = require('http');
// var URL = require('url');

// var server = http.createServer(function (req,res) {

//     var myUrl = "http://rabbil.com/blog.html?year=2020&month=july";
//     var myUrlObj = URL.parse(myUrl,true);
//     var hostName = myUrlObj.host;
//     var pathName = myUrlObj.pathname;
//     var searchName = myUrlObj.search;

//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write(pathName)
//     res.end();
// });

// server.listen(5000);
// console.log('Server Run Successfully');



//fs ready file read async


// var fs = require('fs');
// var http = require('http');
//
// var server = http.createServer(function (req,res) {
//
//     if(req.url="/"){
//         fs.readFile('Home.html',function (error,data) {
//             res.writeHead(200,{'Content-Type':'text/html'});
//             res.write(data);
//             res.end();
//         });
//     }
// });
//
// server.listen(4040);
// console.log('Server Run');



//fs ready file read sync


// var fs = require('fs');
// var http = require('http');
//
// var server = http.createServer(function (req,res) {
//
//     if(req.url="/"){
//         let mydata = fs.readFileSync('Home.html')
//             res.writeHead(200,{'Content-Type':'text/html'});
//             res.write(mydata);
//             res.end();
//     }
// });
//
// server.listen(5050);
// console.log('Server Run');



//fs file write async

//
// var fs = require('fs');
// var http = require('http');
//
// var server = http.createServer(function (req,res) {
//
//     if(req.url="/"){
//         fs.writeFile('demo.txt','Welcome to NodeJs',function (error) {
//            if(error){
//                res.writeHead(200,{'Content-Type':'text/html'});
//                res.write("File Write Fail");
//                res.end();
//            }
//            else {
//                res.writeHead(200,{'Content-Type':'text/html'});
//                res.write("File Write Successfully");
//                res.end();
//            }
//         });
//     }
// });
//
// server.listen(4040);
// console.log('Server Run');



//fs file write sync


// var fs = require('fs');
// var http = require('http');
//
// var server = http.createServer(function (req,res) {
//
//     if(req.url="/"){
//         let error = fs.writeFileSync('demosync.txt','Welcome to NodeJs Sync');
//             if(error){
//                 res.writeHead(200,{'Content-Type':'text/html'});
//                 res.write("File Write Fail");
//                 res.end();
//             }
//             else {
//                 res.writeHead(200,{'Content-Type':'text/html'});
//                 res.write("File Write Successfully");
//                 res.end();
//             }
//     }
// });
//
// server.listen(5050);
// console.log('Server Run');



//fs File Rename Async


// var fs = require('fs');
// var http = require('http');
//
// var server = http.createServer(function (req,res) {
//
//     if(req.url="/"){
//         fs.rename('demo.txt','demoNew.txt',function (error) {
//             if(error){
//                 res.writeHead(200,{'Content-Type':'text/html'});
//                 res.write("File Rename Fail");
//                 res.end();
//             }
//             else {
//                 res.writeHead(200,{'Content-Type':'text/html'});
//                 res.write("File Rename Successfully");
//                 res.end();
//             }
//         })
//
//     }
// });
//
// server.listen(5050);
// console.log('Server Run');



//fs File Rename sync


// var fs = require('fs');
// var http = require('http');
//
// var server = http.createServer(function (req,res) {
//
//     if(req.url="/"){
//         var error = fs.renameSync('demoNew.txt','demoNewNew.txt');
//             if(error){
//                 res.writeHead(200,{'Content-Type':'text/html'});
//                 res.write("File Rename Fail");
//                 res.end();
//             }
//             else {
//                 res.writeHead(200,{'Content-Type':'text/html'});
//                 res.write("File Rename Successfully");
//                 res.end();
//             }
//     }
// });
//
// server.listen(5050);
// console.log('Server Run');



//fs File Delete Async


// var fs = require('fs');
// var http = require('http');
//
// var server = http.createServer(function (req,res) {
//
//     if(req.url="/"){
//         fs.unlink('Fdelete.txt',function (error) {
//             if(error){
//                 res.writeHead(200,{'Content-Type':'text/html'});
//                 res.write("File Rename Fail");
//                 res.end();
//             }
//             else {
//                 res.writeHead(200,{'Content-Type':'text/html'});
//                 res.write("File Rename Successfully");
//                 res.end();
//             }
//         })
//
//     }
// });
//
// server.listen(5050);
// console.log('Server Run');



//fs File Delete sync


// var fs = require('fs');
// var http = require('http');
//
// var server = http.createServer(function (req,res) {
//
//     if(req.url="/"){
//         var error = fs.unlinkSync('Dsync.txt');
//             if(error){
//                 res.writeHead(200,{'Content-Type':'text/html'});
//                 res.write("File Rename Fail");
//                 res.end();
//             }
//             else {
//                 res.writeHead(200,{'Content-Type':'text/html'});
//                 res.write("File Rename Successfully");
//                 res.end();
//             }
//     }
// });
//
// server.listen(4040);
// console.log('Server Run');



//fs file exit async


// var fs = require('fs');
// var http = require('http');
//
// var server = http.createServer(function (req,res) {
//
//     if(req.url="/"){
//         fs.exists('demoNewNew1.txt',function (result) {
//             if(result){
//                 res.end("True");
//             }
//             else {
//                 res.end("False");
//             }
//         })
//
//     }
// });
//
// server.listen(5050);
// console.log('Server Run');



//fs file exit sync


var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req,res) {

    if(req.url="/"){
        var result = fs.existsSync('demoNewNew.txt');
            if(result){
                res.end("True");
            }
            else {
                res.end("False");
            }
    }
});

server.listen(5000);
console.log('Server Run');