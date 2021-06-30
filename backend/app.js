const fs = require('fs');
const path =require('path');

const express= require('express');
const bodyParrser= require('body-parser');
const mongoose= require('mongoose');

//const sidebarRoutes= require('./routes/sidebar-routes');
const itemsRoutes= require('./routes/items-routes');


const app = express();

app.use(bodyParrser.json());

app.use('/uploads/images', express.static(path.join('uploads', 'images')));

app.use((req, res, next)    =>  {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
next();
});

app.use('/',itemsRoutes);

app.use((req, res, next)    =>  {
    const error= new HttpError('not find this route', 404);
    throw error;
});

app.use((error, req, res, next) =>  {
    if(req.file){
    if(req.files['image'][0]){
        fs.unlink(req.files['image'][0].path, err=>{
            console.log(err);
        });
    }
    if(req.files['image1'][0]){
        fs.unlink(req.files['image1'][0].path, err=>{
            console.log(err);
        });
    }
}
    
    if(res.headerSent){
    return next(error);
}
res.status(error.code || 500);
res.json({message: error.message || 'an unknpwn' });
});



mongoose.connect('mongodb+srv://lior1:049989657@cluster0.l4owb.mongodb.net/sportforyou?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.listen(5000);
})
.catch(err => {
    console.log(err);
});
