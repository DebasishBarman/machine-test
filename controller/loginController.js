const jwt=require('jsonwebtoken');
const loginController=async(req,res)=>{
    const {username,password}=req.body;
    try {
        if(username==='debasish'&& password==='admin'){
          let token=jwt.sign(username,'secretKey');
          res.status(200).json({
            token,
            msg:'successfull'
          });
        }
        
  
    } catch (error) {
      res.status(400).json({
        msg:'failed'
      })
    }
  }
module.exports=loginController;