import {EdmMapping,EdmType} from '@themost/data/odata';
import {DataObject} from '@themost/data/data-object';
let Party = require('./party-model');
/**
 * @class
 
 * @property {Array<Person>} colleagues
 * @property {Place|any} workLocation
 * @property {Array<Person>} children
 * @property {string} jobTitle
 * @property {Place|any} birthPlace
 * @property {GenderType|any} gender
 * @property {Organization|any} memberOf
 * @property {EducationalOrganization|any} alumniOf
 * @property {ContactPoint|any} homeLocation
 * @property {Date} birthDate
 * @property {string} givenName
 * @property {string} familyName
 * @property {string} honorificPrefix
 * @property {string} additionalName
 * @property {Array<Person>} siblings
 * @property {Organization|any} affiliation
 * @property {string} honorificSuffix
 * @property {Country|any} nationality
 * @property {Array<Person>} follows
 * @property {Array<Person>} knows
 * @property {Array<Organization|any>} worksFor
 * @property {User|any} user
 * @property {number} id
 * @augments {DataObject}
 */
@EdmMapping.entityType('Person')
class Person extends Party {
    /**
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * @param {HttpContext} context
     * @returns {*}
     */
    @EdmMapping.func('Me', 'Person')
    static getMe(context) {
        return context.model('Person')
            .where('user/name').equal(context.user.name)
            .prepare();
    }

}
module.exports = Person;
