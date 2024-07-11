const mongoose = require("mongoose")

const RSVPDetail =new mongoose.Schema({
    eventid:{ type: String, required: true },
    rsvpid:{ type: String, required: true },
    date:{ type: String, required: true },

},{collection : 'rsvpdetails'})

const RSVP = mongoose.model('user',EventDetail)

module.exports = {RSVP}