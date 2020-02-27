var admin = require("firebase-admin");

var serviceAccount = require("gallindoangular-269517-firebase-adminsdk-k33aj-b4eaadd7e8.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gallindoangular-269517.firebaseio.com"
});