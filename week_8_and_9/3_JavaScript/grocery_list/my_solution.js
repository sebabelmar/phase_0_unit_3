// U3.W8-9: 


// I worked on this challenge Eoin

// 2. Pseudocode

// DEFINE var ShoppingList that will hold functions inside.
//  DEFINE var list as an empty array
//  DEFINE  fuctions add, display, remove
// TEST



// 3. Initial Solution

// var shoppingList = new function() {
//   var list = [];
//   this.addItem = function(item) {
//    list.push(item);
//   }

//   this.displayList = function(){
//    console.log("Your Shopping List:");
//    console.log(list);
//   }

//   this.removeItem = function(item){
//    for(var i = 0; i <= list.length; i++){
//      if(item === list[i]){
//        delete list[i];
//      }
//    }
//   }  

//  }


// 4. Refactored Solution


var shoppingList = new function() {
  var list = [];

  this.addItem = function(item) {
    list.push(item);
  }

  this.displayList = function(){
    console.log("Your list!: ")
    console.log(list);
  }

  this.removeItem = function(item){
    for(var i = 0; i <= list.length; i++){
      if(item === list[i]){
        list.splice(i,1);
      }
    }
  } 


 }
shoppingList.addItem("apple")
shoppingList.addItem("banana")
shoppingList.addItem("cherry")
shoppingList.addItem("cheese")
shoppingList.displayList()
shoppingList.removeItem("banana")
shoppingList.displayList()

// 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

// We try driving test and even with help of one of our tutors was "impossible"
// we left the program printing something 'fun'
// shoppingList.addItem("apple")
// console.log(list === ["apple"])
// shoppingList.addItem("banana")
// shoppingList.addItem("cherry")
// shoppingList.addItem("cheese")
// console.log(shoppingList.displayList() === [ 'apple', 'banana', 'cherry', 'cheese' ])
// shoppingList.removeItem("banana")
// console.log(shoppingList.displayList() === [ 'apple', 'cherry', 'cheese' ])


// 5. Reflection 

// I didn’t have time to go through the JS tutorial during the prep work, I did some
// during week 2, and now I had to do it.
// JS was causing me more problems than I thought.
// I met with Eoin and we finally find the way to make this work similar as Ruby.
// Definitely I need to spend more time on JS and JQuery.
// I have no Idea how to an interactive shopping List out of this code.
// So I think that's coming next.
// On this challenge I learned about JS functions and a lot a bout how to deal with
// array in this language. I have faith in JS :)







