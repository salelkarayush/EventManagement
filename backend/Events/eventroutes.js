const express = require('express');
const router = express.Router();
const { eventCreate, events } = require('./CreateEvent'); 
const fetchEventData = require('./DisplayEvent')
router.use(express.json());

router.post('/CreateEvents', async (req, res) => {
  try {
    const body = req.body;
    const { title,description,category,location,date,entryfee } = body;
    const eventName = title; 
    await eventCreate(events.length,title,description,category,location,date,entryfee );
    res.status(201).send(`<li>${eventName}</li>`); 

} catch (error) {
    console.error('Error creating event:', error);
    res.status(500).send('Error creating event');
  }
});

router.get('/all', async (req, res) => {
    try {
        const eventData = await fetchEventData();

        // Convert JSON data to HTML
        const html = eventData.map(event => /*html*/`
                <li class="flex justify-between items-center bg-gray-300 p-4 rounded shadow-md mb-4">
                    <div class="space-y-2">
                        <h3 class="text-xl font-bold">${event.title}</h3>
                        <p class="text-sm text-gray-700">${event.date}</p>
                        <p class="text-sm text-gray-700">${event.description}</p>
                    </div>
                    <button
                        class="bg-green-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-red-700"
                    >
                        RSVP
                    </button>
                </li>
        `).join('');

        res.status(200).send(html); 
    } catch (error) {
        console.error('Error fetching event data:', error);
        res.status(500).send('Error fetching event data');
    }
});

module.exports = router;
