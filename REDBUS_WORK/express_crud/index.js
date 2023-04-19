const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const mysql=require("mysql");

//lets parse the app/json
app.use(bodyParser.json());

//lets establish connection with mysql
const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'expres_crud'
});

//lets test conection with sql

conn.connect((err)=>{
    if(err) throw err;
    console.log("connection established successfully")
});

app.get('/api/items',function(req,res){
    let sqlQuery ="select * from items";
    conn.query(sqlQuery,(err,result)=>{
        if(err)
        throw err
        res.send(result);
    })
})

app.post('/api/items',function(req,res){
    let sqlQuery=`insert into items(title,description) values('${req.body.title}','${req.body.description}');`;
    conn.query(sqlQuery,(err,result)=>{
        if(err)
        res.send(err)
        res.send(result);
    })
})

app.delete('/api/items/:id',function(req,res){
    let sqlQuery=`delete from items where id=${req.params.id}`;
    conn.query(sqlQuery,(err,result)=>{
        if(err)
        res.send(err)
        res.send(result);
    })
})

app.get('/api/items/:id',function(req,res){
    let sqlQuery=`select * from items where id=${req.params.id}`;
    conn.query(sqlQuery,(err,result)=>{
        if(err)
        res.send(err)
        res.send(result);
    })
})
app.put('/api/items/:id',function(req,res){
    let sqlQuery=`update items set title="CSE" where id=${req.params.id}`;
    conn.query(sqlQuery,(err,result)=>{
        if(err)
        res.send(err)
        res.send(result);
    })
})
app.listen(3000,()=>{
    console.log("listening on port 3000");
})