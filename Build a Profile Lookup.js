// Build a Profile Lookup

/*
User Stories:

You should create a function named lookUpProfile that takes a name and a property as arguments.
You should retrieve contact information from the provided contacts array.
If the function receives a contact name and the property exists on the related contact, then the property's value should be returned.
If the name passed to the function does not match any contacts in the contacts array, then the function should return "No such contact".
If the property does not exist on a found contact, then the function should return "No such property".
*/

/*
Tests:
1. The contacts array should still be present in the global scope. Reset the lesson to recover it if you deleted it.
2. You should have a function named lookUpProfile with two parameters.
3. lookUpProfile("Kristian", "lastName") should return a string.
4. lookUpProfile("Kristian", "lastName") should return the string Vos
5. lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]
6. lookUpProfile("Harry", "likes") should return an array
7. lookUpProfile("Bob", "number") should return the string No such contact
8. lookUpProfile("Bob", "potato") should return the string No such contact
9. lookUpProfile("Akira", "address") should return the string No such property
10. The contacts array should remain unchanged after running lookUpProfile
*/


// Solution :
let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];


/*

steps:
1. function with two strings
2. use find method to get each object individually
3. validate if the name exists in the array
4. if name exists, validate if the property exists in the object
5. if property exists, return the value of the property
6. if property does not exist, return "No such property"
7. if name does not exist, return "No such contact"
4. return the require property 

*/


function lookUpProfile(name, prop) {
  const user = contacts.find((user) =>
    user.firstName == name
  );

  if (user) {
    if (user[prop]) {
      let value = user[prop];
      return value
    } else {
      return "No such property"
    };
  } else {
    return "No such contact"
  }

}

console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Bob", "potato"));
console.log(lookUpProfile("Akira", "address"));