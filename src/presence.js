const client = require('discord-rich-presence')('786295541901557760');

const updatePresence = () => {
    client.updatePresence({
        state: 'Fubbie',
        details: 'Het hotel ontdekken',
        startTimestamp: Date.now(),
        endTimestamp: Date.now() + 1337,
        largeImageKey: 'rich-pres',
        smallImageKey: 'fubbie-asset-1',
        instance: true,
    });
}

updatePresence();
setInterval(() => {
    updatePresence();
}, 15e3);