const express = require('express')
const router = express.Router()
const { Event } = require('../db/event.schema');

// Fetch event data function
async function displayEventData() {
    try {
        // Query for events
        const events = await Event.find();
        // Handle case where no documents are found
        if (events.length === 0) {
            console.log('No events found!');
            return [];
        }

        // Print returned documents
        events.forEach(event => {
            console.log(event);
        });

        return events;

    } catch (err) {
        console.error('Error retrieving events:', err);
        throw err;
    }
}

module.exports = displayEventData;

