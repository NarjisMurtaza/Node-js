import http from "http";
import fs from "fs";

fs.readFile('readme.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(data);
        res.end();
    }).listen(8080, () => {
        console.log("Server is running on http://localhost:8080");
    });
});




