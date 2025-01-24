function run_let(){
for (let i = 0; i < 5; i++) { /* let will print as the loop runs */
    // console.log(i);
    setTimeout(()=>{
    },i * 1000); 
    console.log(i) /* It will multiply the value by 1000 and wait x miliseconds */
}
}
run_let();
function run_var(){ /* var will print once the loop is completed */
    for (var i = 0; i < 5; i++) {
        // console.log(i);
        setTimeout(()=>{
            console.log(i)
        console.log(i) /* It will multiply the value by 1000 and wait x miliseconds */
    },i * 1000); 
      }
    }
    run_var();