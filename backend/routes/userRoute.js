import express from 'express';
import user from '../models/userModel';

const router = express.Router();

router.get("/createadmin", async(req, res) => {
    try {
        console.log("creating admin user ");
        const us = new user(
            {
                name: 'shafa',
                email: 'a@b.com',
                password: '1234',
                isAdmin: true
            }
        );
        console.log("name: "+ us.name);
        const newUser = await us.save();
        res.send(newUser);
    } catch (error) {
        console.log("create adming failed###");
        res.send({msg: error.message});
    }
});

export default router;