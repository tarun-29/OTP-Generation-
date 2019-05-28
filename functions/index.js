const admin = require('firebase-admin')
const functions = require('firebase-functions');
const createUser = require('./create_user');
const serviceAccount = require('./serviceAccount.json');
const reqOneTimePassword = require('./req_one_time_password');
const verifyOneTimePassword = require('./verify_one_time_password')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://one-time-password-8e76a.firebaseio.com"
  });

exports.createUser = functions.https.onRequest(createUser)
exports.reqOneTimePassword = functions.https.onRequest(reqOneTimePassword)
exports.verifyOneTimePassword = functions.https.onRequest(verifyOneTimePassword)