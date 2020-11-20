// require express to use in the file
const express = require("express");
const router = express.Router();
const cors = require('cors')
const app = express();
//Port defined on 3000
const port = 3000;
//in order to use our lib AccountDao, etc...
const AccountDao = require("./lib/dao/AccountDao");
const SiteDao = require("./lib/dao/SiteDao");
const UserDao = require("./lib/dao/UserDao");
const UserActionRecordsDao = require("./lib/dao/UserActionRecordsDao");

router.get("/accounts", (req, res) => {
    AccountDao.getAllAccounts(accounts => {
        // map => we associate a value with each element of the array
        let jsonAccounts = accounts.map(account => account.toJsonInfo());
        //on affiche le résultat
        res.send(jsonAccounts);
    })
});

//creation of our route to manage an account id
router.get("/accounts/:accountId", (req, res) => {
    let accountId = req.params.accountId;
    //we create our join between Account and user, an account now contains user informations
    AccountDao.getAccount(accountId, account => {
        if(account){
            //many callbacks here ( doc cb  => https://docs.mongodb.com/drivers/node/fundamentals/promises)
            SiteDao.getSites(account.speSiteIds, speSites => {
                SiteDao.getSites(account.perfSiteIds, perfSites => {
                    UserDao.getAllUsers(users => {
                        res.send(account.toJson(speSites, perfSites, users));
                    })
                    
                });
            });
        } else {
            res.status(404);
            res.send("<h1>Not found</h1>");
        }
    })
});

//creation of our route to manage a display of sites
router.get("/sites", (req, res) => {
    SiteDao.getAllSites(sites => {
        //map => we associate a value with each element of the array
        let jsonSites = sites.map(site => site.toJsonInfo());
        //result display
        res.send(jsonSites);
    })
});

router.get("/users", (req, res) => {
    UserDao.getAllUsers(users => {
        let jsonUsers = users.map(user => user.toJsonInfo());
        res.send(jsonUsers);
    })
});


//creation of a route allowing to retrieve all the actions of each user
router.get("/records", (req, res) =>{
    //pageSize and pageIndex defined on userActionRecordsDao
    let pageSize = 50;
    // ?p= to do the number off lines we wants
    let pageIndex = req.query.p;
    UserActionRecordsDao.getAllUserActionRecords(pageIndex, pageSize, userActionRecords => {
        //map => we associate a value with each element of the array
        let jsonUserActionRecords = userActionRecords.map(userActionRecords => userActionRecords.toJson());
        //result display
        res.send(jsonUserActionRecords);
    })
});

//creation of a route allowing to retrieve the actions of one user
router.get("/records/:userId", (req, res) =>{
    let userId = req.params.userId;
    UserActionRecordsDao.getUserActionRecords(userId, records =>{
        //transformation in his jSon representation
        let jsonUserActionRecords = records.map(userActionRecords => userActionRecords.toJson());
        //we display the result
        res.send(jsonUserActionRecords);
         
            
        
    })
})


app.use(cors());
app.use("/", router);

app.listen(port, () => console.log("Listening on port " + port));