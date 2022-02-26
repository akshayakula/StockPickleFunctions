const functions = require("firebase-functions");
let keys = require('../keys.json')
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  
    functions.logger.info("Hello logs!", {structuredData: true});
    console.log(keys)
    response.send("Hello from Firebase!");

});







