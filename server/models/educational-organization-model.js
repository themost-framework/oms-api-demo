import {EdmMapping,EdmType} from '@themost/data/odata';
import {DataObject} from '@themost/data/data-object';
let Organization = require('./organization-model');
/**
 * @class
 
 * @property {Array<Person|any>} alumni
 * @property {number} id
 * @augments {DataObject}
 */
@EdmMapping.entityType('EducationalOrganization')
class EducationalOrganization extends Organization {
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}
module.exports = EducationalOrganization;