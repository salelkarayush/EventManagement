const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const UserDetail = require('../db/user.schema');

router.get('/userexists', async (req, res) => {
    const email = req.body.email;
    try {
        const user = await UserDetail.findOne({ email });
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

router.post('/register', async (req, res) => {
    const body = req.body;
    const { name, email, password } = body;
    console.log(body);
    try {
        const user = await UserDetail.findOne({ email });
        if (user) {
            res.status(401).send('Email already exist');
        } else {
            const hash = await bcrypt.hash(password, 10);
            const newUser = new UserDetail({
                userid: 1,
                username: name,
                email,
                password: hash
            });
            await newUser.save();
            res.status(201).send('User created successfully');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
});

router.post('/login', async (req, res) => {
    const body = req.body;
    // console.log(body);
    const { email, password } = body;
    const user = await UserDetail.findOne({ email }).exec();
    console.log(user);
    const hashPass = user.password;
    try {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            res.status(201).send('User successfully logged in');
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('error in login');
    }
});

module.exports = router;