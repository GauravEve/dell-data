const express=require("express");

const accountRoutes=express.Router();

const items=[];

//util functions

//lets handle routes

accountRoutes.get('/account',(req,res)=>{
    res.send(items);
});

accountRoutes.post('/account/addAccount',(req,res)=>{
    items.push(req.body.e);
    console.log(req.body.e);
    res.send({success:true,msg:"account data added succesfully"});

});

//lets get the list of all account

accountRoutes.get('/account/list',(req,res)=>{
    res.send(items);
});

//update the account using put method
accountRoutes.put('/account/:id',(req,res)=>{
   
        const accountitem=req.params['id'];
        items.pop(accountitem);

        saveAccountData(existingAccount);
   
});


accountRoutes.delete('/account/:id',(req,res)=>{
    var existingAccount=items;
   
        const accountID=req.params['id'];
        existingAccount.pop(accountID);
        saveAccountData(existingAccount);
        res.send(`account with ${accountID} has been deleted`);

})

module.exports=accountRoutes;