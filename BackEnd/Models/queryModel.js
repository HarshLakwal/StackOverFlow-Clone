const mongodb = require("../Models/mongo")
const {ObjectId} = require('mongodb')
const queries = function () {
    this.userquery = (userquery, callback) => {
        
        mongodb((status, db, client) => {
            if (status) {
                db.collection('queries').insertOne(userquery, (err) => {
                    client.close()
                    if (err) {
                        callback(err)
                    }
                    else {
                        callback(true)
                    }
                })
            }
        })
    }
    this.loadquery=(id,callback)=>{
        mongodb((status,db,client)=>{
            if(status){
               var where =  {userid:id}
                db.collection('queries').find(where).toArray((err,rec)=>{
                    if(err){
                        callback([])
                        console.log("error",err)
                    }
                    else{
                        callback(rec)
                        
                    }
                })
            }
            else{
                callback(false)
            }
        })
    }
    this.loadOtherquery=(id,callback)=>{
        mongodb((status,db,client)=>{
            if(status){
              
               
                db.collection('queries').find({userid:{$ne:ObjectId(id)}}).toArray((err,rec)=>{
                    if(err){
                        callback([])
                        console.log("error",err)
                    }
                    else{
                        callback(rec)
                        

                    }
                })
            }
            else{
                callback(false)
            }
        })
    }
     this.deletequery=(id,callback)=>{
         mongodb((status,db,client)=>{
             if(status){
               console.log(id)
                 db.collection('queries').deleteOne(id,(err)=>{
                     if(err){
                         callback(false)
                     }
                     else{
                         callback(true)
                     }
                 })
             }
         })
     }
}  
module.exports = new queries();