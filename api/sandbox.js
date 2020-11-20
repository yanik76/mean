
const AccountDao = require("./lib/dao/AccountDao");
const UserDao = require("./lib/dao/UserDao");

//file to test some functions in order to implement in the api project

AccountDao.getAllAccounts(accounts => {

    //in order to have just one random account
    let account = accounts[Math.round(Math.random() * accounts.length + 1)];
    UserDao.getAllUsers(users => {

        let userOfAccount = users.filter(user => {
            return user.accountIds.includes(account.id) 
        })
        console.log(account);
        console.log(userOfAccount);





        process.exit(0);
    });
})