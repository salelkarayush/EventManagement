const express = require('express');
const createhpgtmpl = require('../frontend/hpg.js');

const app = express();

app.get('/', (req, res) => {
    res.send(createhpgtmpl());
});


app.listen(3000, () => {
    console.log('App listening on port 3000');
});