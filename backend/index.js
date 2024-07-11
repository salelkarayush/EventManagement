const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const connectDB = require('./db/db.js');

const createhpgtmpl = require('../frontend/dash.js');
const loginnsignup = require('../frontend/loginnsignup.js');


const authRoutes = require('./auth/authRoutes.js');

connectDB();

//middleware
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.get('/', (req, res) => {
    res.send(loginnsignup());
});
// app.get('/login', (req, res) => {
//     res.send(loginnsignup());
// });


app.use('/auth', authRoutes);


app.listen(3000, () => {
    console.log('App listening on port 3000');
});