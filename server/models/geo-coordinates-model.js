import {EdmMapping,EdmType} from '@themost/data/odata';
import {DataObject} from '@themost/data/data-object';
let StructuredValue = require('./structured-value-model');
/**
 * @class
 
 * @property {number} latitude
 * @property {number} longitude
 * @property {PostalAddress|any} address
 * @property {Country|any} addressCountry
 * @property {string} postalCode
 * @property {string} elevation
 * @property {number} id
 * @augments {DataObject}
 */
@EdmMapping.entityType('GeoCoordinates')
class GeoCoordinates extends StructuredValue {
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}
module.exports = GeoCoordinates;