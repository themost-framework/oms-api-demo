import {EdmMapping,EdmType} from '@themost/data/odata';
import {DataObject} from '@themost/data/data-object';
let Intangible = require('./intangible-model');
/**
 * @class
 
 * @property {number} id
 * @augments {DataObject}
 */
@EdmMapping.entityType('StructuredValue')
class StructuredValue extends Intangible {
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}
module.exports = StructuredValue;