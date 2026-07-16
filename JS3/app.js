// let msg = "Hello";
//msg.trim()
// let password = prompt("see your password")
// console.log(password.trim())
// console.log(password);
// javascript string is immutable because ...that in main string does change anything if change occur it consider that only new change only 


// let name = "Apna college"
// let msg = "error"
// console.log(msg.toUpperCase())


//name.toUpperCase()
//name.toLowerCase()


// string Methods with Arguments
// let msg = "ILOVECODING"
// msg.indexOf("CODING") // 5 or it will give  -1


// method chaining
// let msg = "     hello      "
// let newMsg = msg.trim();
// console.log(" after trim = " ,  newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("final output after trim = " , newMsg);


// let msg = "     hello      "
// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);  // trim + uppercase both work on same line 

// slice method
//  let msg  = "hello"
//  console.log(msg.slice(0,4))  //hell
// console.log(msg.slice(-1)) // 5-1= 4 --- o


//replace method ---- replace the word from previous one
//let msg = "ILOVECODING"  -- first occurence will change only 
// msg.replace("V", "o"); 
//ILOoECODING

//repeat method
//  let msg = "Ilovecoding"
//  msg.repeat(5) // IlovecodingIlovecodingIlovecodingIlovecodingIlovecoding




// practice question 
//let msg  = "    help!";
// trim it convert it upto uppercase
// let msg  = "    help!   ";
// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg)
// console.log(msg.trim().toUpperCase())  // method chaining


// let name = "Apna College"
// let newName = name.slice(4,9)
// console.log(newName)

// name.indexOf("na")  2
//name.replace("Apna", "Our") // Our College

//array structure (DS) js [Linear collection of things ]
// let student1 = "aman"
// let student2 = "shraddha"
// let student3 = "rajat"

// let students = ["aman" , "shraddha" , "rajat"]
// students[0] // aman
// students.length // 3


//array methods 
// 1] push - add to end 
// 2]pop - delete from end to return
// 3]unshift - add to start
// 4] shift - delete from start to return 

// let car =  ["maruti" , "honda" , "tata"]
// car.push("audi") // add to end
// console.log(car) // ["maruti" , "honda" , "tata" , "audi"]


//Practice question 
// let start = ["jan", "july" , "mar", "august"]
// let final = ["july" , "june" , "march" , "aug"] 
// by using shift and unshift



// index and includes methods 
// let cars = ["maruti" , "honda" , "tata" , "audi", "bmw"]
// cars.indexOf("honda") // index give the element present 1 or if does not exist then -1
// cars.includes("honda") // include  give in true false conifrmation whether it belong or not 


// concatenation of array 
//which is to join the string in two or more way with the help of + , [,] 
// let primary = ["red", "yellow", "green"]
// let secondary = ["orange", "purple", "pink"]
// // primary.concat(secondary) // ["red", "yellow", "green", "orange", "purple", "pink"]
// concat : merge 2 Array
// reverse : reverse the array
// allcolors.reverse() // ["pink", "purple", "orange", "green", "yellow", "red"]



// slice index - copies a portion of an array
// let co = ["red", "yellow", "green", "orange", "purple", "pink"]
// co.slice()
// co.slice(0,3) // ["red", "yellow", "green"]



//splice method - add or remove or replaces element from array
// let co = ["red", "yellow", "green", "orange", "purple", "pink"]
// co.splice(0,2) // remove 2 element from index 0


// sort array = sort them in any way
// only string and chartcter are sort


// practice question
// let lang = ["c" , "c++", "python", "java"]
//lang.reverse().indexOf("java") // 0

// array refernces 
// constatnt array 

// practice question 
// tic tac toe' game 
