const express = require('express');
const { Event } = require("../db/event.schema");


const updateEventForm = require("../../frontend/update.js");
const EventForm = require("../../frontend/updateform.js");
const app = express();






// Get all events
app.get('/events', async (req, res) => {
    try {
        const events = await Event.find();
        const eventsHtml = events.map(event => `
            <div>
                </br>   
                <h3>Event Title :- ${event.title}</h3>
                <p>Event Description :- ${event.description}</p>
                </br>
                <button 
                    type="submit"
                    hx-get="/event/${event._id}"
                    hx-target="#eventFormContainer"
                    hx-swap="innerHTML"
                >
                    Edit
                </button>
                 </br>  
            </div>
        `).join('');
        // res.send(eventsHtml);
        res.send(eventsHtml + '<div id="eventFormContainer"></div>');
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});

// Get event by ID
app.get('/event/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).send('Event not found');
        }

        const formHtml = EventForm(event);
        res.send(formHtml);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Update event
app.put('/event/:id', async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!event) {
            return res.status(404).send('Event not found');
        }
        
        res.send(updateEventForm(event));
    } catch (error) {
        console.error('Error updating event:', error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = app;
