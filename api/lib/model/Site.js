class Site {
    /**
     * Represents a PCP site.
     * 
     * @param {string} id The DB id of the site
     * @param {string} name The name of the site
     * @param {string} url The url of the site
     */
    constructor(id, name, url){
        //The elements we need for result
        this.id = id;
        this.name = name;
        this.url = url;
    }

    /**
     * Serializes the current instance into its JSON representation.
     * 
     * @returns {object} The JSON value
     */
    toJson(){
        return {
            id: this.id,
            name: this.name,
            url: this.url
        };
    }

    toJsonInfo(){
        return {
            id: this.id,
            name: this.name
        }
    }

    /**
     * Deserializes the site docs from DB.
     * 
     * @param {*} doc The BSON doc to deserialize
     * @returns {Site} The site associated to the input doc
     */
    static fromBson(doc){
        return new Site(doc._id.toString(), doc.name, doc.url);
    }
}

module.exports = Site;