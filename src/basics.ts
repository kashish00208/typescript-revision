//Basic data types in typeScript

let age:number = 25;
let namee:string = "kashish";
let isDetermined :boolean = true;


//any data type in typescript

let key:any = 78;

//arrays decalaration in typescript

let numbers:number[] = [1,2,3]
let classes:string[] = ["class1","class2","class3"];



//Functions with data types :
function func(name:string):String{
    return `Hello ${name}`
}

func("kashish") // output Hello Kashish

function add(a:number,b:number):number{
    return a+b
}

add(4,5) //output 9

function logMsgs(msg:String):void{
    console.log(`Message passed by the Log function : ${msg}`)
}

logMsgs("Hello and welcome to typescript revision")

let numArray:number[] = [1,2,3,4,5] //Array of ineteger data type

let perosn:[string,boolean] = ["kashish",true];
perosn.push("yourName",false) // to add element through push function

//function which takes array and strings and logs them 
function logNames(persons: string[]) {
    persons.map((i) => {
        console.log(i);
    });
}

logNames(["kashish", "noName", "Lol"]);
