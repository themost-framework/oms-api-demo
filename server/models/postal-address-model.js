import {EdmMapping,EdmType} from '@themost/data/odata';
import {DataObject} from '@themost/data/data-object';
let ContactPoint = require('./contact-point-model');
/**
 * @class
 
 * @property {string} postOfficeBoxNumber
 * @property {string} streetAddress
 * @property {Country|any} addressCountry
 * @property {string} addressRegion
 * @property {string} postalCode
 * @property {string} addressLocality
 * @property {number} id
 * @augments {DataObject}
 */
@EdmMapping.entityType('PostalAddress')
class PostalAddress extends ContactPoint {
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}
module.exports = PostalAddress;