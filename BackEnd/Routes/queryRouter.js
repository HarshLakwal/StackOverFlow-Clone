const router = require('express').Router();
const queryModel = require('../Models/queryModel');

router.post("/askqueries", (req, res) => {

    var userquery = req.body
    req.session.realTimerec = userquery
    console.log(req.session.realTimerec)
    userquery.userid = req.session.user._id
    queryModel.userquery(userquery, (status) => {
        if (status) {
            res.json({ status: true })
        }
        else {
            res.json({ status: false })
        }
    })
})
router.get("/loadquery",(req,res)=>{
    var id = req.session.user._id
    var newData = req.session.realTimerec
    queryModel.loadquery(id,(records)=>{
       res.json(records)
    })
})
router.get("/deletequery",(req,res)=>{
    var id = req.body
    console.log(req.query)
     queryModel.deletequery(id,(result)=>{
         res.json(result)
         console.log("result",result)
     })
})
router.get("/showotherquery",(req,res)=>{
    var id = req.session.user._id
    
    queryModel.loadOtherquery(id,(records)=>{
        
        res.json(records)
    })
    
})

module.exports = router