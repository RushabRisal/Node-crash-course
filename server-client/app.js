const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const Blog=require('./models/blog');
//creating an express app....
const app=express();
//connection to mongodb....
const dbURI='mongodb+srv://rushabofficials:MG21wbYLNbdRlI5F@cluster0.gpjfyca.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dbURI)
    .then((result)=>app.listen(3000))
    .catch((err)=>console.log(err))

//register view engine...
app.set('view engine','ejs');
//listening the request...
// app.listen(3000);

//middleware....
// app.use((req,res,next)=>{
//     console.log("the details:");
//     console.log('host:',req.hostname);
//     console.log('path:',req.path);
//     console.log('method',req.method);
//     next();
// });
// app.use((req,res,next)=>{
//     console.log("hi im back");
//     next(); 
// });
//middleware and static file...
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
//app.use(morgan('dev'));


//mongoose and mongo sandbox routes
// app.get('/add-blog',(req,res)=>{
//     const blog=new Blog({
//         title:'new blog 2',
//         snippet:'about my new blog',
//         body:'more about my new blog'
//     });
//     blog.save()     //use to save the document...
//         .then((result)=>{res.send(result)})
//         .catch((err)=>console.log(err));
// });
// //getting the data from database...
// app.get('/all-blogs',(req,res)=>{
//     Blog.find()   //use to display the document...
//         .then((result)=>{res.send(result)})
//         .catch((err)=>{console.log(err)})
// });
// //getting the single data...
// app.get('/single-blog',(req,res)=>{
//     Blog.findById('6640bf7a38ed1f0ef575a43a')
//         .then((result)=>{res.send(result)})
//         .catch((err)=>{console.log(err)})
// })
//routings....   
//responding...
app.get('/',(req,res)=>{
    //res.send('<h1>home page.</h1>');
   // res.sendFile('./view/index.html',{root: __dirname});
   res.render('index',{title: 'Home'});
});

app.get('/about',(req,res)=>{
    //res.send('<h1>about page</h1>');
    //res.sendFile('./view/about.html',{root:__dirname});
    // const blogs=[
    //     {title:'Rushab', snippet:'hello world!'},
    //     {title:'harsh', snippet:'how are you'},
    //     {title:'rishav', snippet:'im fine'}
    // ]
    // res.render('about',{title:'About',blogs});
    Blog.find().sort({createdAt:-1})
        .then((result)=>{
            res.render('about',{title:'All blogs', blogs:result});
        })
        .catch((err)=>console.log(err));
});
app.post('/blog',(req,res)=>{
    const blog=new Blog(req.body);
    blog.save()
        .then((result)=>{
            res.redirect('/about');
        })
        .catch((err)=>{console.log(err)});
})
app.get('/blogs/:id',(req,res)=>{
    const id=req.params.id;
    Blog.findById(id)
        .then((result)=>{
            res.render('details',{Blog:result,title:'blog details'});
        })
        .catch((err)=>{console.log(err)});
})
app.delete('/blogs/:id',(req,res)=>{
    const id=req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result)=>{
            res.json({redirect:'/about'});
        })
        .catch((err)=>console.log(err));
})
app.get('/new-blog',(req,res)=>{
    res.render('newBlog',{title:'Create new blog'});
});
//redirecting....
// app.get('/about-us',(req,res)=>{
//     res.redirect('/about');
// })
//404 error...
app.use((req,res)=>{
    //res.status(404).sendFile('./view/404.html',{root:__dirname});
    res.status(404).render('404',{title:'404'});
})
