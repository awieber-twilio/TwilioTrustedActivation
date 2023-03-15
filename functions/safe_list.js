// This is your new function. To start, set the name and path on the left.
exports.handler = function (context, event, callback) {
  // The pre-initialized Twilio Client is available from the `context` object
  const twilioClient = context.getTwilioClient();

  // Query parameters or values sent in a POST body can be accessed from `event`
  const to = decodeURIComponent(event.To);
  //console.log(event.To);
  const action = event.Action;
  console.log(to);
  
  // Check/Add/Remove phone number from the safe list
  if (action == 'check'){ 
    twilioClient.verify.v2.safelist(to)
    .fetch()
    .then((safelist) => {
      return callback(null, {"Result" : to + " was found and here is the SID: " + safelist.sid})
    })
    .catch((error) => {
      console.error(error);
      return callback(null, {"Result" : to + " was not found on safe list"} );
    }); 
  } else if  (action == 'add'){ 
    twilioClient.verify.v2.safelist
    .create({phoneNumber: to})
    .then((safelist) => {
      //return callback(JSON.stringify(safelist))
      return callback(null, {"Result" : safelist.phoneNumber + " was added and here is the SID: " + safelist.sid})
    })
    .catch((error) => {
      return callback(null, {"Error" : error} );
    }); 
  }  else { 
    twilioClient.verify.v2.safelist(to)
    .remove()
    .then((safelist) => {
      return callback(null, {"Result" : to + " has been removed"} )
    })
    .catch((error) => {
      return callback(null, {"Result" : to + " was not found to be removed"} );
    }); 
  }  
};
