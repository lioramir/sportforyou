const express = require("express");





const itemsControllers=require('../controllers/items-controllers');

const fileUpload= require('../middleware/file-upload');
const checkAdmin = require('../middleware/check-admin');

const router = express.Router();



 

router.get("/Products/:category", itemsControllers.getItems);

router.get("/", itemsControllers.getcategory );
router.post("/LoginAdmin", itemsControllers.adminLogin );

//router.use(checkAdmin);

router.post("/Admin", fileUpload.fields([
    { name: 'image', maxCount: 1 },
   { name: 'image1', maxCount:1 }
  ]) , itemsControllers.createitem);

router.delete("/ProductSelection/:id", itemsControllers.deleteItem);


module.exports = router;
