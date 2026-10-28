// P@ssw0rd Str3ngth!


/*
Given a password string, return "weak", "medium", or "strong" based on the strength of the password.

A password is evaluated according to the following rules:

1. It is at least 8 characters long.
2. It contains both uppercase and lowercase letters.
3. It contains at least one number.
4. It contains at least one special character from this set: !, @, #, $, %, ^, &, or *.

Return "weak" if the password meets fewer than two of the rules. Return "medium" if the password meets 2 or 3 of the rules. Return "strong" if the password meets all 4 rules.
*/

/*
Tests:
1. checkStrength("123456") should return "weak".
2. checkStrength("pass!!!") should return "weak".
3. checkStrength("Qwerty") should return "weak".
4. checkStrength("PASSWORD") should return "weak".
5. checkStrength("PASSWORD!") should return "medium".
6. checkStrength("PassWord%^!") should return "medium".
7. checkStrength("qwerty12345") should return "medium".
8. checkStrength("S3cur3P@ssw0rd") should return "strong".
9. checkStrength("C0d3&Fun!") should return "strong".
*/


function checkStrength(password) {

  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lowerCase = "abcdefghijklmnopqrstuvwxyz"
  let number = "0123456789"
  let specChar = "!@#$%^&*";

  let value = 0;
  let strength = ["weak", "medium", "strong"];

  // password length check
  if (password.length >= 8) {
    value = value + 1;
  };

  // contain uppercase and lowercase
  let hasUpper = false;
  let hasLower = false;

  for (let char of password) {
    if (upperCase.includes(char)) {
      hasUpper = true;
    }
    if (lowerCase.includes(char)) {
      hasLower = true;
    }
  };

  if (hasUpper && hasLower) {
    value++;
  }

  // number check

  for (let num of password) {
    if (number.includes(num)) {
      value++;
      break;
    }
  }

  // special char check
  for (let spec of password) {
    if (specChar.includes(spec)) {
      value++;
      break;
    }
  }

  if (value == 4) {
    return strength[2]
  } else if (value >= 2) {
    return strength[1];
  } else {
    return strength[0];
  }


}

console.log(checkStrength("123456"));
console.log(checkStrength("pass!!!"));
console.log(checkStrength("Qwerty"));
console.log(checkStrength("PASSWORD"));
console.log(checkStrength("PASSWORD!"));
console.log(checkStrength("PassWord%^!"));
console.log(checkStrength("qwerty12345"));
console.log(checkStrength("S3cur3P@ssw0rd"));
console.log(checkStrength("C0d3&Fun!"));