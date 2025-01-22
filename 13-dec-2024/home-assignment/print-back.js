let string_input = "hello"
let number_input = 2;
let new_string = "";
for (let i = 0; i < number_input; i++){
    new_string += string_input.slice(-1);
    string_input = string_input.slice(0, -1);
}
console.log(new_string + string_input);


