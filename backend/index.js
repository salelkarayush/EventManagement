const express = require('express');
const createhpgtmpl = require('../frontend/dash.js');

//middleware
app.use(express.urlencoded({extended: false}));

const app = express();

app.get('/', (req, res) => {
    res.send(createhpgtmpl());
});


app.post('/api/users', (req,res)=>{
    const body = req.body;
    console.log(body);
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});