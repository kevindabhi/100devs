//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function TonyHawkCharacter(userName, powerLevel, trick, teeth ) {
this.name = userName
this.powerLevel = powerLevel
this.trick = trick
this.teeth = teeth
this.jump = function() {
    console.log("tony jumps")
}
this.run = function() {
    console.log("tony runs")
}
this.skate = function() {
    console.log("tony skates")
}
}

let tonyHawk2 = new TonyHawkCharacter("Tony", 10, "yes", "few lost");