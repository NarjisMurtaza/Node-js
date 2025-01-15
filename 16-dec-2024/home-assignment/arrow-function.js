/* print using objects and arrow function*/
let std = [{
    name: "ali",
    subject: {
        maths: 70,
        eng: 80
    }
},
{
    name: "abbas",
    subject: {
        maths: 60,
        eng: 30
    }
}];
print_std_marks = () => {
    for (let i = 0; i < std.length; i++) {
        console.log(`Student: ${std[i].name} , Maths marks: ${std[i].subject.maths} , English marks: ${std[i].subject.eng} `);
    }
  }
  print_std_marks();






