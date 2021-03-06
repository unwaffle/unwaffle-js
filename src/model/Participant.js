/**
 * Unwaffle
 * The [Unwaffle](https://unwaffle.com) API. 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Unwaffle) {
      root.Unwaffle = {};
    }
    root.Unwaffle.Participant = factory(root.Unwaffle.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Participant model module.
   * @module model/Participant
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Participant</code>.
   * @alias module:model/Participant
   * @class
   * @param participantIdentifier {String} 
   */
  var exports = function(participantIdentifier) {
    var _this = this;

    _this['ParticipantIdentifier'] = participantIdentifier;






  };

  /**
   * Constructs a <code>Participant</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Participant} obj Optional instance to populate.
   * @return {module:model/Participant} The populated <code>Participant</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ParticipantIdentifier')) {
        obj['ParticipantIdentifier'] = ApiClient.convertToType(data['ParticipantIdentifier'], 'String');
      }
      if (data.hasOwnProperty('ParticipantUsername')) {
        obj['ParticipantUsername'] = ApiClient.convertToType(data['ParticipantUsername'], 'String');
      }
      if (data.hasOwnProperty('ParticipantFullName')) {
        obj['ParticipantFullName'] = ApiClient.convertToType(data['ParticipantFullName'], 'String');
      }
      if (data.hasOwnProperty('ParticipantEmail')) {
        obj['ParticipantEmail'] = ApiClient.convertToType(data['ParticipantEmail'], 'String');
      }
      if (data.hasOwnProperty('ParticipantPhotoUrl')) {
        obj['ParticipantPhotoUrl'] = ApiClient.convertToType(data['ParticipantPhotoUrl'], 'String');
      }
      if (data.hasOwnProperty('ParticipantStatus')) {
        obj['ParticipantStatus'] = ApiClient.convertToType(data['ParticipantStatus'], 'String');
      }
      if (data.hasOwnProperty('ParticipantSignupDate')) {
        obj['ParticipantSignupDate'] = ApiClient.convertToType(data['ParticipantSignupDate'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} ParticipantIdentifier
   */
  exports.prototype['ParticipantIdentifier'] = undefined;
  /**
   * @member {String} ParticipantUsername
   */
  exports.prototype['ParticipantUsername'] = undefined;
  /**
   * @member {String} ParticipantFullName
   */
  exports.prototype['ParticipantFullName'] = undefined;
  /**
   * @member {String} ParticipantEmail
   */
  exports.prototype['ParticipantEmail'] = undefined;
  /**
   * @member {String} ParticipantPhotoUrl
   */
  exports.prototype['ParticipantPhotoUrl'] = undefined;
  /**
   * @member {String} ParticipantStatus
   */
  exports.prototype['ParticipantStatus'] = undefined;
  /**
   * @member {String} ParticipantSignupDate
   */
  exports.prototype['ParticipantSignupDate'] = undefined;



  return exports;
}));


