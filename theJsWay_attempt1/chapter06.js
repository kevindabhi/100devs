// const bicycle = {
//     brand: "Univega",
//     type : "pedelac",
//     assistedSpeed : "25kmph"
// };

// bicycle.assistedSpeed = "30kmph";
// console.log(bicycle.brand);

// console.log(`I ride a ${bicycle.brand} ${bicycle.type} Bicycle and it has assisted speed of ${bicycle.assistedSpeed}.`)



//RPG Character Aurora

// const aurora = {
//     name : "Aurora",
//     strength : 100,
//     health : 100,
//     armour : 150
// };



// console.log (`Our character ${aurora.name} has ${aurora.health} health and ${aurora.strength} Strength`);
// console.log("Aurora got attacked")

// aurora.health-= 20
// aurora.strength+= 20

// console.log(`${aurora.name} has ${aurora.health} health and ${aurora.strength} Strength`)




//Build your Character Object.

// const  aurora = {
//     name : "Aurora",
//     strength: 80,
//     health: 100,
// };

// function describe(character){
//     return `${aurora.name} has ${aurora.strength} Strength and ${aurora.health} health`;
// }

// console.log(describe(aurora));


//Character Object and using describe as a property vs function in the last example.

// const  aurora = {
//     name : "Aurora",
//     strength: 80,
//     health: 100,
//     describe() 
//     {
//        return `${this.name} has ${this.strength} as strength and ${this.health} as health points`;
//     }
// };

// console.log(aurora.describe());


// Add experience to our character

// const aurora = {
//     name: "Aurora",
//     strength : 80,
//     health : 100,
//     xp: 0,
 
//     describe () {
//         return `${this.name} has ${this.strength} strength, ${this.health} Health, and ${this.xp} Experience.`;
//     }
// };


// // Aurora is harmed by an arrow
// aurora.health -= 20;
// // Aurora equips a strength necklace
//  aurora.strength += 10;
// // Aurora learn a new skill
// aurora.xp += 15;


// console.log(aurora.describe());






//Modeling a cat.

// const cat ={
//     name: "Nala",
//     breed: "mixed",
//     size: "fluffy"
// }

//     cat.chases= "chases it";
// console.log(`${cat.name} is a ${cat.breed} breed cat and is ${cat.size}.`);
// console.log(`look! a mouse, ${cat.name} ${cat.chases}`);

// const r = Number(prompt("Enter the circle radius:"));
// const circle = {
//         circumference () {
//         return r*2*3.14;
//     },
//         area(){
//             return Math.PI*r**2;
//         }
    
// }



// console.log(circle.circumference());
// console.log(circle.area());



//Account creation.

const account = {
    name: "alex",
    balance : 00,
    
    credit (amount) {
    
        account.balance= Number(account.balance) + Number(amount);
                 
    },

    describe ()
    {
        return (`${this.name} has ${this.balance} balance.`);
    }
}

console.log(account.describe());

//Adding 250 euros
account.credit (250);

//removing 80 euros
account.credit (-90);

console.log(account.describe());



// const account = {
//     name: "alex",
//     balance: 0,
//     credit(amount) {
//       account.balance += amount;
//     },
  
//     describe() {
//       return `${this.name} has ${this.balance} balance;`
//     }
//   };
  
  
//   //Adding 250 euros
//   account.credit(250);
  
//   //removing 80 euros
//   account.credit(-90);
  
//   console.log(account.describe());
