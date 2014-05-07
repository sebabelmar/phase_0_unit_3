/*
U3.W8-9: Gradebook from Names and Scores

You will work with the following two variables.  The first, students, holds the names of four students.  
The second, scores, holds groups of test scores.  The relative positions of elements within the two 
variables match (i.e., 'Joseph' is the first element in students; his scores are the first value in scores.).

Do not alter the students and scores code.

I worked on this challenge [by myself, with:]

*/

var students = ["Joseph", "Susan", "William", "Elizabeth"]

var scores = [ [80, 70, 70, 100],
               [85, 80, 90, 90],
               [75, 70, 80, 75],
               [100, 90, 95, 85] ]

// __________________________________________
// Write your code below.


// __________________________________________
// Refactored Solution
var average = function(gradesSet){
  var sum = 0
  for(var index in gradesSet){
    sum = sum + gradesSet[index];
  }
  return sum / gradesSet.length;
}



var gradebook = {
  Joseph:{testScores: scores[0]},
  Susan:{testScores: scores[1]},
  William:{testScores: scores[2]},
  Elizabeth:{testScores: scores[3]},

  addScore:function(studentName, grade){
    return gradebook[studentName].testScores.push(grade)
  },

  getAverage:function(studentName){
    return average(gradebook[studentName].testScores);
  }
}


// __________________________________________
// Reflect
// I thought that I had to come up with the name: {testScores: scores[x]} automatically. This distracted me a lot.
// Because I was working with Kevin I was able to learn how to start this challenge. Sincerely I dint feel confortable in JS 
// I need to spend a few hours on it. I think finishing App Academy and Treehouse on the topic will help me.
// I want to build something on Ruby on Rails as well so I will spend the next 2 days doing that.
// I need to understand how to nest object into objects and access to its information and iterate over them before getting into
// Devboot Camp. Im finis with week 9 but there are a lot to read and practice still.


// __________________________________________
// Driver Code:  Do not alter code below this line.


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (average instanceof Function),
  "The value of average should be a Function.\n",
  "1. "
)

assert(
  average([1, 2, 3]) === 2,
  "average should return the average of the elements in the array argument.\n",
  "2. "
)

assert(
  (gradebook instanceof Object),
  "The value of gradebook should be an Object.\n",
  "3. "
)

assert(
  (gradebook["Elizabeth"] instanceof Object),
  "gradebook's Elizabeth property should be an object.",
  "4. "
)

assert(
  (gradebook.William.testScores === scores[2]),
  "William's testScores should equal the third element in scores.",
  "5. "
)

assert(
  (gradebook.addScore instanceof Function),
  "The value of gradebook's addScore property should be a Function.",
  "6. "
)

gradebook.addScore("Susan", 80)

assert(
  (gradebook.Susan.testScores.length === 5
   && gradebook.Susan.testScores[4] === 80),
  "Susan's testScores should have a new score of 80 added to the end.",
  "7. "
)

assert(
  (gradebook.getAverage instanceof Function),
  "The value of gradebook's getAverage property should be a Function.",
  "8. "
)

assert(
  (gradebook.getAverage("Joseph") === 80),
  "gradebook's getAverage should return 80 if passed 'Jospeh'.",
  "9. "
)