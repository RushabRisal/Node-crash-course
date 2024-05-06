const fs=require('fs');
const readStream=fs.createReadStream('./docs/blog2.txt',{encoding: 'utf8'});
const writeStream=fs.createWriteStream('./docs/blog3.txt');
// readStream.on('data',(chunk)=>{
//     console.log('-----new chunk-----');
//     writeStream.write('\nnew chunk\n');
//     writeStream.write(chunk);
//     console.log(chunk);
// });
//pipe...
readStream.pipe(writeStream);