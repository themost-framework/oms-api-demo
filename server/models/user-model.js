import {EdmMapping,EdmType} from '@themost/data/odata';
import {DataObject} from '@themost/data/data-object';
import {httpGet} from "@themost/web/decorators";
let Account = require('./account-model');
/**
 * @class
 
 * @property {Date} lockoutTime
 * @property {number} logonCount
 * @property {boolean} enabled
 * @property {Date} lastLogon
 * @property {Array<Group|any>} groups
 * @property {number} userFlags
 * @property {number} id
 * @augments {DataObject}
 */
@EdmMapping.entityType('User')
class User extends Account {
    /**
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Returns the interactive user
     * @param {HttpContext} context
     * @returns {Promise<any>}
     */
    @EdmMapping.func('Me', 'User')
    static async getMe(context) {
        return await context.model('User')
            .where('name').equal(context.user.name)
            .expand('groups')
            .getItem();
    }

}
module.exports = User;
