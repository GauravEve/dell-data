const express = require('express');
const router = express.Router();
const jwt=require("jsonwebtoken")
const Student = require("../models/student");
const Proctor=require("../models/proctor")
const NGO=require("../models/ngo")

const SECRET_KEY="login"




router.post('/registerStudent', async (req, res) => {
    try {
        const {username, password,name,sem,batchyear,branch,proctor} = req.body;
        const existingUser=await Student.findOne({username:username })
        console.log(existingUser);
        if(existingUser)
        {
            res.status(400).send({err:"User already exist"})
            // alert("Existed user")
        }
        else{
        // console.log(req.body);
        if (!username ||!password) {
            res.status(400).send({err: "Please enter all fields."});
        } else {
            const newUser =new Student({
                username: username,
                password:password,
                name:name,
                sem:sem,
                batchyaer:batchyear,
                branch:branch,
                proctor:proctor,
                usertype:'Student'
                
            });

            // { "username": "username",
            // "password":"password",
            // "name":"name",
            // "sem":"sem",
            // "batchyaer":"batchyear",
            // "branch":"branch",
            // "proctor":"proctor"
            // }
            await newUser.save();
            const token=jwt.sign({username:newUser.username,id:newUser._id},SECRET_KEY)
            res.status(201).send({user:newUser,token:token})
           
        }
        }
    } catch (error) {
        res.status(400).send({err: error})
    }
})



router.post('/registerProctor', async (req, res) => {
    try {
        const {username, password,name,department,batchyear} = req.body;
        const existingUser=await Proctor.findOne({username:username })
        if(existingUser)
        {
            res.status(400).send({message:"User already exist"})
            // alert("Existed user")
        }
        // console.log(req.body);
        else{
        if (!username ||!password) {
            res.status(400).send({err: "Please enter all fields."});
        } else {
            const newUser =new Proctor({
                username: username,
                password:password,
                name:name,
                department:department,
                batchyear:batchyear,
                usertype:"Proctor"
                
            });
            // {"username": "username",
            // "password":"password",
            // "name":"name",
            // "department":"department",
            // "batchyear":"batchyear"
            // }
           
            await newUser.save();
            const token=jwt.sign({username:newUser.username,id:newUser._id},SECRET_KEY)
            res.status(201).send({user:newUser,token:token})
        }
        }
    } catch (error) {
        res.status(400).send({err: error})
    }
})


router.post('/registerNGO', async (req, res) => {
    try {
        const {username, password,name,description,date,address,phoneno,mail,image} = req.body;
        const existingUser=await NGO.findOne({username:username })
        if(existingUser)
        {
            res.status(400).send({message:"User already exist"})
            // alert("Existed user")
        }
        else{
        console.log(req.body);
        if (!username ||!password) {
            res.status(400).send({err: "Please enter all fields."});
        } else {
            const newUser =new NGO({
                username: username,
                password:password,
                name:name,
                description:description,
                date:date,
                address:address,
                phoneno:phoneno,
                mail:mail,
                image:image,
                usertype:"NGO"
                
            });
        //     {
        //     "username": "username",
        //     "password":"password",
        //     "name":"name",
        //     "description":"description",
        //     "date":"2018-07-19",
        //     "address":"address",
        //     "phoneno":"1234567890",
        //     "mail":"mail",
        //     "image":"image",
        //     "usertype":"NGO"
        // }
           
            await newUser.save();
            const token=jwt.sign({username:newUser.username,id:newUser._id},SECRET_KEY)
            res.status(201).send({user:newUser,token:token})
        }
        }
    } catch (error) {
        res.status(400).send({err: error})
    }
})

module.exports = router;