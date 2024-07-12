const jwt = require('jsonwebtoken');
const secret = "@69696969@##@#@#@#"

function setUser(user){
    const payload = {
        username: user.username,
        email: user.email,
    }
    const token = jwt.sign(payload, secret);
    return token;
}

function getUser(token){
    try{
        const user = jwt.verify(token, secret);
        return user;
    }catch(err){
        return null;
    }
}

module.exports = {setUser, getUser};