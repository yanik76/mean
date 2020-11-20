
const mongojs = require("mongojs");
require('dotenv').config()
const ObjectId = mongojs.ObjectId;
// PCP is the other BDD name where user action records are presents
const db = mongojs(`mongodb://${process.env.USER}:${process.env.PASS}@${process.env.HOST}:${process.env.PORT}/${process.env.BDD2}`);

//On appelle notre modèle User
const UserActionRecords = require("../model/UserActionRecords");


//cb = callback
function getAllUserActionRecords(pageIndex, pageSize, cb) {
    //This collection has many entries, in order to have an optimized API we must use the limit and skip function
    db.collection('user_action_records').find({}).limit(pageSize).skip(pageSize * (pageIndex - 1), (err, res) => {
        if (err) {
            console.err("ERROR: " + err);
        } else {
            //map : we associate a value with each element of the array
            let userActionRecords = res.map(UserActionRecords.fromBson)
            cb(userActionRecords);
        }
    });
}

function getUserActionRecords(userId, cb) {
    // GEt all the actions for one user
    if (ObjectId.isValid(userId)) {
        db.collection('user_action_records').find({ user_id: new ObjectId(userId) }, (err, res) => {
            if (err) {
                console.err("ERROR: " + err);
            } else {
                let userActionRecords = res.map(UserActionRecords.fromBson);
                cb(userActionRecords);
            }
        })
    } else {
        cb([]);
    }
}

module.exports = { getAllUserActionRecords, getUserActionRecords };