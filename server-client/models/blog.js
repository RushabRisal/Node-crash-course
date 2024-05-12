const mongoose=require('mongoose');
const schema=mongoose.Schema;
//create the schema which defines the structure of the document.....
const blogSchema=new schema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
},{timestamps:true});

//creating the model that wraps up the schema through which we can communicate with database...
const Blog=mongoose.model('Blog',blogSchema);
module.exports=Blog;