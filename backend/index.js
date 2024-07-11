const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const connectDB = require('./db/db.js');


const loginnsignup = require('../frontend/loginnsignup.js');
const dash = require('../frontend/dash.js');
const eventRoutes = require('./Events/eventroutes.js');
const newevent =  require('../frontend/createevent.js');
const authRoutes = require('./auth/authRoutes.js');

connectDB();

//middleware
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.get('/', (req, res) => {
    res.send(loginnsignup());
});
app.get('/dashboard', (req, res) => {
    res.send(dash());
});

app.get('/dashboard/create-event', (req, res) => {
    res.send(newevent());
});





app.use('/auth', authRoutes);
app.use('/event', eventRoutes);


app.listen(3000, () => {
    console.log('App listening on port 3000');
});