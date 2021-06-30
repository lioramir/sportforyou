const HttpError= require('../models/http-error');
const Items = require('../models/items');
const jwt = require('jsonwebtoken');



 



  const getcategory= async(req, res, next) => {
    
    let uniquecategorys;
    let RecommendedImg;
    let Legionnaires;
    try{
    const categorys= await Items.find();
    const RecommendedData= await Items.find({category: "מומלצים"});
    const LegionnairesData= await Items.find({category: "ליגיונרים"});
    Legionnaires=LegionnairesData.map(R => R.picture);
    RecommendedImg= RecommendedData.map(R => R.picture);
    const unique = categorys.map(p =>  p.category);
    uniquecategorys= [...new Set(unique)];
    }catch(err){
      
    const error =new HttpError(
      'weong',500
    );
    return next(error);
    }
    

    if(!uniquecategorys){
      const error = new HttpError('not finde',404);
      return next(error);
     }
    
    res.json({uniquecategorys: uniquecategorys ,
             RecommendedImg: RecommendedImg,
             Legionnaires:Legionnaires
    });
  };


const getItems= async (req, res, next) => {
    const categoryName= req.params.category;
let items;
    try{
    items= await Items.find({category: categoryName});
  }catch (err){
    const error =new HttpError(
      'weong',500
    );
    return next(error);
    
  }


    if(!items){
      const error = new HttpError('not finde',404);
      return next(error);
    }
    res.json({items: items})
  };



  const adminLogin= async (req, res, next) => {
    const { UserName, UserPassword }=req.body;
  if(UserName!=="admin" || UserPassword!=="admin"){
   
    
   const error = new HttpError('not finde',404);
   return next(error);
  
 }
  
    let token;
    try{
    token=jwt.sign({login:'Admin'}, 'dont_share', {expiresIn:'1h'});
    }
    catch (err){
      const error = new HttpError('not finde',404);
      return next(error);
    }
    res.json({token: token});
  };
  

  const createitem= async (req, res, next) => {
   
   
    const { name, category, praic, Previous_price, Measure, printing, Pants }=req.body;
 
    const createditem= new Items({
        name,
        category, 
        praic, 
        Previous_price, 
        Measure, 
        printing,
        picture: 'http://localhost:5000/' + req.files['image'][0].path,
        picture2:'http://localhost:5000/' + req.files['image1'][0].path,
        Pants

    });
    try {
    await createditem.save();
    }catch (err){
      const error = new HttpError('creating items failed',500);
      return next(error);
    };

    res.status(201).json({item: createditem});

  };

  const deleteItem = async(req, res, next) => {
    const itemId= req.params.id;
    let item;
    try{
      item= await Items.findById(itemId);
    }catch(err){
      
        const error= new HttpError('could not delete item',500);
        return next(error);
      
    }
    try{
     await item.remove();
    }catch(err){
      
      const error= new HttpError('could not delete item1',500);
      return next(error);
    
  }
    
    res.status(200).json({message: 'deleted items'});
  };


exports.getItems=getItems;
exports.getcategory=getcategory;
exports.createitem=createitem;
exports.deleteItem=deleteItem;
exports.adminLogin=adminLogin;
