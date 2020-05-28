import express from 'express';
import User from '../models/userModel';

const router = express.Router();

router.post('/signin', async (req, res) => {
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if(signinUser){
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(user)//confusion
        });
    }else{
        res.status(401).send({msg: 'Invalid Email or password'});
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