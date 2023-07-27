const express=require("express")
const router=express.Router();
const cartMid=(req,res,next)=>{
    if(req.body.password=="keerthana@123"){
        next();
    }
    else{
        res.send("incorrect")
    }
}
router.get("/Login",cartMid,
(req,res)=>{
    res.send("kee3")
}
)
module.exports=router;