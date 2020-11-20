
const mongojs = require("mongojs");
require('dotenv').config()
// HRPP01  : name of our Mongo BDD
const db = mongojs(`mongodb://${process.env.USER}:${process.env.PASS}@${process.env.HOST}:${process.env.PORT}/${process.env.BDD}`);
//We call our User Model
const User = require("../model/User");

//cb = callback
function getAllUsers(cb){
    db.collection('user').find({}, (err, res) => {
        if(err){
            console.err("ERROR: " + err);
        } else {
            //map : we associate a value with each element of the array
            let users = res.map(User.fromBson)
            cb(users);
        }
    });
}

module.exports = {getAllUsers};