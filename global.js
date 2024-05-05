//Global Objects....
//console.log(global);
setTimeout(() => {
    console.log("hello world");
    clearInterval(int);
}, 3000);
const int=setInterval(() => {
    console.log('this is the interval of 2secs');
}, 1000);
console.log(__dirname);
console.log(__filename);