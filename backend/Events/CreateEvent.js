
const { Event } = require("../db/event.schema"); // Adjust the path as necessary
const events = []; // Array to store event instances

async function eventCreate(index, title, description,/* userid*/ categories, location, date, entryfee) {
    const eventDetail = {
        eventid: Date.now().toString(),
        title: title,
        description: description,
        // userid: userid,
        categories: categories,
        location: location,
        date: date,
        entryfee: entryfee,
    
        };

    const event = new Event(eventDetail);
    await event.save();
    events[index] = event;
    console.log(`Added event: ${title}`);
}

module.exports = {
    eventCreate,events
}