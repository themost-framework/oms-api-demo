import {EdmMapping,EdmType} from '@themost/data/odata';
import {DataObject} from '@themost/data/data-object';
/**
 * @class
 */
declare class UserMessage extends DataObject {

     
     /**
      * @description The identifier of the item.
      */
     public id?: number; 
     
     /**
      * @description The subject of this message.
      */
     public subject?: string; 
     
     /**
      * @description The body of this message.
      */
     public body?: string; 
     
     /**
      * @description The email addresses of the author or authors of the message.
      */
     public sender?: string; 
     
     /**
      * @description The email addresses of the primary recipients of this message.
      */
     public recipient?: string; 
     
     /**
      * @description The email addresses of the secondary recipients of this message.
      */
     public cc?: string; 
     
     /**
      * @description The email addresses of the hidden recipients of this message.
      */
     public bcc?: string; 
     
     /**
      * @description The category of this message.
      */
     public category?: string; 
     
     /**
      * @description A flag associated with this message.
      */
     public flag?: string; 
     
     /**
      * @description The date and time when the message was sent.
      */
     public dateSent?: Date; 
     
     /**
      * @description The date and time when the message was received.
      */
     public dateReceived?: Date; 
     
     /**
      * @description The user who owns this message.
      */
     public owner?: number; 
     
     /**
      * @description A string that represents a numeric or alphanumeric sequence which identifies uniquely the current item.
      */
     public message: string; 

}

export = UserMessage;
