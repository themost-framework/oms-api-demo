import {EdmMapping,EdmType} from '@themost/data/odata';
import {DataObject} from '@themost/data/data-object';
let AdministrativeArea = require('./administrative-area-model');
/**
 * @class
 
 * @property {string} official
 * @property {string} cca2
 * @property {string} cca3
 * @property {string} cioc
 * @property {string} currency
 * @property {number} id
 * @augments {DataObject}
 */
@EdmMapping.entityType('Country')
class Country extends AdministrativeArea {
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}
module.exports = Country;