const fs=require('fs');
if(!fs.existsSync('./server-client')){
    fs.mkdir('./server-client',(err)=>{
        if(err){
            console.log(err);
        };
        console.log('folder created');
    });
}
else{
    console.log("the folder exists!");
}