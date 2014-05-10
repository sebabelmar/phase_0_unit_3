var validation_messages = {
  "keY_1":{"prop1": "jimmy","prop2": "hello world"},
  "key_2":{"prop1": "billy","prop2": "foo equals  bar"},
}

// for(var key in validation_messages){
//   var keys = validation_messages[key];
//   for(var prop in keys){
//     if(keys.hasOwnProperty(prop)){
//       var inside_prop = keys[prop]
//       console.log(key +" "+ prop +" "+ inside_prop);
//     }
//   }
// }

for(var key in validation_messages){
      console.log(key);
      var keys = validation_messages[key];
      console.log(key keys);
    }

//*
// The hasOwnProperty() method returns a boolean indicating whether the object has 
// the specified property.
// Every object descended from Object inherits the hasOwnProperty method. 
// This method can be used to determine whether an object has the specified property 
// as a direct property of that object; unlike the in operator, this method does not 
// check down the object's prototype chain.