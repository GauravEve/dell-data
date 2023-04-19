var fs=require('fs');


//writing the content to the file

// fs.writeFile("test.txt","Hello Redbus collegues",function(err,data){
//     if(err){
//         throw err;
//     }
//     console.log("Write operation successful");
// })
// fs.appendFile("test.txt","Hi again",function(err,data1){
//     if(err){
//         throw err;
//     }
//     console.log("append operation successful");
// })
fs.readFile("test.txt",function(err,data){
    if(err){
        throw err;
    }
    console.log(data.toString());
});

// fs.unlink("test.txt",function(err){
//     if(err){
//         throw err;
//     }
// };

