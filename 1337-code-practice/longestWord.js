function longestWord(str) {
  let maxLength = 0;
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  console.log(maxLength);
}
longestWord("Hello algoritm and leetcode is quite difficult at the moment.");

//nothing done today but just doing git to keep consistency
<<<<<<< HEAD
=======
//javscript 30
>>>>>>> b500d46 (FCC algorithm, leetcode)
