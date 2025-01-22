// import http from "http";

// const server = http.createServer((req, res) => {
//     if(req.method == 'post' && req.url == "/submit"){
//         let body = '';
//         req.on("data",chunk => {
//             body += chunk.toString();
//             console.log(body);
//         })
//     }
    
// })
// server.listen(3000)

import http from "http";
import fs from "fs";

const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/submit') {
        let body = '';

        // Collect data from the POST request
        req.on('data', chunk => {
            body += chunk.toString(); // Append data chunks
        });

        // When all data is received
        req.on('end', () => {
            const parsedData = new URLSearchParams(body); // Parse form data
            const jsonData = Object.fromEntries(parsedData); // Convert to a JSON object

            console.log('Received Data:', jsonData);

            // Save data to a JSON file
            fs.appendFile('form-data.json', JSON.stringify(jsonData, null, 2), err => {
                if (err) {
                    console.error('Error writing to file:', err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    return;
                }

                fs.readFile('form-data.json', 'utf8', (err, data) => {
                    if (err) {
                        console.error("Error reading the file:", err);
                        return;
                    }
                res.writeHead(200, {'Content-Type': 'application/json'});
                    res.write(data);
                    res.end();
            });
            });
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
    
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

