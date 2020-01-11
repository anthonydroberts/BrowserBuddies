//imports
const visitorManager = require(`./visitors.js`);
const cors = require('cors')
const { db } = require(`./initDB.js`)

// init express and others
const express = require('express')
const app = express()
const port = 3000
const IP = "0.0.0.0"

// server vars
let hitTracker = 0;

// allow x origin 
app.use(cors())

// protocols
app.get('/', (req, res) => {
    
    hitTracker = hitTracker + 1;

    console.log(`${req.connection.remoteAddress} requested '/'`);
    visitorManager.trackVisit(req.connection.remoteAddress);
    res.send(`
        <p>server root</p>
        </br>
        <p>Total visits: ${hitTracker}</p>
    `);
})

app.get('/links', (req, res) => {
    let data = 
        {links:[
            {title:'t1'},
            {title:'t2'},
            {title:'t3'},
            {title:'t4'},
            {title:'t5'},
            {title:'t6'}
        ]};

    console.log(`${req.connection.remoteAddress} requested '/links'`);
    visitorManager.trackVisit(req.connection.remoteAddress);
    res.send(data);
})

app.listen(port, IP, (err) => {
    if (err) {
    return console.log('Server error:', err)
    }

    console.log(`Starting server: ${IP}:${port}`)
    console.log(`Access: http://192.168.0.13:${port}/`)
})