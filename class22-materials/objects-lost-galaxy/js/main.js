//Create a mouse object that has four properties and three methods
let mouse = {}

mouse.brand = "jelly comb";
mouse.color = "white";
mouse.buttons = 3;
mouse.isScrollable = true;


mouse.leftClick = function() {
    console.log("you pressed left button")
}


mouse.rightClick = function() {
    console.log("you pressed right button")
}

mouse.scroll = function() {
    console.log("wee you are scrolling.")
}