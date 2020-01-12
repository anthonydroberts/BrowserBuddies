const { db } = require(`./initDB.js`)

function trackVisit(visitorIP) {
    // handle visitor visit count tracking
    let visitorNumVisits = 0;
    let visitorRef = db.collection('trackedVisitors').doc(visitorIP);
    visitorRef.get().then(doc => {
        let data = {
            numberOfVisits: 0
            };
        if (!doc.exists) {
            console.log(`New visitor: ${visitorIP}`);
            data = {
                numberOfVisits: 1
                };
        } else {
            console.log(`Recurring visitor ${visitorIP}: `, doc.data());
            visitorNumVisits = doc.data().numberOfVisits + 1;

            data = {
                numberOfVisits: visitorNumVisits
                };
        }

        db.collection('trackedVisitors').doc(visitorIP).set(data);

        })
        .catch(err => {
        console.log('Error getting document', err);
        });
}

function getVisitors() {
    // return array of all visitors
    let trackedVisitors = [];
    let trackedVisitorsRef = db.collection('trackedVisitors');
    trackedVisitorsRef.get().then(snapshot => {
        snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        if(!trackedVisitors.includes(doc.id)) {
            // if ip not already tracked, then add to tracked ips
            trackedVisitors.push(doc.id);
        }
        });
    })
    .catch(err => {
        console.log('Error getting documents', err);
    });
    return trackedVisitors;
}

module.exports.trackVisit = trackVisit;
module.exports.getVisitors = getVisitors;
