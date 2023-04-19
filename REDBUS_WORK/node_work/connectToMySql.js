var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:"student_db"
});

//connect to the database

con.connect(function(err,conn){
    if(err) throw err;
    console.log("Connected!");

    //write a query

    con.query("select * from students where marks>99 and roll_no<8",function(err,result,fields){
            if(err){
                throw err;
            }
            //desc studdents
            //elements.Field
            
            // console.log(results);
            // Object.keys(result).forEach(function(key){
            //     var row=result[key];
            //     console.log(row.name);
            // });

            result.forEach(elements=>{
                console.log(elements.name);
            })
    });

});
