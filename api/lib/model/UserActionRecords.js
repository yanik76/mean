class UserActionRecords {
    /**
     * Represents a PCP user action record.
     * 
     * @param {string} id The DB id of the user action record
     * @param {date} timestamp
     * @param {string} userId 
     * @param {action} action The action of the user action record
     * 
     */
    constructor(id,timestamp,userId,action){
        //The elements we need for result
        this.id = id;
        this.timestamp = timestamp;
        this.userId = userId;
        this.action = action;
        }

    /**
     * Serializes the current instance into its JSON representation.
     * 
     * @returns {object} The JSON value
     */
    toJson(){
        return {
            id: this.id,
            timestamp: this.timestamp,
            userId: this.userId,
            action: this.action,
            
        };
    }

    /**
     * Deserializes the user docs from DB.
     * 
     * @param {*} doc The BSON doc to deserialize
     * @returns {UserActionRecords} The user associated to the input doc
     */
    static fromBson(doc){
        return new UserActionRecords(doc._id.toString(),doc.timestamp.toString(),doc.user_id.toString(),doc.action);
    }
}

module.exports = UserActionRecords;