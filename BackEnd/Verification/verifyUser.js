const nodemailer = require('nodemailer');

function userVerification(email,name,otp,callback){

var link = "<b> http://localhost:8080/user/userverify?email="+email+"&otp="+otp+"</b>";
var msg = "<html><body><h1>Hello " + name + " !</h1><hr> &nbsp;&nbsp; Welcome in TechQuera , please verify your account with this link : <br><br> "+link+"</body></html>";
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'semplemail360@gmail.com',
    pass: 'semple213@@'
  }
});

var mailOptions = {
  from: 'semplemail360@gmail.com',
  to: email,
  subject: 'StackOverFlow Verification Mail',
  text: msg
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    callback(false);
  } else {
      callback(true)
    console.log('Email sent: OK');
  }
});
}
module.exports = userVerification;