const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const UserDetail = require('../db/user.schema');

router.get('/userexists', async(req, res) => {
    const email = req.body.email;
    try {
        const user = await User.findOne({ email });
        if (user) {
            res.send(true);
        } else {
            res.send(false);
        }
    } catch (error) {
        console.error('Error checking if user exists:', error);
        res.status(500).send('Server error');
    }
});

router.post('/register', async(req, res) => {
    const body = req.body;
    const { username, email, password } = body;
    console.log(body);
    try{
        const hash = await bcrypt.hash(password, 10);
        const newUser = new UserDetail({
            userid:1,
            username,
            email,
            password: hash
        });
        await newUser.save();
        res.status(201).send('User created successfully');

    }catch(err){
        console.log(err);
        res.status(500).send('Server error');
    }
});

router.get('/login', (req, res) => {

});

module.exports = router;