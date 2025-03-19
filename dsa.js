// const reverseString = (str) => {
//   let string = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     console.log(str[i]);
//     string += str[i];
//   }
//   return string;
// };

// const reverseString = (str) => str.split("").reverse().join("");

// <<< ---------------------- >>>

// Find First Non-Repeating Character

// const firstNonRepeatingCharacter = (str) => {
//   const charCount = {};

//   for (let char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//     console.log("object", charCount);
//   }

//   for (let char of str) {
//     if (charCount[char] === 1) {
//       return char;
//     }
//   }

//   return "There's no single letter in the given string";
// };

// const firstNonRepeatingCharacter = (str) => {
//   const charCount = {};

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (charCount[char] === 1) return char;
//   }

//   return "not found";
// };

// console.log(firstNonRepeatingCharacter("aabbccd"));
