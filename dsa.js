const reverseString = (str) => {
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
    string += str[i];
  }
  return string;
};

console.log(reverseString("hello"));
