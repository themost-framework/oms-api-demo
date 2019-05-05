import {EdmMapping,EdmType} from '@themost/data/odata';
import {DataObject} from '@themost/data/data-object';
let Place = require('./place-model');
/**
 * @class
 
 * @property {number} id
 * @augments {DataObject}
 */
@EdmMapping.entityType('AdministrativeArea')
class AdministrativeArea extends Place {
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}
module.exports = AdministrativeArea;