import {EdmMapping,EdmType} from '@themost/data/odata';
import {DataObject} from '@themost/data/data-object';
import {HttpForbiddenError} from "@themost/common";
let Thing = require('./thing-model');
let Person = require('./person-model');
/**
 * @class
 
 * @property {ProductCategory|any} category
 * @property {boolean} discontinued
 * @property {number} price
 * @property {Product} isRelatedTo
 * @property {Product} isSimilarTo
 * @property {string} model
 * @property {string} productID
 * @property {Date} releaseDate
 * @property {number} id
 * @augments {DataObject}
 */
@EdmMapping.entityType('Product')
class Product extends Thing {
    /**
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * @param {*} paymentMethod
     * @returns {*}
     */
    @EdmMapping.param('paymentMethod','PaymentMethod', false)
    @EdmMapping.action('Order', 'Order')
    async order(paymentMethod) {
        // get customer
        const customer = await Person.getMe(this.context).getItem();
        if (customer == null) {
            throw new HttpForbiddenError();
        }
        // create an order
        const newOrder = {
            orderedItem: this,
            customer: customer,
            paymentMethod: paymentMethod
        };
        // execute order with elevated privileges
        // because a customer does not have direct permission
        await this.context.model('Order').silent().save(newOrder);
        // and finally return new order
        return newOrder;
    }

}
module.exports = Product;
