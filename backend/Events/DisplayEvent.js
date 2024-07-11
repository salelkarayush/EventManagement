const express = require('express')
const router = express.Router()
const EventDetail = require('../db/event.schema')
const { Event } = require("../db/event.schema");
const mongoose = require("../db/db")
async function displayEventData() {
  try {
    // Query for events (adjust as per your needs)
    const events = await Event.find()
    // Handle case where no documents are found
    if (events.length === 0) {
      console.log("No events found!");
      return;
    }

    // Print returned documents
    events.forEach(event => {
      console.log(event);
    });

  } catch (err) {
    console.error("Error retrieving events:", err);
  } finally {
    mongoose.connection.close(); // Close Mongoose connection
  }
}

// Call the function to display event data
displayEventData();
