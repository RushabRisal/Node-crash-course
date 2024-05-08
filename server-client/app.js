const express=require('express');

//creating an express app....
const app=express();
//register view engine...
app.set('view engine','ejs');
//listening the request...
app.listen(3000);
//routings....   asd
//responding...
app.get('/',(req,res)=>{
    //res.send('<h1>home page.</h1>');
   // res.sendFile('./view/index.html',{root: __dirname});
   res.render('index',{title: 'Home'});
});
app.get('/about',(req,res)=>{
    //res.send('<h1>about page</h1>');
    //res.sendFile('./view/about.html',{root:__dirname});
    const blogs=[
        {title:'Rushab', snippet:'hello world!'},
        {title:'harsh', snippet:'how are you'},
        {title:'rishav', snippet:'im fine'}
    ]
    res.render('about',{title:'About',blogs});
});
app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create'});
})
//redirecting....
// app.get('/about-us',(req,res)=>{
//     res.redirect('/about');
// })
//404 error...
app.use((req,res)=>{
    //res.status(404).sendFile('./view/404.html',{root:__dirname});
    res.status(404).render('404');
})
