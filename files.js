const fs=require('fs');
//Reading operation...
// fs.readFile('./docs/blog1.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

//writing into the file...
// fs.writeFile('./docs/blog1.txt','Hello world',()=>{
//     console.log("the file was written");
// });
//directories....
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder created');
    });
}
else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}
console.log('hello world');
if(fs.existsSync('./docs/blog3.txt')){
    fs.unlink('./docs/blog3.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file is deleted');
    })
}
else{
    console.log('the file does not exist');
}
console.log("deleting the file....");