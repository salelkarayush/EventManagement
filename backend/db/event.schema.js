const mongoose = require("mongoose")

const EventDetail =new mongoose.Schema({
    eventid:{ type: String, required: true },
    title:{ type: String, required: true },
    description :{ type: String, required: true },
    userid:{ type: String, required: true },
    catgories:{ type: String, required: true },
    location:{ type: String, required: true },
    date:{ type: String, required: true },
    entryfee:{ type: Number, required: true },

})

const Event = mongoose.model('user',EventDetail)

module.exports = {Event}