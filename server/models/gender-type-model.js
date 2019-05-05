import {EdmMapping,EdmType} from '@themost/data/odata';
import {DataObject} from '@themost/data/data-object';

/**
 * @class
 
 * @property {string} name
 * @property {string} alternateName
 * @property {number} id
 * @property {string} sameAs
 * @property {string} url
 * @property {string} image
 * @property {string} additionalType
 * @property {string} identifier
 * @property {string} description
 * @property {string} disambiguatingDescription
 * @property {Date} dateCreated
 * @property {Date} dateModified
 * @property {number} createdBy
 * @property {number} modifiedBy
 * @augments {DataObject}
 */
@EdmMapping.entityType('GenderType')
class GenderType extends DataObject {
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}
module.exports = GenderType;