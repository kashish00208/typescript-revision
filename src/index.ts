// TypeScript = JavaScript + type system


//explicite descreption of objects using interface
interface User {
    name:string,
    age:number
}

const user:User = {
    name:"kashihsh",
    age:40
}

//interfaces declaration with classes

class UserAccount {
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name,
        this.age = age
    }
}

const user1:User = new UserAccount("mayank",30)
console.log(UserAccount)
function deleteUser(user:User) {
    const name = user.name;
    
}

