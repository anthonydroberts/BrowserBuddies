const { db } = require(`./initDB.js`)

function addLink(user, url, title) {
    // add a link to respective user doc in DB
    console.log(`Request to add link ${url} to user ${user}`)
    const datetime = new Date();

    data = {
        url: url,
        title: title,
        timestamp: datetime
    }

    let linkRef = db.collection('users').doc(user).collection(`links`).doc();
    linkRef.set(data)
    .then(() => {
        console.log(`Added new url ${url} (${title}) to user ${user} with link-ID ${linkRef.id}`);
    });
}

async function getLinks() {
    // return all links
    const snapshot = await db.collection(`users`).doc(`ujCh08UDw9flKPhq142N`).collection(`links`).get();
    const data = snapshot.docs.map(doc => doc.data());

    return data;
}

async function deleteLinks(user, url) {
    // delete a links by url and user

    let linkRef = await db.collection(`users`).doc(user).collection(`links`).where(`url`, `==`, url);
    linkRef.get().then((snapshot) => {
        snapshot.forEach((doc) => {
            doc.ref.delete();
            console.log(`Deleted link with url ${url}`);
        })
    });
}

module.exports.addLink = addLink;
module.exports.getLinks = getLinks;
module.exports.deleteLinks = deleteLinks;
