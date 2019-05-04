import {EdmMapping,EdmType} from '@themost/data/odata';
import Account = require('./account-model');
import Group = require('./group-model');

/**
 * @class
 */
declare class User extends Account {

     
     /**
      * @description The date and time that this account was locked out.
      */
     public lockoutTime?: Date; 
     
     /**
      * @description The number of times the account has successfully logged on.
      */
     public logonCount?: number; 
     
     /**
      * @description Indicates whether a user is enabled or not.
      */
     public enabled?: boolean; 
     
     /**
      * @description The last time and date the user logged on.
      */
     public lastLogon?: Date; 
     
     /**
      * @description A collection of groups where user belongs.
      */
     public groups?: Array<Group|any>; 
     
     /**
      * @description This field contains additional user flags.
      */
     public userFlags?: number; 
     
     /**
      * @description The identifier of the item.
      */
     public id?: number; 

}

export = User;