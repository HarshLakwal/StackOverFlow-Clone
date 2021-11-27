const router = require('express').Router()
const userModel = require('../Models/userModel');
const path = require('path')
const userVerification = require('../Verification/verifyUser');
router.post("/saveuser", (req, res) => {
    var otp = Math.floor(1000 + Math.random() * 9000) + "";
    var user = req.body
    userVerification(user.email, user.name, otp, (status) => {

        if (status) {
            user.isverify = true
            user.profilepic = "/userImg/logo.png"
            user.otp = otp
            userModel.saveUser(user, (result) => {
                res.json({ status: true })
                
            })
        }
        else {
            res.json({ status: false })
        }
    })

})

router.get("/userverify", (req, res) => {
    console.log(req.query)
    userModel.userVerify(req.query, (status) => {
        if (status) {
            res.send("Verification Done...!")
        }
        else {
            res.json("Verifiation Failed try again")
        }
    })

})

router.post("/loginuser", (req, res) => {

    userModel.userLogin(req.body, (result) => {
        if (result) {
            if (result.isverify) {
                req.session.user = result
                res.json({ status: true, isverify: true })
            }
            else {
                res.json({ status: true, isverify: false })
            }

        }
        else {
            res.json({ status: false })
        }

    })

})

router.get('/checksession', (req, res) => {
    if (req.session.user == undefined) {
        res.json({ status: false })
    }
    else {
        var pic = req.session.user.profilepic
        res.json({ status: true,pic:pic })
    }
})
router.get('/logout', (req, res) => {
    req.session.destroy()
    res.json({ result: true })
});
router.post("/uploadimg",(req,res)=>{
    var myimg = req.files.uploadfile
    var ext = path.extname(myimg.name)
    var imgname = new Date().getUTCMilliseconds()+ext
    var filepath1 = path.join(__dirname,'../../public/img',imgname)
    var filepath2 = path.join(__dirname,'../../build/img',imgname)
    myimg.mv(filepath1)
    myimg.mv(filepath2)
    var id = req.session.user._id
    userModel.uploadImg(id,"/userImg/"+imgname,(status)=>{
        if(status){
            res.json({status:true})
        }
        else{
            res.json({status:false})
        }
    })
   
})
module.exports = router