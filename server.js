const express = require('express')
const path = require('path')
const cookiePaser = require("cookie-parser")
const expressSession = require("express-session")
const fileupload = require("express-fileupload")
const router = require("./BackEnd/Routes/userRouter")
const queryrouter = require("./BackEnd/Routes/queryRouter")
const responserouter = require("./BackEnd/Routes/responseRouter")
const App = express();
App.use(express.static(path.resolve("build")));
App.use(express.json())
App.use(cookiePaser());
App.use(expressSession({secret:"harsh lakwal"}));
App.use(fileupload())
App.use("/user",router);
App.use("/user",queryrouter);
App.use("/user",responserouter)
App.listen(8080,()=>{
    console.log("http://localhost:8080")
})