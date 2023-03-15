// This is your new function. To start, set the name and path on the left.
exports.handler = async function (context, event, callback) {
  // The pre-initialized Twilio Client is available from the `context` object
  const twilioClient = context.getTwilioClient();

  // Query parameters or values sent in a POST body can be accessed from `event`
  const to = decodeURIComponent(event.To);
  const lookType = event.Type;
  console.log(to);

await twilioClient.lookups.v2.phoneNumbers(to)
  .fetch({fields: lookType})
  .then((phoneNum) => {
    if (lookType == 'validation' && phoneNum.valid == true){
      const response = {
        'PhoneNumber': phoneNum.phoneNumber,
        'Valid': phoneNum.valid
      }
      return callback(null, response);
    }else if (lookType == 'validation' && phoneNum.valid == false) {
      const response = {
        'PhoneNumber': phoneNum.phoneNumber,
        'Valid': phoneNum.valid,
        'ValidationErrors': phoneNum.validationErrors
      }
      return callback(null, response);
    }else if (lookType == 'line_type_intelligence') {
      const response = {
        'PhoneNumber': phoneNum.phoneNumber,
        'LineTypeIntelligence': phoneNum.valid,
        'MobileNetworkCode': phoneNum.lineTypeIntelligence.mobile_network_code,
        'CarrierName': phoneNum.lineTypeIntelligence.carrier_name,
        'ErrorCode': phoneNum.lineTypeIntelligence.error_code,
        'MobileCountryCode':phoneNum.lineTypeIntelligence.mobile_country_code,
        'LineType': phoneNum.lineTypeIntelligence.type

      }
      return callback(null,  response);
    }else if (lookType == 'caller_name'){
      const response = {
        'PhoneNumber': phoneNum.phoneNumber,
        'CallerName': phoneNum.callerName.caller_name,
        'CallerType': phoneNum.callerName.caller_type,
        'ErrorCode': phoneNum.callerName.error_code
      }
      return callback(null, response);
    } 
    else{ 
      return callback("lookupType" + lookType )
    }
  })
.catch((error) => {
    console.error(error);
    return callback(error);
  });       
};


