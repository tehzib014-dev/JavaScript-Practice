// SpOoKy~CaSe

/*
story :

1.Given a string representing a variable name, convert it to "spooky case" using the following constraints:
2.Replace all underscores (_), and hyphens (-) with a tilde (~).
3.Capitalize the first letter of the string, and every other letter after that. Ignore the tilde character when counting. Make all other letters lowercase.
  For example, given hello_world, return HeLlO~wOrLd.
*/

/*
Tests:
1. spookify("hello_world") should return "HeLlO~wOrLd".
2. spookify("Spooky_Case") should return "SpOoKy~CaSe".
3. spookify("TRICK-or-TREAT") should return "TrIcK~oR~tReAt".
4. spookify("c_a-n_d-y_-b-o_w_l") should return "C~a~N~d~Y~~b~O~w~L".
5. spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts") should return "ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS".
*/

/*
steps:
1. Replace all underscores (_) and hyphens (-) with tildes (~).
   Preview: "hello_world" → "hello~world"
2. Convert the entire string into lowercase.
3. Create a counter (count = 0) to track only alphabetic characters.
4. Create an empty string (result) to store the final output.
5. Loop through the string:
   - If the current character is "~", add it to result and use continue.
   - If count is even, convert the current character to uppercase.
   - If count is odd, keep the current character lowercase.
   - Increase count only when processing a letter.
6. Return the result.
*/

function spookify(boo) {
  let str = boo.replaceAll("-", "~").replaceAll("_", "~").toLowerCase();
  let count = 0;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == "~") {
      result = result + "~";
      continue;
    }
    if (count % 2 == 0) {
      result = result + str.charAt(i).toUpperCase();
    } else {
      result = result + str.charAt(i).toLowerCase();
    }
    count+=1;
  }
  return result;
}

console.log(spookify("hello_world"));
console.log(spookify("Spooky_Case"));
console.log(spookify("TRICK-or-TREAT"));
console.log(spookify("c_a-n_d-y_-b-o_w_l"));
console.log(spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts"));