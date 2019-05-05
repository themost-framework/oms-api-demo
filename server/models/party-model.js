import {EdmMapping,EdmType} from '@themost/data/odata';
import {DataObject} from '@themost/data/data-object';
let Thing = require('./thing-model');
/**
 * @class
 
 * @property {Party} sponsor
 * @property {string} taxID
 * @property {PostalAddress} address
 * @property {string} email
 * @property {string} telephone
 * @property {string} vatID
 * @property {Array<string>} awards
 * @property {string} faxNumber
 * @property {number} id
 * @augments {DataObject}
 */
@EdmMapping.entityType('Party')
class Party extends Thing {
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}
module.exports = Party;