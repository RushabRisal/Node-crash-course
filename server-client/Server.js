const http=require('http');
const fs=require('fs');
const _=require('lodash');
const server=http.createServer((req,res)=>{
    //console.log(req);
   // console.log(req.url,req.method);
    //lodash...
    const num=_.random(0,20);
    console.log(num);
    const greeting=_.once(()=>{
        console.log('hello rushab!');
    });
    greeting();
    greeting();


    //routing....
    let path='./view/';
    switch(req.url){
        case '/':
            path+='index.html';
            res.statusCode=200;   //status code....
            break;
        case '/about':
            path+='about.html';
            res.statusCode=200;
            break;
        case '/about-ours':
            res.statusCode=301;
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path+='404.html';
            res.statusCode=404;
            break;
    }



    //setting the response header....which gives the browser some idea about the response(what type of response...)....
    res.setHeader('Content-type','text/html');
    //send the html page as a response...
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
           // res.write(data);
            res.end(data);
        }
    })

    // res.write("<h1>Hello world!! how are you guys!!</h1>");
    // res.end();
});

server.listen(3000,'localhost',()=>{
    console.log('request is listened at port 3000');
})

