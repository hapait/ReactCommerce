import express from 'express';
import User from '../models/userModel';
import {getToken} from '../util';

const router = express.Router();

router.post('/signin', async (req, res) => {
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    console.log("user found "+ signinUser.name);
    if(signinUser){
        //getToken(signinUser);
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            //token: 'how to train your dragon'
            token: getToken(signinUser)//confusion
        });
    }else{
        console.log('invalid mail or pass');
        res.status(401).send({msg: 'Invalid Email or password'});
    }
});

router.post('/register', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    const newUser = await user.save();
    if(newUser){
        res.send({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser)
        });
    }else{
        console.log('invalid userdata');
        res.status(401).send({msg: 'Invalid User Data'});
    }
});

router.get("/createadmin", async(req, res) => {
    try {
        const us = new User(
            {
                name: 'shafa',
                email: 'a@b.com',
                password: '1234',
                isAdmin: true
            }
        );
        const newUser = await us.save();
        res.send(newUser);
    } catch (error) {
        res.send({msg: error.message});
    }
});

export default router;