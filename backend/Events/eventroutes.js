const express = require('express');
const router = express.Router();
const { eventCreate, events } = require('./CreateEvent'); 

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

module.exports = router;


