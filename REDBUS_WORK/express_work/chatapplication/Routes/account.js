const express=require("express");

const accountRoutes=express.Router();

const fs=require('fs');

const dataPath='./Details/useraccounts.json';

//util functions
const saveAccountData=(data)=>{
    const stringifyData=JSON.stringify(data);
    fs.writeFileSync(dataPath,stringifyData);
};

const getAccountData=()=>{
    const jsonData=fs.readFileSync(dataPath);
    return JSON.parse(jsonData);
};

//lets handle routes

accountRoutes.get('/account',(req,res)=>{
    fs.readFile(dataPath,'utf-8',(err,data)=>{
        if(err){
            throw err;
        }
        res.send(JSON.parse(data))
    })
});

accountRoutes.post('/account/addAccount',(req,res)=>{
    var existAccounts=getAccountData();
    const newAccountID=Math.floor(100000+Math.random()*9000000);

    existAccounts[newAccountID]=req.body;
    console.log(existAccounts);
    saveAccountData(existAccounts);
    res.send({success:true,msg:"account data added succesfully"});

});

//lets get the list of all account

accountRoutes.get('/account/list',(req,res)=>{
    const accounts=getAccountData();
    res.send(accounts);
});

//update the account using put method
accountRoutes.put('/account/:id',(req,res)=>{
    var existingAccount=getAccountData();
   
        const accountID=req.params['id'];
        existingAccount[accountID]=req.body;

        saveAccountData(existingAccount);
        res.send(`account with ${accountID} has been updated`);
   
});


accountRoutes.delete('/account/:id',(req,res)=>{
    var existingAccount=getAccountData();
   
        const accountID=req.params['id'];
        delete existingAccount[accountID];
        saveAccountData(existingAccount);
        res.send(`account with ${accountID} has been deleted`);

})

module.exports=accountRoutes;