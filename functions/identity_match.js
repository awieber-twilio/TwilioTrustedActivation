
// This is your new function. To start, set the name and path on the left.
exports.handler = async function (context, event, callback) {
    // The pre-initialized Twilio Client is available from the `context` object
    const twilioClient = context.getTwilioClient();
  
    // Query parameters or values sent in a POST body can be accessed from `event`
    const to = decodeURIComponent(event.To);
    const { firstName, lastName, address, city, state, postalCode, DOB } = event;
 
    console.log(to);
    console.log(state);
    await twilioClient.lookups.v2.phoneNumbers(to)
    .fetch({
       fields: 'identity_match',
       firstName: firstName,
       lastName: lastName,
       addressLine1: address,
    //    addressLine2: 'Suite 2',
       city: city,
       state: state,
       postalCode: postalCode,
    //    addressCountryCode: 'US',
    //    nationalId: 'YZ3456883',
       dateOfBirth: DOB
     })
    .then(identity => {
        console.log(identity.identityMatch);
        return callback (null, identity.identityMatch);     
    }
   )
   .catch((error) => {
    console.error(error);
    return callback(null, {"Error": error});
  });  ;
  };
  