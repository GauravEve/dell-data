var fs=require("fs");
fs.readFile("sample.txt",function(err,data)
{
    if(err){
        throw err;
    }
        console.log("Reading file completed:"+new Date().toISOString());

})
    
    
console.log("After reading file asynchronously:"+new Date().toISOString());