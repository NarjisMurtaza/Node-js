import fs from "fs";

//write file
// const content = "<script>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</script>";
// fs.writeFile("abc.txt", content,(error => {
//     console.log("Content added");
// })
// )

// read file
// fs.readFile("abc.txt",'utf8',(err, data) => {
//     if(err){console.log("file not found");}
//     else{console.log(data);}
// })

//append file
// fs.appendFile("abc.txt", "extra content added", (err) =>{
//     console.log("content append");
// })

// rename file
// fs.rename("abc.txt","xyz.txt", (err) => {
//     if (err) throw err;
//     console.log('Rename complete!');
//   })

//remove file
// fs.rm("xyz.txt",(err) => {
//     console.log("file removed")
// })

//create folder
// fs.mkdir('./new', (err) => {
//     if (err) throw err;
//   });

//remove folder
fs.rmdir("abc.txt", (err) => {
    console.log("directory removed")
})