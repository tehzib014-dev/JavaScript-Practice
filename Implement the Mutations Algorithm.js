// Implement the Mutations Algorithm

/*
User Stories:

Create a function named mutation that takes an array as its argument.
mutation should return true if the string in the first element of the array contains all of the letters of the string in the second element of the array, and false otherwise. For example:
mutation(["hello", "Hello"]), should return true because all of the letters in the second string are present in the first, ignoring case.
mutation(["hello", "hey"]) should return false because the string hello does not contain a y.
mutation(["Alien", "line"]), should return true because all of the letters in line are present in Alien.
*/

/*
Tests:
1. mutation(["hello", "hey"]) should return false.
2. mutation(["hello", "Hello"]) should return true.
3. mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
4. mutation(["Mary", "Army"]) should return true.
5. mutation(["Mary", "Aarmy"]) should return true.
6. mutation(["Alien", "line"]) should return true.
7. mutation(["floor", "for"]) should return true.
8. mutation(["hello", "neo"]) should return false.
9. mutation(["voodoo", "no"]) should return false.
10. mutation(["ate", "date"]) should return false.
11. mutation(["Tiger", "Zebra"]) should return false.
12. mutation(["Noel", "Ole"]) should return true.
*/


// Solution :

/*
steps:

1. create function with array parameter
2. convert all elements into lowercase for future comparison
3. should return true if the string in the first element contains all the letter oof second else false

*/


function mutation(arr) {
  let arrLowerCase = arr.map((e) => e.toLowerCase())
  let [first, second] = arrLowerCase;

  let result = true;
  for (let i = 0; i < second.length ; i++){
    if (!first.includes(second.charAt(i))){
      result = false;
    };
  }

  return result;
};

mutation(["hello", "hey"]);
mutation(["hello", "Hello"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
mutation(["Mary", "Army"]);
mutation(["Mary", "Aarmy"]);
mutation(["Alien", "line"]);
mutation(["floor", "for"]);
mutation(["hello", "neo"]);
mutation(["voodoo", "no"]);
mutation(["ate", "date"]);
mutation(["Tiger", "Zebra"]);
mutation(["Noel", "Ole"]);