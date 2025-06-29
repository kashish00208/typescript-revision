class person{
    constructor(private name:string){}
    func(){
        console.log(`Hello ${this.name}`);
    }
}

class book{
    title:string;
    author:string;
    constructor(title:string,author:string){
        this.author =author;
        this.title = title;
    }
}

//generics in typescript

function indentify<T>(value :T):T{
    return value
}

type Person = { name: string; age: number };
type PersonKeys = keyof Person; // "name" | "age"

// math.ts
export function add(a: number, b: number): number {
  return a + b;
}
