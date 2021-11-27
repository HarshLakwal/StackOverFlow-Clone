const mongodb = require('../Models/mongo')
const Answer = function(){
    this.sendResponse = (data,callback)=>{
        mongodb((status,db,client)=>{
            if(status){
                db.collection('responses').insertOne(data,(err)=>{
                    client.close()
                    if(err){
                        callback(err)
                    }
                    else{
                        callback(true)
                        
                    }
                })
            }
        })
    }
}
module.exports = new Answer()