//blocking functions(synchronous) and callbacks(asynchronous(nested callbacks))

var fs=require("fs");

var data=fs.readFileSync("sample.txt");
console.log("Reading file completed successfully:"+new Date().toISOString());
console.log("After readFileSync statement:"+new Date().toISOString()); 