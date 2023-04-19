var http=require('http');
var server=http.createServer(function(req,res){
    if(req.url=='/'){
        //lets set the response headers
        res.writeHead(200,{'Content-Type':'text/html'});

        //lets set the content body
        res.write(`<html><h1>Welcome to Redbus</h1><br><p>Redbus as a multinational company</p><a href="/aboutus">about us</a></html>`);
        res.end();
    }

    else if(req.url=='/aboutus'){
        //lets set the response headers
        res.writeHead(200,{'Content-Type':'text/html'});

        //lets set the content body
        res.write('<h1>About us</h1><p>Redbus follows startup type of culture, very interactive and communicative.<br>You can learn a vast variety of technolies');
        res.end();
    }

    else if(req.url=='/career'){
        //lets set the response headers
        res.writeHead(200,{'Content-Type':'text/html'});

        //lets set the content body
        res.write('<h1>This is career page</h1>');
        res.end();
    }
    else{
        res.write("Invalid request")
    }
});

server.listen(8080);
console.log("Server is running at 8080 port")