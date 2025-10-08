const path=require('path');// we create path manually , but this ensures the format and cross platform compatibility
const port=8081;
const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'about.html'));
});    

app.get('/contact-me',(req,res)=>{
    res.sendFile(path.join(__dirname,'contact-me.html'));
});

app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'404.html'));
});

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
});

