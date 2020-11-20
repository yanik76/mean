const Site = require("./Site");

class Account {
    /**
     * Represents a PCP account.
     * 
     * @param {string} id The DB id of the account
     * @param {string} name The name of the account
     * @param {string[]} speSiteIds contain speSiteIds ids
     * @param {string} logoUrl The logo Url of a site
     * @param {string} perfSiteIds contain perfSiteIds ids
     */
    constructor(id, name, speSiteIds, logoUrl, perfSiteIds) {
        //The elements we need for result
        this.id = id;
        this.name = name;
        this.speSiteIds = speSiteIds;
        this.logoUrl = logoUrl;
        this.perfSiteIds = perfSiteIds;
    }

    /**
     * Serializes the current instance into its JSON representation.
     * 
     * @param {Site[]} sites    The sites associated to this account located in an array
     * @returns {object} The JSON value
     */
    toJson(speSites, perfSites, users) {
        // our jSon display where we can take the informations for the Front Office
        return {
            id: this.id,
            name: this.name,
            logo_url: this.logoUrl,
            //we filter for each user the id of the accounts they use
            users: users.filter(user => {
                return user.accountIds.includes(this.id)
            }).map(user => user.toJsonInfo()),

            spe_sites: this.speSiteIds.map(id => {
                let site = speSites.find(site => site.id === id);
                // If we have the site name = display it
                if (site) return site.toJsonInfo();
                //Otherwise we treat the error here by returning "NO NAME"
                else return new Site(id, "NO NAME").toJsonInfo();
            }),

            perf_sites: this.perfSiteIds.map(id => {
                let site = perfSites.find(site => site.id === id);
                if (site) return site.toJsonInfo();
                else return new Site(id, "NO NAME").toJsonInfo();
            })


        };
    }

    toJsonInfo() {
        return {
            id: this.id,
            name: this.name,
            logo_url: this.logoUrl
        }
    }

    /**
     * Deserializes the account docs from DB.
     * 
     * @param {*} doc The BSON doc to deserialize
     * @returns {Account} The account associated to the input doc we have
     */
    static fromBson(doc) {
        return new Account(
            doc._id.toString(),
            doc.site_name,
            doc.site.map(e => e.toString()),
            doc.url_img,
            doc.site_PERF.map(e => e.id_site.toString()));// recuperates the id site
    }
}

module.exports = Account;