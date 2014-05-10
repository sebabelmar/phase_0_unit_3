
// CONCEPTS TO SOLVE U3.W8-9: Gradebook from Names and Scores

// These are the votes cast by each student. Do not alter these objects here.
var votes = {
  "Alex": { president: "Bob", vicePresident: "Devin", secretary: "Gail", treasurer: "Kerry" },
  "Bob": { president: "Mary", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Cindy": { president: "Cindy", vicePresident: "Hermann", secretary: "Bob", treasurer: "Bob" },
  "Devin": { president: "Louise", vicePresident: "John", secretary: "Bob", treasurer: "Fred" },
  "Ernest": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Fred": { president: "Louise", vicePresident: "Alex", secretary: "Ivy", treasurer: "Ivy" },
  "Gail": { president: "Fred", vicePresident: "Alex", secretary: "Ivy", treasurer: "Bob" },
  "Hermann": { president: "Ivy", vicePresident: "Kerry", secretary: "Fred", treasurer: "Ivy" },
  "Ivy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Gail" },
  "John": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Kerry" },
  "Kerry": { president: "Fred", vicePresident: "Mary", secretary: "Fred", treasurer: "Ivy" },
  "Louise": { president: "Nate", vicePresident: "Alex", secretary: "Mary", treasurer: "Ivy" },
  "Mary": { president: "Louise", vicePresident: "Oscar", secretary: "Nate", treasurer: "Ivy" },
  "Nate": { president: "Oscar", vicePresident: "Hermann", secretary: "Fred", treasurer: "Tracy" },
  "Oscar": { president: "Paulina", vicePresident: "Nate", secretary: "Fred", treasurer: "Ivy" },
  "Paulina": { president: "Louise", vicePresident: "Bob", secretary: "Devin", treasurer: "Ivy" },
  "Quintin": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Bob" },
  "Romanda": { president: "Louise", vicePresident: "Steve", secretary: "Fred", treasurer: "Ivy" },
  "Steve": { president: "Tracy", vicePresident: "Kerry", secretary: "Oscar", treasurer: "Xavier" },
  "Tracy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Ullyses": { president: "Louise", vicePresident: "Hermann", secretary: "Ivy", treasurer: "Bob" },
  "Valorie": { president: "Wesley", vicePresident: "Bob", secretary: "Alex", treasurer: "Ivy" },
  "Wesley": { president: "Bob", vicePresident: "Yvonne", secretary: "Valorie", treasurer: "Ivy" },
  "Xavier": { president: "Steve", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Yvonne": { president: "Bob", vicePresident: "Zane", secretary: "Fred", treasurer: "Hermann" },
  "Zane": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Mary" }
}

// Tally the votes in voteCount.
var voteCount = {
  president: {},
  vicePresident: {},
  secretary: {},
  treasurer: {}
}

// Variables to emulate how to create or call objects from an other function iterations.
// To have in mind when using: for(var positions in ballot)    in case you call this positons :)
var position1 = "president"
var position2 = "vicePresident"
var position3 = "secretary"
var position4 = "treasurer"

// This variables will become new object inside voteCount, voteCount:{positions:{candidate:}
var candidate1 = "Bob"
var candidate2 = "Bob" // I repeat this variable to show that when iquals leaves one if used for the same position.
var candidate3 = "Steve"

var object_creator = function(){
  // To show in the terminal
  console.log("Original empty object")
  console.log(voteCount) // You will see an "empty" object.
  console.log("")
  //-------------------------------------------------------------------------------------

  // Here I created 2 new objects inside voteCount.President with value = to 0 
  // and 2 new objects inside voteCount.vicePresident with value = to 0 (Bob x2  will be just one)
  // Remeber that you can create objects from the "outside" using dot/brakets notation.
  // (This is how we create variables inside voteCount from counter)
  voteCount[position1][candidate2] = 0
  voteCount[position1][candidate3] = 0 
  voteCount[position2][candidate1] = 0
  voteCount[position2][candidate2] = 0
  voteCount[position2][candidate3] = 0 
  
  // To show in the terminal
  console.log("After adding objects")
  console.log(voteCount) // You will see the new objects crated with values = to 0.
  console.log("")
  //-------------------------------------------------------------------------------------  


  // Adding to each new object value
  // Think about this for(var i,conditional,increment) when iterating over the objects for(var yourVariable in objects).
  for(i=1; i<=10;i++){
  voteCount[position1][candidate1]++; // here I add 10 to voteCount.president.candidate1
  }
  for(i=1; i<=10;i++){
  voteCount[position2][candidate1]++; // here I add 10 to voteCount.vicePresident.candidate1
  }
  for(i=1; i<=5;i++){
  voteCount[position2]["Bob"]++; // here I add 5 to voteCount.vicePresident.candidate2 (candidate1) using "" 
  }
  for(i=1; i<=8;i++){
  voteCount[position2][candidate3]++; // here I add 8 to voteCount.vicePresident.candidate3
  }

  // To show in the terminal
  console.log("After adding values throug iterations");
  console.log(voteCount) // Print always the same object
}

object_creator();