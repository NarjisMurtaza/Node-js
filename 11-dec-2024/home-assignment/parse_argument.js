let arg = process.argv[2]; 
console.log(arg); 
    const myArray = arg.split(" "); 
    console.log(myArray); 
    if (myArray[0] === "hello") {
        myArray[0] = "hi";
    }
    const result = myArray.join(" ");
    console.log(result); 
