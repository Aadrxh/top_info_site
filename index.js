const http=require('http'); // create a server 
const fs=require('fs');
const path=require('path');// we create path manually , but this ensures the format and cross platform compatibility
const port=8081;

function serveFile(filename,res,statusCode=200){ //provides correct file thorugh its path based on req url , status code ensures that correct file is served
    const filePath=path.join(__dirname,filename);
    console.log("Trying to read:",filePath);

    fs.readFile(filePath,(err,data)=>{
        if(err){
            res.writeHead(500,{'Content-Type':'text/html'});
            res.end('<h1>500 Internal Server Error</h1>');}
        else{
            res.writeHead(statusCode,{ 'Content-Type':'text/html' }); //the response object
            res.end(data);
        }
    });
} 

const server=http.createServer((req,res)=>{
    switch(req.url){
        case '/':
            serveFile('index.html',res);
            break;
        case '/about':
            serveFile('about.html',res);
            break;
        case '/contact-me':
            serveFile('contact-me.html',res);
            break;
        default:
            serveFile('404.html',res,404);
            break;
    }
});

server.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
});

