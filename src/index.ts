//types and interfaces in typescript

type User = {
    name:string,
    age:number,
    email:string,
    password:string
};

interface Admin {
    name:string,
    age:number
}

function logNames(user:User){
    console.log(user.name)
}


//Union and literal types
let statusRn : "Succes" | "error" = "Succes"
type ID = string | number

let direction : "left" | "right" | "up" | "down"

type int = string | null


//type inference and type assertions

let x = "hello" ;
let input = document.getElementById("newInput") as HTMLInputElement;

let a = true;
console.log(typeof(x))


