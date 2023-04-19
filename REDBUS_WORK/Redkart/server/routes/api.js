const express = require('express');
const router = express.Router();
const Products = require("../models/Products");
const Cart=require("../models/Cart")
const MongoClient = require('mongodb').MongoClient;
const CartSave=require("../models/CartSave")


router.get('/getCartSave',(req,res)=>{
    
    CartSave.find()
    .then(product=>res.json(product))
    .catch(err=>res.status(404).json({err:"No products found"}));
});

router.get('/getProducts',(req,res)=>{
    
    const {id}=req.body
    console.log(id);
    Products.find()
    .then(product=>res.json(product))
    .catch(err=>res.status(404).json({err:"No products found"}));
});

// router.put('/getProducts',async (req,res)=>{

//     try{
//         let {page}=req.body;
//         console.log(page);

//         if(!page){
//             page=1;
//         }
//         console.log(page);
//         const size=10;
//         const limit=parseInt(size);
//         const skip=(page-1)*size;

//       const products=await Products.find().limit(limit).skip(skip).then(book=>{console.log(book);res.json(book)})
      
      
//     }
//     catch(error){
//         res.sendStatus(400).send(error.message);
//     }
// });

router.get('/getCart',(req,res)=>{
    Cart.find()
    .then(product=>res.json(product))
    .catch(err=>res.status(404).json({err:"No products found"}));
});

router.post('/registerProducts', async (req, res) => {
    try {
        const {id,image, description,type,brand,size,price,category} = req.body;
        
        if (!id||!image ||!description||!type||!brand||!size||!price||!category) {
            res.status(400).send({err: "Please enter all fields."});
        } else {
            // console.log(description)
                const newProduct =new Products({
                id:id,
                image: image,
                description:description,
                type:type,
                brand:brand,
                size:size,
                price:price,
                category:category
                
            });

           
            await newProduct.save();
            res.status(201).send({message:"successful"})
            
        }
        }
    catch (error) {
        res.status(400).send({err: "error"})
    }
})

// router.put('/:id',(req,res)=>{
//     Cart.findByIdAndUpdate(req.params.id,req.body)
//     .then(books=>res.json({msg:"Books updated succesfully"}))
//     .catch(err=>res.status(404).json({err:"Unable to update book"}));
// });
update_cart_count =(pid,existingItem,sign)=>{
    const client = new MongoClient("mongodb://127.0.0.1:27017");

    async function run() {
    try {
        const database = client.db("Redkart");
        const carts = database.collection("carts");

        // console.log('update seat count',seats)
        const filter = { id: pid };
        
        var updateDoc;
        if(sign==1)
        {
        updateDoc = {
                $set: {
                quantity: existingItem.quantity+1
                }
            };
        const result = await carts.updateOne(filter, updateDoc);

        }
        else{
            updateDoc = {
                $set: {
                quantity: existingItem.quantity-1
                }
            };
            if((existingItem.quantity)==1)
            {
                carts.find(id);
            }
            else{
                const result = await carts.updateOne(filter, updateDoc);

            }
        }


       
    } finally {
        await client.close();
    }
    }
    run().catch(console.dir);
}

router.post('/cartHandler',async(req,res)=>{
    try{
        const {id,sign}=req.body;
        console.log(sign);
        if(sign==1||sign==-1)
        {
        const existingItem=await Cart.findOne({id:id})
        update_cart_count(id,existingItem,sign)
        res.status(201).send({message:"successful"})
        }
        else{
            await Cart.deleteOne({id:id})

        }
    }
    catch (error) {
        res.status(400).send({err: "error"})
    }

})

router.post('/cartSave', async (req, res) => {
    try {
        const {id,image, description,type,brand,size,price,category,quantity} = req.body;
        await Cart.deleteOne({id:id})
        console.log(req.body);
                const newProduct =new CartSave({
                id:id,
                image: image,
                description:description,
                type:type,
                brand:brand,
                size:size,
                price:price,
                category:category,
                            });

           
            await newProduct.save();
            res.status(201).send({message:"successful"})
        }
           
    catch (error) {
        res.status(400).send({err: "error"})
    }
})


router.post('/cart', async (req, res) => {
    try {
        const {id,image, description,type,brand,size,price,category} = req.body;
        console.log(req.body);
        const existingItem=await Cart.findOne({id:id})
        // console.log(id);

        
            if(existingItem)
            {
            update_cart_count(req.body.id,existingItem,1)
            res.status(201).send({message:"successful"})
            
                // const existingQuantity=existingItem.quantity;
                // await Cart.deleteOne({id:id})
                // const newProduct =new Cart({
                //     id:id,
                //     image: image,
                //     description:description,
                //     type:type,
                //     brand:brand,
                //     size:size,
                //     price:price,
                //     category:category,
                //     quantity:existingQuantity+1});
                //     await newProduct.save();
                //     res.status(201).send({message:"successful"})
                
                    }
            // console.log(description)
            else{
                console.log(id);
                const newProduct =new Cart({
                id:id,
                image: image,
                description:description,
                type:type,
                brand:brand,
                size:size,
                price:price,
                category:category,
                quantity:1
                            });

            await CartSave.deleteOne({id:id})
            await newProduct.save();
            res.status(201).send({message:"successful"})
        }
           
        }
    catch (error) {
        res.status(400).send({err: "error"})
    }
})

// router.put('/loginStudent', async (req, res) => {
//     // console.log('loginroute');
//     console.log(req.body);

//     try {
//         const { username, password} = req.body;
//         var validUser=null;
//         if (!username || !password) {
//             res.status(400).send({err: "Please enter all fields."});
//         } else {
//             const user = await users.find({ usertype: "Student" });
//             // console.log(user)
//             user.forEach(element => {
//                 // console.log(element);
//                 if(element.username==username)
//                 validUser=element;
//                 // console.log(validUser);
//             });
//             if (!validUser) {
//                 res.status(404).send({err: 'User not found'});
//             } else {
//                 if (validUser.password === password) {
//                     // res.status(200).send({message: "Login Successfull"});
//                     const token=jwt.sign({username:validUser.username,id:validUser._id},SECRET_KEY)
//                     res.status(201).send({user:validUser,token:token})
//                 } else {
//                     res.status(404).send({err: 'Incorrect password'});
//                 }
//             }
//         }

//     } catch (error) {
//         res.status(400).send({err: "Something went wrong please try again"})
//     }
// })


module.exports = router;