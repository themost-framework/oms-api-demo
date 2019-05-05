import {EdmMapping,EdmType} from '@themost/data/odata';
import {DataObject} from '@themost/data/data-object';
let StructuredValue = require('./structured-value-model');
/**
 * @class
 
 * @property {number} id
 * @property {string} faxNumber
 * @property {string} telephone
 * @property {string} email
 * @property {string} contactType
 * @augments {DataObject}
 */
@EdmMapping.entityType('ContactPoint')
class ContactPoint extends StructuredValue {
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}
module.exports = ContactPoint;