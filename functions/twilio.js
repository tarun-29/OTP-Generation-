const twilio = require('twilio');

//create your own accountSid and auth token

module.exports = new twilio.Twilio(accountSid, authToken);
