var http=require('http');

//lets create a server to listen 8080 port

http.createServer(function(req,res){
    //lets write the response to show the client
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("Welcome to REDBUS Training Team!");
    console.log("server started on 8080 port");
    res.end();
}).listen(8080);
