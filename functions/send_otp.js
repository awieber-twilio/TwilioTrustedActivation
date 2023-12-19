// This is your new function. To start, set the name and path on the left.
exports.handler = function (context, event, callback) {
  // The pre-initialized Twilio Client is available from the `context` object
  const twilioClient = context.getTwilioClient();

  // Query parameters or values sent in a POST body can be accessed from `event`
  const to = decodeURIComponent(event.To);
  //console.log(event.To);
  const channel = event.Channel;

  // Use `messages.create` to generate a message. Be sure to chain with `then`
  // and `catch` to properly handle the promise and call `callback` _after_ the
  // message is sent successfully!
  twilioClient.verify.services(context.VERIFY_SID)
    .verifications
    .create({to, channel})
    .then((verification) => {
      console.log(verification.lookup);
      if (channel == 'sna'){
        return callback(null, {"url": verification.sna.url})
      } else {
      return callback(null, {Status: "Success"});
      }
    })
    .catch((error) => {
      console.error(error);
      return callback(null, {"Error": error});
    });      
};