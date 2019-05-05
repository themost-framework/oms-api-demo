#### Tutorial 1

##### Add a data model class for Person model

Use [@themost/cli](https://github.com/kbarbounakis/most-web-cli) to generate class for model Person.

    npm run themost generate class Person
    
This operation will generate a class for Person model in

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
    

Add a static method Person.getMe() to get a person object associated with the interactive user.

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

This static method is exposed also as service endpoint (/api/people/me) for serving person information.

    curl --user lily.stewart@example.com:secret http://localhost:3000/api/people/me/
    
with the following response:

    {
        "@odata.context": "/api/$metadata#People/$entity",
        "jobTitle": "Information Technology Specialist",
        "gender": "F",
        "birthDate": "1989-05-02 08:54:00.000+03:00",
        "givenName": "Lily",
        "familyName": "Stewart",
        "user": 701,
        "address": {
            "streetAddress": "34 Route 20",
            "addressCountry": "UK",
            "postalCode": "E86 5HS",
            "addressLocality": "Bradford, West Yorkshire",
            "id": 546,
            "telephone": "(0642 72) 6731",
            "contactType": "primary",
            "dateCreated": "2019-04-01 16:16:27.583+03:00",
            "dateModified": "2019-04-01 16:16:27.585+03:00",
            "createdBy": 0,
            "modifiedBy": 0
        },
        "email": "lily.stewart@example.com",
        "description": "Lily Stewart",
        "id": 547,
        "dateCreated": "2019-04-01 16:16:27.582+03:00",
        "dateModified": "2019-04-01 17:05:38.088+03:00",
        "createdBy": 0,
        "modifiedBy": 0
    }

Note that Person model has already a privilege which gives read access to person information of the interactive user

    "privileges": [
        ...
        {
            "mask": 1,
            "type": "self",
            "filter": "user eq me()"
        }
    ]

The new service endpoint is a classic OData v4 service
 which has also child endpoints for getting information related to a person e.g.

get person user:
 
    curl --user lily.stewart@example.com:secret http://localhost:3000/api/people/me/user

with the following response:

    {
        "@odata.context": "/api/$metadata#Users/$entity",
        "enabled": 1,
        "name": "lily.stewart@example.com",
        "description": "Lily Stewart",
        "id": 701,
        "dateCreated": "2019-04-01 17:05:38.037+03:00",
        "dateModified": "2019-04-01 17:05:38.051+03:00",
        "createdBy": 0,
        "modifiedBy": 0
    }
    
get person address:
 
    curl --user lily.stewart@example.com:secret http://localhost:3000/api/people/me/address

with response:

    {
        "@odata.context": "/api/$metadata#Users/$entity",
        "enabled": 1,
        "name": "lily.stewart@example.com",
        "description": "Lily Stewart",
        "id": 701,
        "dateCreated": "2019-04-01 17:05:38.037+03:00",
        "dateModified": "2019-04-01 17:05:38.051+03:00",
        "createdBy": 0,
        "modifiedBy": 0
    }
    
Let's use Person model association to add an extra endpoint for getting person orders.

Navigate to person model configuration and add an attribute for orders.

Note: Order has already an foreign-key association with Person model via "customer" attribute.

server/config/models/Person.json

    {
        "@id": "https://themost.io/schemas/properties/orders",
        "name": "orders",
        "title": "Orders",
        "type": "Order",
        "mapping": {
            "associationType": "association",
            "childModel": "Order",
            "childField": "customer",
            "parentModel": "Person",
            "parentField": "id"
        }
    }

Now we have an extra endpoint for getting person orders.

    curl --user lily.stewart@example.com:secret http://localhost:3000/api/people/me/orders
    
with response:

    
    "@odata.context": "/api/$metadata#Orders",
    "value": [
        {
            "id": 648,
            "customer": 547,
            "orderDate": "2019-02-02 17:32:48.000+02:00",
            "orderedItem": {
                "category": "Laptops",
                "price": 444.76,
                "model": "SR2155",
                "releaseDate": "2019-04-21 19:43:59.000+03:00",
                "additionalType": "Product",
                "name": "Apple MacBook Air (13.3-inch, 2013 Version)",
                ...
            },
            "orderNumber": "STA537",
            "orderStatus": {
                "name": "Pickup",
                "alternateName": "OrderPickup",
                ...
            },
            "paymentDue": "2019-02-22 17:32:48.000+02:00",
            "paymentMethod": {
                "name": "PayPal",
                "alternateName": "PayPal",
                ...
            },
            "additionalType": "Order",
            "dateCreated": "2019-04-01 16:16:53.322+03:00",
            "dateModified": "2019-04-01 16:16:53.322+03:00",
            "createdBy": 0,
            "modifiedBy": 0
        },
        ...
    ]

Use OData system query options to

sort orders:

    # http://localhost:3000/api/people/me/orders?$orderby=orderDate desc

    curl --user lily.stewart@example.com:secret \
    http://localhost:3000/api/people/me/orders?$orderby=orderDate%20desc

filter orders:

    # http://localhost:3000/api/people/me/orders?$filter=orderStatus/alternateName eq 'OrderProblem'
    curl --user lily.stewart@example.com:secret \
    http://localhost:3000/api/people/me/orders?$filter=orderStatus/alternateName%20eq%20%27OrderProblem%27

group by order status:

    # http://localhost:3000/api/people/me/orders?$select=count(id) as total, orderStatus/alternateName as orderStatus&$groupby=orderStatus/alternateName

    curl --user lily.stewart@example.com:secret \
    http://localhost:3000/api/people/me/orders?$select=count%28id%29%20as%20total,orderStatus/alternateName%20as%20orderStatus&$groupby=orderStatus/alternateName

