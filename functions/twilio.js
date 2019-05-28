const twilio = require('twilio');

const accountSid = "ACdf6a45db88897e3d24709c917b587d7e";
const authToken = "a5b34be676c2e119d7008beaed667ba1"

module.exports = new twilio.Twilio(accountSid, authToken);