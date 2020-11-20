class User {
    /**
     * Represents a PCP user.
     * 
     * @param {string} id The DB id of the user
     * @param {string} login The login of the user
     * 
     */
    constructor(id, login, accountIds){
        //The elements we need for result
        this.id = id;
        this.login = login;
        this.accountIds = accountIds;
    }

    /**
     * Serializes the current instance into its JSON representation.
     * 
     * @returns {object} The JSON value
     */
    toJson(){
        return {
            id: this.id,
            login: this.login,
            account_ids: this.accountIds
        };
    }

    toJsonInfo(){
        return {
            id: this.id,
            login: this.login
        };
    }


    /**
     * Deserializes the user docs from DB.
     * 
     * @param {*} doc The BSON doc to deserialize
     * @returns {User} The user associated to the input doc
     */
    static fromBson(doc){
        return new User(doc._id.toString(), doc.login, doc.compte_id.map(id => id.toString()));
    }
}

module.exports = User;