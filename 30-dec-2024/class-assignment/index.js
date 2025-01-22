import fs from "fs";

//read and print data in console and write in the file
var readfile = fs.createReadStream('user_data.json');
var writefile = fs.createWriteStream('file.json')
readfile.on('data', function (chunk) {
    // console.log(chunk.toString());
    writefile.write(chunk)
});





