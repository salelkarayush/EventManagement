const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const connectDB = require('./db/db.js');
const up = require('./Events/Updateevent.js');

const loginnsignup = require('../frontend/loginnsignup.js');
const dash = require('../frontend/dash.js');
const eventRoutes = require('./Events/eventroutes.js');
const newevent =  require('../frontend/createevent.js');
const authRoutes = require('./auth/authRoutes.js');
const {restrictauthtologgedinuser} = require('./middleware/auth.js');
const updateEventForm = require('../frontend/update.js');

connectDB();

//middleware
app.use(bodyParser.json());
// app.use(express.urlencoded({extended: false}));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

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

app.get('/dashboard/update-event', (req, res) => {
    res.send(updateEventForm());
});





// app.get('/allevents',(req,res) =>{
//     res.send(allevents())
// });

app.get('/showevents', (req,res) =>{
    res.send(createlisttmpl());
});


app.use('/auth', authRoutes);
app.use('/event', restrictauthtologgedinuser, eventRoutes);
app.use('/', up);

app.listen(3000, () => {
    console.log('App listening on port 3000');
});