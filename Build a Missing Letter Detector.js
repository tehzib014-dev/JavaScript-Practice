// Build a Missing Letter Detector

/*
User Stories:

1. You should have a function named fearNotLetter.
2. The fearNotLetter function should accept one argument: a string representing a range of letters in alphabetical order which can have one letter missing.
3. The function should find the missing letter in the passed letter range and return it.
4. If all letters are present in the range, the function should return undefined.
*/

/*
Tests:
1. You should have a fearNotLetter function.
2. fearNotLetter("abce") should return the string "d".
3. fearNotLetter("abcdefghjklmno") should return the string "i".
4. fearNotLetter("stvwx") should return the string "u".
5. fearNotLetter("bcdf") should return the string "e".
6. fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/


// Solution :
function fearNotLetter(string){
  const alphabets = "abcdefghijklmnopqrstuvwxyz"
  const positionOfFirstChar =  alphabets.indexOf(string[0]);
  const positionOfLastChar =  alphabets.indexOf(string[string.length - 1]);
  let missingLetter = '';

  for (let i=positionOfFirstChar; i <= positionOfLastChar; i++){
    if(!string.includes(alphabets[i])){
      missingLetter = alphabets[i];
    }
  }
  if(missingLetter.length == 0){
   return console.log(undefined);
  } else {
    return console.log(missingLetter);
  }
}

// Test :
fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
fearNotLetter("stvwx");
fearNotLetter("bcdf");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");