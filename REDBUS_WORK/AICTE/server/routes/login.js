const express = require('express');
const router = express.Router();
const jwt=require("jsonwebtoken")
const Student = require("../models/student");
const Proctor=require("../models/proctor")
const NGO=require("../models/ngo")
const SECRET_KEY="login"


router.put('/loginStudent', async (req, res) => {
    // console.log('loginroute');
    console.log(req.body);

    try {
        const { username, password} = req.body;
        if (!username || !password) {
            res.status(400).send({err: "Please enter all fields."});
        } else {
            const validUser = await Student.findOne({ username:username });
            // console.log(user)
            
            if (!validUser) {
                res.status(404).send({err: 'User not found'});
            } else {
                if (validUser.password === password) {
                    // res.status(200).send({message: "Login Successfull"});
                    const token=jwt.sign({username:validUser.username,id:validUser._id},SECRET_KEY)
                    res.status(201).send({user:validUser,token:token})
                } else {
                    res.status(404).send({err: 'Incorrect password'});
                }
            }
        }

    } catch (error) {
        res.status(400).send({err: "Something went wrong please try again"})
    }
})



router.put('/loginProctor', async (req, res) => {
    // console.log('loginroute');
    console.log(req.body);

    try {
        const { username, password} = req.body;
        if (!username || !password) {
            res.status(400).send({err: "Please enter all fields."});
        } else {
            const validUser = await Proctor.findOne({ username:username });
            // console.log(user)
            
            if (!validUser) {
                res.status(404).send({err: 'User not found'});
            } else {
                if (validUser.password === password) {
                    // res.status(200).send({message: "Login Successfull"});
                    const token=jwt.sign({username:validUser.username,id:validUser._id},SECRET_KEY)
                    res.status(201).send({user:validUser,token:token})
                } else {
                    res.status(404).send({err: 'Incorrect password'});
                }
            }
        }

    } catch (error) {
        res.status(400).send({err: "Something went wrong please try again"})
    }
})


router.put('/loginNGO', async (req, res) => {
    // console.log('loginroute');
    try {
        const { username, password} = req.body;
        if (!username || !password) {
            res.status(400).send({err: "Please enter all fields."});
        } else {
            const validUser = await NGO.findOne({ username:username });
            // console.log(user)
            
            if (!validUser) {
                res.status(404).send({err: 'User not found'});
            } else {
                if (validUser.password === password) {
                    // res.status(200).send({message: "Login Successfull"});
                    const token=jwt.sign({username:validUser.username,id:validUser._id},SECRET_KEY)
                    res.status(201).send({user:validUser,token:token})
                } else {
                    res.status(404).send({err: 'Incorrect password'});
                }
            }
        }

    } catch (error) {
        res.status(400).send({err: "Something went wrong please try again"})
    }
})
module.exports = router;