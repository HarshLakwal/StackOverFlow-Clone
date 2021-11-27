const mongodb = require("../Models/mongo");
const { ObjectId } = require('mongodb')
const users = function () {
    this.saveUser = (data, callback) => {
        mongodb((status, db, client) => {
            if (status) {
                db.collection('users').insertOne(data, (err) => {

                    client.close()
                    if (err) {
                        callback(err)
                    }
                    else {
                        callback(true)
                    }
                })
            }
            else {
                callback(false)
            }
        })
    }

    this.userVerify = (data, callback) => {
        mongodb((status, db, client) => {
            if (status) {

                db.collection('users').updateOne(data, { $set: { isverify: true } }, (err) => {
                    if (err)
                        callback(err)
                    else {
                        callback(true)
                    }
                })
            }
            else {
                callback(false)
            }
        })
    }

    this.userLogin = (data, callback) => {
        mongodb((status, db, client) => {
            if (status) {
                db.collection('users').findOne(data, (err, ob) => {

                    if (err || ob == null) {
                        callback(err)
                    }
                    else {
                        callback(ob)
                    }
                })
            }
            else {
                callback(false)
            }
        })
    }
  this.uploadImg = (id ,filepath,callback)=>{
      
      mongodb((status,db,client)=>{
          if(status){
              db.collection('users').updateOne({_id:ObjectId(id)},{$set:{profilepic:filepath}},(err)=>{
                // db.collection('user').updateOne({
                //     _id:ObjectId(id)
                // },{
                //     $set:{profilepic:filepath}
                // }
                  if(err){
                      callback(false)
                  }
                  else{
                      callback(true)
                  }
              })
          }
          else{
              callback(false)
          }
      })
  }
}
module.exports = new users()