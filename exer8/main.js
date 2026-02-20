


let car = {


 make : "Toyota",   
 model : "Corolla",
 year : 2026,


greet :  function () {

console.log("hello  "+this.model);
} 

}

car.make ="Honda";


car.kir = "black";

console.log(car.kir);


console.log(car.greet());

