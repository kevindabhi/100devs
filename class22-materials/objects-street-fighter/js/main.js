//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods


function MakeCharacter (charName, charStrength, charMana, charCombo){
    this.name = charName
    this.strength = charStrength
    this.mana = charMana
    this.combo = charCombo

    this.kick = function() {
        console.log("kick")
    }
    this.punch = function() {
        console.log("punch")
    }
    this.duck = function() {
        console.log("duck")
    }
}