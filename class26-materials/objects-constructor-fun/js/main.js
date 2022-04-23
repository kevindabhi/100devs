//Create a constructor with 4 properties and 3 methods

function PizzaMachine(size, toppings, crust, sauce) {
    this.size = size
    this.toppings= toppings
    this.crust = crust
    this.sauce= sauce
    this.estimatedTime = function(){
        console.log ("calculating")
    }
    this.burnMouth = function(){
        console.log ("asfasgasdg")
    }
    this.frisbee= function(){
        console.log ("yeet")
    }
}


let veganPizza = new PizzaMachine( "30", ["vegan sauce", "onions", "paprika"], "cheese burst", "special" )

PizzaMachine.prototype.cheese = false;
