const {getUser} = require('../service/auth');
const express = require('express');
async function restrictauthtologgedinuser(req, res, next){
    const  token = req.cookies?.token;
    if(!token){
        return res.set('HX-Redirect', '/').status(401).send('Unauthorized access');
    }
    try {
        const user = await getUser(token); // Await the getUser function
        if (user) {
            req.user = user;
            return next();
        } else {
            return res.set('HX-Redirect', '/').status(401).send('Unauthorized access');
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        return res.status(500).send('Server error');
    }
}

module.exports = {restrictauthtologgedinuser};