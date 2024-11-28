const http = require('http');
const fs = require('fs');
const url = require('url');
const express = require('express');


const app = express();

app.get("/", (req, res) => {
    return res.send("Hello from Home Page");
});

app.get("/about", (req, res) => {
    return res.send("Hello from about Page");


})
const  myServer = http.createServer(app);
















// const myServer = http.createServer((req, res) => {
//     const log = `${Date.now()}:${req.method} ${req.url} new Req Received\n`;
//     const myUrl = url.parse(req.url);
//     // console.log(myUrl);
//     fs.appendFile("log.txt", log, (err, data) => {
//         // console.log(req);
//         switch(myUrl.pathname){
//             case '/': res.end("Home Page");
//             break
//             case '/about': 
//             const username = myUrl.query.myname
//             res.end(`Hello, ${username}`);
//             break;
//             case '/signup':
//                 if(req.method === "GET") res.end("This is a signup Form");
//                 else if(req.method === "POST") {
//                     res.end("Success");
//                 }
//             default: res.end("404 Not Found");
//         }// this method is handle by express easily
//         // res.end("Hello from server");
//     })
//     // console.log(req);
//     // res.end("Hello from server");
// });

myServer.listen(8000, () => console.log("Server Started"));
