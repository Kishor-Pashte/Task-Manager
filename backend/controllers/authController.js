import User from '../models/userModel';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const register = async(req, res, next) => {
    try {
        const {name, email, password} = req.body;
        if(!name || !password || !email) {
            return res.status(400).json({message: 'All fields are required'})
        }

        //check if email is already exists
        const existingUser = await User.findOne({email: email});
        if(existingUser) {
            return res.status(400).json({message: 'User already exist'});
        }

        //hash password
        const hashPassword = await bcrypt.hash(password, 10);

        //create the user
        const user = await User.create({name, email, password: hashPassword})
        
        res.status(201).json({messsage: 'User created successfully'});
        
    } catch(e) {
        next(e)
    }
}

const login = async(req, res, next) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(400).json(message: 'Email & Password is required')
        }

        //check for email
        const existingUser = await User.findOne({email});
        if(!existingUser) {
            return res.status(404).json({message: 'Email does not exists'})
        }

        //check for pass match
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if(!isMatch) {
            return res.status(401).json({message: 'Invalid Credentials'})
        }

        //generate the token
        const token = jwt.sign({id: existingUser._id}, process.env.JWT_SECRET, {expiresIn: '1h'});

        res.status(200).json({message: 'User logged in successfully', token, user: existingUser})

    }catch(e) {
        next(e)

    }
}

export default {register, login};