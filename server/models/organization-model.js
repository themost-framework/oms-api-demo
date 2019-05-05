import {EdmMapping,EdmType} from '@themost/data/odata';
import {DataObject} from '@themost/data/data-object';
let Party = require('./party-model');
/**
 * @class
 
 * @property {Organization} subOrganization
 * @property {string} globalLocationNumber
 * @property {Organization} memberOf
 * @property {Array<Person>} members
 * @property {Array<Person>} founders
 * @property {Date} dissolutionDate
 * @property {string} logo
 * @property {Array<Person>} employees
 * @property {Organization} department
 * @property {string} legalName
 * @property {Date} foundingDate
 * @property {Place} location
 * @property {number} id
 * @augments {DataObject}
 */
@EdmMapping.entityType('Organization')
class Organization extends Party {
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}
module.exports = Organization;