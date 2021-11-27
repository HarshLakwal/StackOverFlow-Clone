const router = require('express').Router()
const responseModel = require('../Models/responseModel');
router.post("/sendresponse",(req,res)=>{

    var userid = req.session.user._id
    var data = req.body
    responseModel.sendResponse(data,(result)=>{
        
        if(result){
            res.json({status:true})
        }
        else{
            res.json({status:false})
        }
    })
})
module.exports = router
