
// This is your new function. To start, set the name and path on the left.
exports.handler = function (context, event, callback) {
  // The pre-initialized Twilio Client is available from the `context` object
  const twilioClient = context.getTwilioClient();

  // Query parameters or values sent in a POST body can be accessed from `event`
  const to = event.To;

twilioClient.verify.services('VAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  .verificationChecks
  .create({to})
  .then((verification_check) => {
    console.log(verification_check.status);
    if (verification_check.status == "approved")
      return callback(null, "SNA Success");
    if (verification_check.status == "pending")
      return callback(null, "SNA Failed");
  })
  .catch((error) => {
    console.error(error);
    return callback(error);
  });       
};
