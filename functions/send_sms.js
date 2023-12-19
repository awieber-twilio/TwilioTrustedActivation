// This is your new function. To start, set the name and path on the left.
exports.handler = function (context, event, callback) {
    // The pre-initialized Twilio Client is available from the `context` object
    const twilioClient = context.getTwilioClient();
  
    // Query parameters or values sent in a POST body can be accessed from `event`
    const to = decodeURIComponent(event.To);
    //console.log(event.To);
    const message = event.message;
  
    // Use `messages.create` to generate a message. Be sure to chain with `then`
    // and `catch` to properly handle the promise and call `callback` _after_ the
    // message is sent successfully!
    twilioClient.messages.create({
        body: message,
        from: context.FROM_NUMBER,
        to: to
      })
      .then((status) => {
        console.log(status.status);
      
        return callback(null, {Status: status.status});
      
      })
      .catch((error) => {
        console.error(error);
        return callback(null, {"Error": error});
      });      
  };