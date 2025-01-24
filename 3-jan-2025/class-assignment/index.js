import http from "http";
import fs from "fs";

const server = http.createServer((req,res) => {
    fs.readFile('index.html',(err, data) => {
        if(data){
            res.writeHead(200, {"content-type" : "text/html"});
            res.write(data);
            res.end();
        }
        else if(err){
            fs.readFile('404.html', (err, data) => {
                if(err){
                    res.writeHead(301, {"location" : "https://github.com/NarjisMurtazal"});
                    res.write("<h1>404</h1>")
                    res.end()
                }
                else{
                    res.writeHead(404, {"content-type" : "text/html"});
                    res.write(data)
                    res.end()
                }
            })
        }
    })
})
server.listen(8080);


