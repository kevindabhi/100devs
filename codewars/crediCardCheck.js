

// // get the substring starting from index 0 to 10
// let result = message.substring(0, 10);
// console.log(result);

// let first = message.slice(0,-4);
// let second = message.slice(-4);

// console.log(first)
// console.log(second)

// first = first.replace()


let cc = "JavaScript is fun.";
// return masked string
function maskify(cc) {
  console.log ( ('#'.repeat(Math.max(0, cc.length - 4)) + cc.substr(-4)));
    
  }