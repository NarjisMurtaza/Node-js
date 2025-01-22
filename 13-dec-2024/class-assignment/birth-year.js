console.log("Enter your age")
process.stdin.on("data", data => {
    let year = new Date().getFullYear();
    console.log(`your birth year is ${year-data}`);
    process.exit();
})
