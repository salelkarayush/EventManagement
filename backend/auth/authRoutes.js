const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const cookie = require('cookie');
const {setUser} = require('../service/auth');

const UserDetail = require('../db/user.schema');

router.post('/register', async (req, res) => {
    const body = req.body;
    const { name, email, password } = body;
    // console.log(body);
    try {
        const user = await UserDetail.findOne({ email });
        if (user) {
            res.status(401).send('Email already exist');
        } else {
            const hash = await bcrypt.hash(password, 10);
            const newUser = new UserDetail({
                userid: Date.now(),
                username: name,
                email,
                password: hash
            });
            
            const token = setUser(newUser);
            await newUser.save();
            res.cookie('token', token);
            res.set('HX-Redirect', '/dashboard').status(201).send('User created successfully');
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
    
    try {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = setUser(user);
            res.cookie('token', token);
            res.set('HX-Redirect', '/dashboard').status(200).send('User successfully logged in');
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('error in login');
    }
});

module.exports = router;