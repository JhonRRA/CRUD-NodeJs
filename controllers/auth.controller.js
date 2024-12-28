const User = require('../models/User');

export const signUp = async(req,res) => {
    const {username, email, password, role}  = req.body;
    res.json(res.body)
}

export const signIn = async(req,res) => {
    res.json('signin')
}