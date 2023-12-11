// console.log("Hello")

// const country = "i love Bangladesh"

// console.log(country)

// let playerName = "Mashrafi";
// let age = 34; 

// console.log(playerName)

// // playerName = 34
// // age = 34

// console.log(playerName)


// let playerName;
// console.log(playerName)

// playerName = "masharafi"
// playerName = 34
// console.log(playerName)


function multiply(a : number, b : number) {
    return a + b
}

console.log(multiply(3, 4));
// console.log(multiply("sumit", 4));


let fruits = ['apple', 'banana', 'orange']
// let fruits = [] 
let mixed = ["apple", 3, true]

fruits.push("pineapple")
// fruits.push(34)
// mixed.push({
//     name: "shakib"
// })

// object 
// let person = {
//     name: "mashrafi",
//     age: 35,
//     isCaptain: true
// }

// person.name = 45
// person.name = "shakib"
// person.country =  "Bangladesh"




// Lesson 4 - Explicit & Union Types 
// let a : string;

// let b : number;

// let a: string[] = []
// let a: number[] = []

// let a: string | number[] = [] 
// this is called Union Type
// let a: (string | number)[] = [] 
// let b : string | number

// a = "sumit"
// b = "34"

// a.push(35)
// a.push("sumit")


// object 
// let c: object;

// let c: {
//     name: string;
//     age: number;
//     adult: boolean
// }

// let c: object

// c = [1,2,3] 



// Lesson 5 - Dynamic Type 

// let a: any;

// a = 5
// a = "sumit";

// let a: any[] = []

// a.push("bangladesh");
// a.push(34);

// let b: {
//     name: any,
//     age: any 
// }

// b = {
//     name: "bangladesh",
//     age: 21
// }



// Lesson 6 - How to use Functions 
let myFunc: Function;

// myFunc = () => {
//     console.log("Hello")
// }

const myfunc = (a: string, b: string, c?:string) : string => {
    // console.log(c)
    // console.log(`Hello ${a} ${b}`)
    // return undefined (in typescript return void - void mane hocche kicchu nai mane completelyu absent ekta value but undefined ekta value )

    return a + b 
}

// myFunc(3, 4)




// Lesson 7 - Type Aliases  

// const userDetails = (
//     id: string | number,
//     user: {name: string; age: number}
// ) => {
//     console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
// }

// const sayHello = (user: {name: string, age: number}) => {
//     console.log(`Hello ${user.age > 50 ? "Sir" : "Mir"} ${user.name}`)
// }


type StringOrNum = string | number
type UserType = {name: string; age: number}

const userDetails = (
    id: StringOrNum,
    user: UserType
) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
}

const sayHello = (user: UserType) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mir"} ${user.name}`)
}




// Lesson 8 - Function Signatures 
// let add: (x: number, y: number) => number 

// add = (a: number, b: number) => {
//     // console.log(a+b)
//     return a + b
// }

let calculation : (x: number, y: number, z: string) => number

calculation = (a: number, b:number, c:string) => {
    if(c === "add") {
        return a + b
    } else {
        return a - b
    }
}

calculation(5, 6, "add")



// Lesson 9 - Classes  

class Player {
    name: string;
    age: number;
    country: string;

    constructor(n: string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c
    }

    play() {
        console.log(`${this.name} from ${this.country} is playing`)
    }
}

const mashrafi = new Player('mashrafi', 42, 'Bangladesh')
const shakib = new Player('shakib', 40, 'Bangladesh')

const players: Player[] = []