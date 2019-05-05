#### Tutorial 1

##### Add a data model class for Person model

Use [@themost/cli](https://github.com/kbarbounakis/most-web-cli) to generate class for model Person.

    npm run themost generate class Person
    
This operation will generate a class for Person model

server/models/person-model.js 

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
    }
    module.exports = Person;
    

Add a static method Person.getMe() 
for getting person object associated with the interactive user.

    @EdmMapping.func('Me', 'Person')
    getMe(context) {
        return context.model('Person')
            .where('user/name').equal(context.user.name)
            .prepare();
    }

This static exposes also an endpoint (/api/people/me) for serving person information.



