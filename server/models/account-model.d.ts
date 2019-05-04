import {EdmMapping,EdmType} from '@themost/data/odata';
import Thing = require('./thing-model');

/**
 * @class
 */
declare class Account extends Thing {

     
     /**
      * @description The identifier of the item.
      */
     public id?: number; 

}

export = Account;