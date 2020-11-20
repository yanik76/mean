
const mongojs = require("mongojs");
require('dotenv').config()
const db = mongojs(`mongodb://${process.env.USER}:${process.env.PASS}@${process.env.HOST}:${process.env.PORT}/${process.env.BDD}`);
//we require our Site model
const Site = require("../model/Site");

//cb = callback
function getAllSites(cb){
    db.collection('sites').find({}, (err, res) => {
        //we handle our error this way
        if(err){
            console.err("ERROR: " + err);
        } else {
            //map : we associate a value with each element of the array
            let sites = res.map(Site.fromBson)
            cb(sites);
        }
    });
}
//method to get monitored sites 
function getSites(siteIds, cb){
    db.collection('sites').find({_id: {$in: siteIds.map(id => new mongojs.ObjectId(id))}}, (err, res) => {
        if(err){
            console.err("ERROR: " + err);
        } else {
            //map : we associate a value with each element of the array
            //Create all sites with Site model
            let sites = res.map(Site.fromBson)
            cb(sites);
        }
    });
}

module.exports = {getAllSites, getSites};