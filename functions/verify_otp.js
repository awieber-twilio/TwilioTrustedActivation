
// This is your new function. To start, set the name and path on the left.
exports.handler = function (context, event, callback) {
  // The pre-initialized Twilio Client is available from the `context` object
  const twilioClient = context.getTwilioClient();

  // Query parameters or values sent in a POST body can be accessed from `event`
  const to = decodeURIComponent(event.To);
  const code = event.Code;
  console.log(to);
  console.log(code);

twilioClient.verify.services(context.VERIFY_SID)
  .verificationChecks
  .create({to, code})
  .then((verification_check) => {
    console.log(verification_check.status);
    if (verification_check.status == "approved")
      return callback(null, {Status: "OTP Verified"});
    if (verification_check.status == "pending")
      return callback(null, {Status: "OTP Not Verified"});
  })
  .catch((error) => {
    console.error(error);
    return callback(null, {Error: error});
  });       
};
