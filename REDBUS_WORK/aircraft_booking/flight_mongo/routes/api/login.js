const express = require('express');
const router = express.Router();

const users = require("../../models/Passenger");
const Passenger = require('../../models/Passenger');

router.put('/getUser', async (req, res) => {
    try {
        const id = req.query.user_id;

        if (!id) {
            res.status(400).send({err: "Please enter a user ID."});
        } else {
            console.log(req.query.user_id);
            const user = await users.find({ user_id: id });
                if (!user) {
                    res.status(404).send({err: 'User not found'});
                } else {
                    console.log(users);
                    res.status(200).send(res.json(user));
                }
        }

    } catch (error) {
        res.status(400).send({err: error.message})
    }
})

router.put('/loginUser', async (req, res) => {
    console.log('loginroute');
    console.log(req.body);

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).send({err: "Please enter all fields."});
        } else {
            const user = await users.findOne({ email: email });

            if (!user) {
                res.status(404).send({err: 'User not found'});
            } else {
                if (user.password === password) {
                    res.status(200).send({message: "Login Successfull"});
                } else {
                    res.status(404).send({err: 'Incorrect password'});
                }
            }
        }

    } catch (error) {
        res.status(400).send({err: "Something went wrong please try again"})
    }
})

router.post('/registerUser', async (req, res) => {
    try {
        const {  username, password, firstname, lastname, phone, email, dob, age, gender, address } = req.body;

        console.log(req.body);

        if (!username ||!password ||!firstname ||!lastname ||!phone ||!email ||!dob ||!age ||!gender ||!address) {
            res.status(400).send({err: "Please enter all fields."});
        } else {
            const newUser = new Passenger({
                username: username,
                password:password,
                firstname:firstname,
                lastname:lastname,
                phone:phone,
                email:email,
                dob:dob,
                age:age,
                gender:gender,
                address:address
            });

            await newUser.save();

            res.status(200).send({message: "User created successfully."});
        }
    } catch (error) {
        res.status(400).send({err: error})
    }
})

module.exports = router;