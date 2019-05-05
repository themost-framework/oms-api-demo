#### Tutorial 2

##### Use data model actions

Data model actions is used to complete data operations like create, update or delete item or collection of items.

Let's create an action for submitting a product order.

server/models/person-model.js

    /**
     * @param {*} product
     * @param {*} paymentMethod
     * @returns {*}
     */
    @EdmMapping.param('paymentMethod','PaymentMethod', false)
    @EdmMapping.param('product','Product', false)
    @EdmMapping.action('order', 'Order')
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

This action also exposes a service endpoint (/api/people/:id/order or /api/people/me/order).

Use service endpoint http://localhost:3000/api/people/me/order to post order data:

    {
    	"product": {
            "category": "Tablets and E-Readers",
            "price": 246.74,
            "model": "HS4736",
            "releaseDate": "2019-03-01 14:08:38.000+02:00",
            "additionalType": "Product",
            "name": "Apple iPad Air",
            "id": 34
    	},
    	"paymentMethod": {
    		"alternateName": "ByInvoice"
    	} 
    }
    
