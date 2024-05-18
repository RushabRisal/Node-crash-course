//Importing the modules...

// const abc=require('./people');
// console.log(abc);
// console.log(abc.people,abc.age);
//destructuring....
const {people,age}=require('./people');
console.log(people,age);
const os=require('os');   //os is the build-in modules which gives us the detials of our device....
console.log(os.platform(),os.homedir());




