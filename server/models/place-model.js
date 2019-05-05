import {EdmMapping,EdmType} from '@themost/data/odata';
import {DataObject} from '@themost/data/data-object';
let Thing = require('./thing-model');
/**
 * @class
 
 * @property {Photograph} photo
 * @property {string} globalLocationNumber
 * @property {number} maximumAttendeeCapacity
 * @property {Array<Review>} reviews
 * @property {Array<Photograph>} photos
 * @property {string} map
 * @property {string} branchCode
 * @property {PostalAddress} address
 * @property {string} logo
 * @property {string} telephone
 * @property {GeoCoordinates} geo
 * @property {boolean} publicAccess
 * @property {Array<Place>} containsPlace
 * @property {string} faxNumber
 * @property {boolean} isAccessibleForFree
 * @property {Place} containedIn
 * @property {number} id
 * @augments {DataObject}
 */
@EdmMapping.entityType('Place')
class Place extends Thing {
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}
module.exports = Place;