const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    //console.log(req);
   // console.log(req.url,req.method);
    //routing....
    let path='./view/';
    switch(req.url){
        case '/':
            path+='index.html';
            break;
        case '/about':
            path+='about.html';
            break;
        default:
            path+='404.html';
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

