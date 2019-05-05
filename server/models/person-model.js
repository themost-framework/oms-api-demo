import {EdmMapping,EdmType} from '@themost/data/odata';
import {DataObject} from '@themost/data/data-object';
import {HttpNotFoundError} from "@themost/common";
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

    /**
     * @param {*} product
     * @param {*} paymentMethod
     * @returns {*}
     */
    @EdmMapping.param('paymentMethod','PaymentMethod', false)
    @EdmMapping.param('product','Product', false)
    @EdmMapping.action('Order', 'Order')
    async orderProduct(product, paymentMethod) {
        // get product
        const orderedItem = this.context.model('Product').find(product).getItem();
        // if order cannot be found throw error
        if (orderedItem == null) {
            throw new HttpNotFoundError('Product not found');
        }
        // create an order
        const newOrder = {
            orderedItem: orderedItem,
            customer: this,
            paymentMethod: paymentMethod
        };
        await this.context.model('Order').save(newOrder);
        // and finally return new order
        return newOrder;
    }

}
module.exports = Person;
