const user_data = [{
    id: 1,
    user_name: "ali",
    age: 20
},
{
    id: 2,
    user_name: "ahmed",
    age: 20
},
{
    id: 3,
    user_name: "abbas",
    age: 20
}]
const order_data = [
    {
        id: 1,
        order: "shoes"
    },
    {
        id: 2,
        order: "clothes"
    },
    {
        id: 3,
        order: "bottle"
    }
]
function show_user_data(user_data) {
    console.log("inside function")
    return new Promise((resolve) => {
        console.log("inside promise");
            if (item.id == 1) {
                console.log("inside if");
                resolve(item.id);
            };
        
    });
}

// function show_order_data() {
//     return new Promise((resolve) => {
//         if (user_data.id == order_data.id)
//             resolve(order_data.order)
//     })
// }

async function checkout() {
    console.log('calling');
    const result1 = await show_user_data();
    // const result2 = await show_order_data();
    // console.log([result1, result2]);
    console.log(result1);
}

checkout();


