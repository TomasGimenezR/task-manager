const jwt = require('jsonwebtoken');
const config = require('config');


module.exports = function (req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token provided');

    try {
        //In a real world app, I would set the environment variable in the server as follows:
        // const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        const decoded = jwt.verify(token, 'jwtPrivateKey');
        req.user = decoded;
        console.log(req.user);
        next();
    }
    catch (ex) {
        res.status(400).send('Invalid token');
    }
}