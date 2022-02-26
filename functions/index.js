const functions = require("firebase-functions");
let keys = require("../keys.json")
const axios = require('axios');
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((req, res) => {
  
    functions.logger.info("Hello logs!", {structuredData: true});

    const headers = {
        "Authorization": `Bearer ${keys.OpenAI}`
    }
    const body = {
        "prompt": "Say this is a test",
        "max_tokens": 6
    }
    openai_url = 'https://api.openai.com/v1/engines/text-davinci-001/completions'
    axios.post(openai_url,body,{headers})
    .then(response => {
        res.send(response.data)
    })
    .catch(err => res.send(err))

});

exports.sec = functions.https.onRequest((req,res) => {
    
    sec_url = 'https://api.sec-api.io'
    const headers = {
        "Authorization": `${keys.SEC}`
    }
    const body = {
        "query": {
            "query_string": {
                    "query": "ticker:(AAPL) AND formType:\"10-K\""
            }
        },
        "from": "0",
        "size": "20",
        "sort": [{ "filedAt": { "order": "desc" } }]
    }
    axios.post(sec_url,body,headers)
    .then(response => {
        console.log(response.data)
    })
    .catch(err => {
        console.log(err)
    })



});