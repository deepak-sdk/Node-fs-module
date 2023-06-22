const http = require("http");
const fs = require("node:fs");
const PORT = 8080;
const server = http.createServer(function(req, res){
    if(req.url === '/home'){
        fs.readFile('./home.txt',"utf-8", function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
          });
    } else if (req.url === '/profile'){
        fs.readFile('./profile.txt',"utf-8", function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
          });
    }else if(req.url === '/contact'){
        fs.readFile('./contact.txt',"utf-8", function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
          });
    } else {
        res.end("Not found 404")
    }
})

server.listen(PORT, function(){
    console.log(`Node js server started on PORT ${PORT}`)
})