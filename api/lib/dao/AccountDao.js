
const mongojs = require("mongojs");
require('dotenv').config()
//In order to use our mongojs objectId
//Doc ObjectId : https://docs.mongodb.com/manual/reference/method/ObjectId/
const ObjectId = mongojs.ObjectId;
//Road to connect to the database HRRPP01
const db = mongojs(`mongodb://${process.env.USER}:${process.env.PASS}@${process.env.HOST}:${process.env.PORT}/${process.env.BDD}`);
//On collection compte
const collection = db.collection("compte");
//We require our account model
const Account = require("../model/Account");

//cb = callback
function getAllAccounts(cb){
    collection.find({}, (err, res) => {
        //we handle our error this way
        if(err){
            console.err("ERROR: " + err);
        } else {
            //Doc map : https://docs.mongodb.com/manual/reference/operator/aggregation/map/index.html
            //map : we associate a value with each element of the array
            //MongoDB returns Bson : doc https://www.mongodb.com/json-and-bson
            let accounts = res.map(Account.fromBson)
            cb(accounts);
        }
    });
}

function getAccount(accountId, cb){
    
    if(ObjectId.isValid(accountId)){
        collection.find({_id: new ObjectId(accountId)}, (err, res) => {
            if(err){
                console.err("ERROR: " + err);
            } else {
                if(res.length > 0){
                    let account = Account.fromBson(res[0]);
                    cb(account);
                } else {
                    cb(undefined);
                }
            }
        });
    } else {
        cb(undefined);
    }
}
//we export our functions in all our API
module.exports = {getAllAccounts, getAccount};