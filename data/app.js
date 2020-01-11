//imports
const visitorManager = require(`./visitors.js`);
const linkManager = require(`./links.js`);
const cors = require('cors');
const { db } = require(`./initDB.js`);
const bodyParser = require(`body-parser`);

// init express and others plus configure
const express = require('express');
const app = express();
const port = 3000;
const IP = "0.0.0.0";

// server vars
let hitTracker = 0;

// allow x origin 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// protocols
app.get('/', (req, res) => {
    
    hitTracker = hitTracker + 1;

    console.log(`${req.connection.remoteAddress} requested (GET) '/'`);
    visitorManager.trackVisit(req.connection.remoteAddress);
    res.send(`
        <p>server root</p>
        </br>
        <p>Total visits: ${hitTracker}</p>
    `);
});

app.get('/links', async (req, res) => {
    console.log(`${req.connection.remoteAddress} requested (GET) '/links'`);
    
    let result = await linkManager.getLinks();
    
    console.log(`Returned links: ${JSON.stringify(result)}`);

    visitorManager.trackVisit(req.connection.remoteAddress);
    res.send(result);
});

app.post('/links', (req, res) => {
    console.log(`${req.connection.remoteAddress} requested (POST) '/links' with data: ${JSON.stringify(req.body)}`);

    console.log(req.body.link.url);
    console.log(req.body.link.title);

    linkManager.addLink("ujCh08UDw9flKPhq142N", req.body.link.url, req.body.link.title);

    visitorManager.trackVisit(req.connection.remoteAddress);
    res.send(req.body);
});

app.post('/deleteLink', (req, res) => {
    console.log(`${req.connection.remoteAddress} requested (POST) '/deleteLink'`);

    linkManager.deleteLink(`ujCh08UDw9flKPhq142N`, req.body.url);

    visitorManager.trackVisit(req.connection.remoteAddress);
});

app.listen(port, IP, (err) => {
    if (err) {
    return console.log('Server error:', err)
    }

    console.log(`Starting server: ${IP}:${port}`)
    console.log(`Access: http://192.168.0.13:${port}/`)
});
