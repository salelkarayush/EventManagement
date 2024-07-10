const express = require('express');

const app = express();



app.get('/', (req, res) => {
    res.send('<p>Homepage</p>');
});



app.listen(3000);
