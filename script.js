// var listOfAnimals = ["tiger", "cat", "bear", "bird"];

// console.log(listOfAnimals[0]);

// var number = [1,2,3,4];

//not really adviced like this due to performance issues
// var mixedList = ["apples", 3 , undefined, true, function apple(){
//     console.log("apple dey here")}];
// undefined

//array of arrays
// var names=[
// 	["David", "Favour", "Delight"]
// 	];

// console.log[list[0]];
// console.log[list];
// console.log[list];
// console.log(names[0][2]);

//calling this method


// var names = ["David", "Favour", "Delight"];

// names.shift();
// names.pop();
// names.push("djonesplays");
// names.concat(["djonesplaysssYt","oyo"]);

//0 1 2 3 4....etc are called indexes
// names.sort();

// var myNewNames  = names.concat(["Okiee","lobster"]);

//Exercise 👇🏽👇🏽
// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.

// 2. Sort the array in order.

// 3. Put "Kiwi" at the end of the array.

// 4. Remove "Apples" from the array.

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

// using this array, 
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
array.shift();

// 2. Sort the array in order. 
array.sort();

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");

// 4. Remove "Apples" from the array.
array.splice(0, 1);

// 5. Sort the array in reverse order. 
array.reverse();

// using this array, 
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
array2[1][1][0];

