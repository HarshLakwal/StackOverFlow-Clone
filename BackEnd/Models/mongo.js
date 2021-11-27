const mongodb = require('mongodb').MongoClient
const url = "mongodb://localhost:27017";

function getClient (callback){
    mongodb.connect(url,(err,client)=>{
        if(err){
            callback(err)
        }
        else{
            var db = client.db("stackOverFlow")
            callback(true,db,client,)
        }
    })
}
module.exports = getClient;