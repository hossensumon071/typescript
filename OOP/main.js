// OOP Simplified: Learn Object Oriented Programming the Easy Way 

// doren amra cricket khelbo ba apnake ekta cricket game banate bola hocche ekon jokon apni game ta deisgn korben tokon game e shobar age apanr proyjon hobe ki game different player thakbe right so doren ekjoon player ke jodi apni define korte chan JS er basay tahole apni kibave likben 

// const player = {
//     name: "mashrafi",
//     age: 35,
//     skill: "Bowler"
// }

// jokon player tokon problem nai but multiple player hole ekta problem ache tokon jodi apnake define korte bola hoi tokon apnake jeibhave likte hobe 


const player1 = {
    name: "mashrafi",
    age: 35,
    skill: "Bowler"
}


const player2 = {
    name: "Mushfiq",
    age: 32,
    skill: "Wicket-keeper"
}


const player3 = {
    name: "Shakib",
    age: 34,
    skill: "All-rounder"
}

// ei je ekhane 3 ta player amra define korlam ekhane prottk er structure kintu same but ei same structure ta ke 3 bar likte hocche mane repeatation hocche ekon jodi apnar player aro bare tahole kintu apnake 100 200 manually jinsih ta eibahve e likte hobe 
// . code duplicate 
// . reuse kora jacche na 
// . more bug friendly code likte hobe 
// so ekahn theke apanr normally mistake hote e pare . abr jodi new ekta field add korte bola hoi like expreince name new ekta property add korte hobe tokon kintu apanke shob jaigai jeye ei property ta add korte hobe so aitao ekta problem 

//eikhan theke e object oriented programming er concept ta asche . and amra jodi uporer ei problem ta OOP way te think kortam tahole ei problem gula hoto na 

// eikahen ekta common bishoy ache ta holo aikhane era shobai cricket player.. so eikhan ei common bepar ta hocche or structure sei ta kintu e hocche or base and eikhane theke e ashe ei class concept ta ..OOP er prathomik boilerplate ta e hocche class

// ekon individual object gular shobar property jehoto same ekon eder ke jodi amra ekta common jaigai nite chai like amader jodi ekta player factory thakto jeita ekta common jaiga jekhane ashole player create hoi player object banano hoi 
// player factory --> single player 

// ekon amra jodi emon ekta common object ba ekta jaiga banate partam jei jaigai ei common boisisto gula dewa ache and apni jokon data gula diben tokon oi boisitio wal objecty ta create hoye apnake dibe ..so eikom concept joid amra korte pari tahole kintu hoiye jai seikhn theke ashole eseche class concept ta 

// class Player {
//     constructor(name, age, skill) {
//         this.name = name;
//         this.age = name;
//         this.skill = skill
//     }
// }

// eikahne ultimalty player name ekta blueprint banalam ba structure banalam 

// eikhane class holo initially oi player factory ta toiri kora je ki kore player banai 

// const mashrafi = new Player("Mashrafi", 35, "Bowler")
// const Sakib = new Player("shakib", 34, "All-rounder")
// const mushfiq = new Player("mushfiq", 34, "All-rounder")

// console.log(mashrafi.age)

// mashrafi this is called instance(apanr ekta protimorti toiri kore )


class Player {
    constructor(name, age, skill) {
        this.name = name;
        this.age = name;
        this.skill = skill
    }

    sayhello() {
        return `hi I am ${this.name} - ${this.skill}`
    }
}

const Sakib = new Player("shakib", 34, "All-rounder")

Sakib.sayhello()


// so eikhan theke class shomporke ekta balo idea peye gelam je class hocche ekta bluprint --- class is the blueprint of actual object 
// . aita amader duplicate code theke help korlo 


// doren apnake ekt game banate bola holo manb jibon niye 

class Human {
    constructor (name) {
        this.name = name;
        this.arms = 2;
        this.legs = 2
    }
}

// class Baby {
//     constructor(name) {
//         this.name = name;
//         this.arms = 2;
//         this.legs = 2;
//         this.cute =true
//     }

//     cry() {
//         return `Waa waa`
//     }
// }


// class Teenager {
//     constructor(name) {
//         this.name = name;
//         this.arms = 2,
//         this.legs = 2;
//         this.emotional = true 
//     }

//     crush() {
//         return `I have a crush on ***`
//     }
// }


// so eikahne abr duplicate hocche so ei level of code duplication er jonno OOP niye asche inheritance concept 

// class Baby extends Human {
//     constructor(name) {
//         this.cute = true
//     }

//     cry() {
//         return `Waa waa!`
//     }
// }

class Teenager extends Human {
    constructor(name) {
        this.emotional = true 
    }

    crush() {
        return `I have a crush on ***`
    }
}

// aita e hocche inheritance 

const monti = new Baby("monti")

console.log(monti.name); // error

// class Baby extends Human {
//     constructor(name) {
//         super(); 
//         this.cute = true
//     }

//     cry() {
//         return `Waa waa!`
//     }
// }
