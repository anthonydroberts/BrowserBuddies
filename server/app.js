'use strict';

const express = require('express');
var bodyParser = require('body-parser')


const app = express();

app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({
    extended: true
}));


//app.use(app.router);

/*DELETE
'use strict';

// [START firestore_quickstart]
const Firestore = require('@google-cloud/firestore');
async function main() {
    const firestore = new Firestore();

    const document = firestore.doc('posts/intro-to-firestore');
    console.log('Document created');

    // Enter new data into the document.
    await document.set({
      title: 'Welcome to Firestore',
      body: 'Hello World',
    });
    console.log('Entered new data into the document');

    // Update an existing document.
    await document.update({
      body: 'My first Firestore app',
    });
    console.log('Updated an existing document');

    // Read the document.
    let doc = await document.get();
    console.log('Read the document');

    // Delete the document.
    await document.delete();
    console.log('Deleted the document');

};

main().catch(console.error);
*/ //END DELETE 



/**
 * HTTP function that supports CORS requests.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
//TODO: figoure out what can be deleted before official submission from CORS
exports.corsEnabledFunction = (req, res) => {
  // Set CORS headers for preflight requests
  // Allows GETs from any origin with the Content-Type header
  // and caches preflight response for 3600s

  res.set('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  } else {
    // Set CORS headers for the main request
    res.set('Access-Control-Allow-Origin', '*');
    res.send('Hello World!');
  }
};

var tabs = [];
var bookmarks = [];
var pushCount = 0;

app.get('/', (req, res) => {
  res.status(200).send("get /tablist dummy");
  console.log("Someone tried to GET root");
      // Save the data to the database.
      var firebase = require("firebase");
var config = {
        apiKey: "AIzaSyAdsvYEHkJGqv-400bnWrqqTGi1xA-xdqU",
        authDomain: "browser-buddies.firebaseapp.com",
        databaseURL: "https://browser-buddies.firebaseio.com/",
        projectId: "browser-buddies",
        storageBucket: "browser-buddies.appspot.com",
        //messagingSenderId: "1023908821307"
    };

    if (!firebase.apps.length){
    firebase.initializeApp(config);
    }


        //GENERATE USER ID -- assign default value -1/
       firebase.database().ref("userCredentials/").push(-1);
       firebase.database().ref("tabs/").on("value", function(snapshot){
           console.log(snapshot.val());       });
      //  / update user count stat */
        /*
        firebase.database().ref("userCount/").transaction(function(id){
            id +=1;
            return id;
        });

*/
 
});

app.get('/clear', (req, res) => {
  tabs = [];
  bookmarks = [];
  res.status(200).send("All data Cleared");
  console.log("All data Cleared");
});


//TABS
app.get('/tablist', (req, res) => {
    res.status(200).send(tabs);
    console.log("Tab Data sent");
});

app.post("/addtabs",(req,res)=>{
    console.log("Req.Body: "); 
    console.log(JSON.stringify(req.body));
    res.status(200).send(JSON.stringify(req.body));
    //check for duplicates
    
    
        var foundDup = false;
        for (var j=0;j<tabs.length;j++){
            console.log(req.body.url)
            console.log(tabs[j].url)
            if(req.body.url == JSON.parse(tabs[j]).url){
                foundDup=true;
            }

        }
        if(!foundDup){
                tabs.push(JSON.stringify(req.body));
                console.log("Tab data added")
        }
    


    //Debugging
    pushCount++;
    console.log(pushCount + " Posts so far"); 
});
//BOOKMARKS
app.get('/bookmarklist', (req, res) => {
    res.status(200).send(bookmarks);
    console.log("Bookmark Data sent");
});

app.post("/addbookmarks",(req,res)=>{
    console.log("Req.Body: "); 
    console.log(JSON.stringify(req.body));
    
    

    res.status(200).send(JSON.stringify(req.body));

    
    bookmarks.push(JSON.stringify(req.body));
    console.log("Bookmark data added")

    


    //Debugging
    pushCount++;
    console.log(pushCount + " Posts so far"); 
});

//DELETION

app.post("/deletetab",(req,res)=>{
    var i = 0;
    tabs.forEach(function (arrayItem) {
        //var x = arrayItem.prop1 + 2;
        //console.log(x);
        if(arrayItem.url == req.body){
            tabs.splice(i, 1)
        }
        i++;
    });
});



if (module === require.main) {
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;