


// let people = [
//     {
//         name : "John",
//         age : 30,
//         city : "New York"
//     },
//     {
//         name : "Alice",
//         age : 25,
//         city : "Los Angeles"
//     },
    
//     {
//         name : "Bob",
//         age : 35,
//         city : "Chicago"
//     }
// ]

// console.log("properties and values of  each person");
 


// for( let qofWalba in people){

//     console.log(qofWalba)
// }


// for (let key in people){

//     console.log(people[key])
// }





let people = [
    {
        name : "John",
        age : 30,
        city : "New York"
    },
    {
        name : "Alice",
        age : 25,
        city : "Los Angeles"
    },
    {
        name : "Bob",
        age : 35,
        city : "Chicago"
    }
];


for (let person of people) {

    for (let key in person) {
        console.log(key + " : " + person[key]);
    }

    console.log("------------"); 
}