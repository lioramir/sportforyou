const HttpError = require('../models/http-error');
const jwt=require('jsonwebtoken');

module.exports= (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        if(!token){
           throw new Error('authorization failed!',401); 
        }
      jwt.verify(token, 'dont_share');
      next();
    }catch{
        const error = new HttpError('authorization failed!',401);
        return next(error);

    }


};