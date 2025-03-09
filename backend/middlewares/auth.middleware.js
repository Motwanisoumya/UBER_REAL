const userModel = require('../models/user.model');
const brcypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistedTokenModel = require('../models/blacklistToken.model');    
const captainModel = require('../models/captain.model');



module.exports.authUser = async(req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({message: 'Unauthorized'});
    } 
    const blacklistedToken = await userModel.findOne({token: token
    });
    if (blacklistedToken) {
        return res.status(401).json({message: 'Unauthorized: Token blacklisted'});
    }     
    try { 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized: User not found' });
        }
         
        req.user = user;

        return next();
    } 
    catch (err) {
        console.error('Token verification error:', err.message);
        return res.status(401).json({message: 'Unauthorized: Invalid token'});
    }
}
module.exports.authCaptain = async(req,res,next) => { 
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    console.log(token);
    if (!token) {
        return res.status(401).json({message: 'Unauthorized'});
    } 
    const blacklistedToken = await userModel.findOne({token: token
    });
    console.log(blacklistedToken);
    if (blacklistedToken) {
        return res.status(401).json({message: 'Unauthorized: Token blacklisted'});
    }     
    try { 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        if (!captain) {
            return res.status(401).json({ message: 'Unauthorized: Captain not found' });
        }
         
        req.captain = captain;

        return next();
    } 
    catch (err) {
       console.log(err);
        return res.status(401).json({message: 'Unauthorized: Invalid token'});
    }   
}