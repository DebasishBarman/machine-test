var express = require('express');
var router = express.Router();
var jwt=require('jsonwebtoken')
var verify=require('../middleware/verifyToken');
var{body} =require('express-validator');
var multer=require('multer')
var loginController=require('../controller/loginController')


//login route

router.post('/login',[
  body('username').notEmpty().trim().escape(),
  body('password').notEmpty().trim()
],verify,loginController);


router.get('/verifyUser',verify,async(req,res)=>{
    res.status(200).json({
      msg:'successfull',
      'body':'You are a verified User'
    })
})

//
//upload file not working
const upload=multer({dest:'../public'});
router.post('/uploadFile',verify,upload.single('file'),async(req,res)=>{
  console.log(req.file);
  res.send('File uploaded successfully')
})

module.exports = router;
