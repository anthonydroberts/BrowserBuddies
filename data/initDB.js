// init firebase / DB refs stuff
const admin = require('firebase-admin');
let serviceAccount = require('./browserbuddies-e13b0-5bd82f434594.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
let db = admin.firestore();

module.exports.db = db