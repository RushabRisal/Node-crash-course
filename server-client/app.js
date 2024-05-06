const express=require('express');

//creating an express app....
const app=express();

//listening the request...
app.listen(3000);

//responding...
app.get('/',(req,res)=>{
    //res.send('<h1>home page.</h1>');
    res.sendFile('./view/index.html',{root: __dirname});
});
app.get('/about',(req,res)=>{
    //res.send('<h1>about page</h1>');
    res.sendFile('./view/about.html',{root:__dirname});
});
