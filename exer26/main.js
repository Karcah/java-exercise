

console.log(" blocking example")

function  fetchUserDataSync () {


    alert("fetching user data")

    return { id:1, name: "muhidiin"}


}



console.log("start fetching user data")



const user = fetchUserDataSync();



console.log("user data", user );






console.log("Non blocking example ")




function getUserData(callback){


    setTimeout (()=>{

        const user = { id: 15, name: "muhdiin"}
        callback(user)


    }, 5000 )


}


getUserData(function (user) {   console.log (user)});


console.log(" show me immediately")