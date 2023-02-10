function truncateString(str, num) {
  if (str.length > num) {
    console.log(str.slice(0, num) + "...");
  } else {
    console.log(str);
  }
}

truncateString("hey how are you?", 5);

//
