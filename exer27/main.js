

function fetchUserData (){


return new Promise ((resolve, reject) =>{



setTimeout( () =>{

const success = true;

if (success) {resolve ({ id: 20,name: "muhidiin" });    } 

else {  reject ( "failed to catch user data")

}

}, 2000);


} )



}


fetchUserData()

.then ((data) => console.log("user data", data))
.catch ((error) => console.log( error))
