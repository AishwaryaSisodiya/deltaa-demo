// if statement

// let color = "red";
// //Traffic light
// if(color ==="red"){
//     console.log("Stop..!!! light color is red");
// }
// if(color === "yellow"){
//     console.log("Ready..!!")
// }
// if(color === "green"){
//     console,log("Go..!!")

// }


// else if statement
// let age = 24;
// if (age >= 18){
//     console.log("you can .. vote");
// }
// else if(age < 18){
//     console.log("you cannot vote");
// }

// let marks = 45;

// if (marks >= 80) {
//     console.log("A+");
// }
// else if (marks >= 60) {
//     console.log("A");
// }
// else if (marks >= 33) {
//     console.log("B");
// }
// else if (marks < 33) {
//     console.log("F");
// }

// let month = "april"

// if (month === "january") {
//     console.log("winter is here");
// }
// else if (month === "april") {
//     console.log("summer is here");
// }


// else statement 
// let age = 18
// if (age >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You cannot vote");
// }


// let color = "red"
// if (color === "red")
// {
//     console.log("stop")

// }
// else if(color === " yellow ")
// {
//     console.log("slow down")
// }
// else if (color === "green")
// {
//     console.log("go")
// }
// else{
//     console.log("traffic light is broken")
// }


// practice question 
// let size = ""
// if (size === "XL")
// {
//     console.log("Extra large is 250 rupees  ")
// }
// else if (size === "L")
// {
//     console.log("Large size is 200 rupees")
// }
// else if (size === "M")
// {
//     console.log("Medium size is 100 rupees")
// }
// else if (size === "S")
// {
//     console.log("small size is 50 rupees")
// }
// else  //else if we write condition but in else we don't write condituion
// {
//     console.log("not available")
// }


// nested if else statement
// let marks = 55
// if (marks >= 60){
//     console.log("Pass")
//     {
//         if(marks >= 80)
//         {
//             console.log("A+")
//         }
//         else{
//             console.log("A")
//         }
//     }
// }
// else {
//     console.log("Not Pass")
// }

//logical operator
//--- && (and operator)
//--- || OR
//--- ! (not operator)

// let marks = 80
// if ( marks >= 60 && marks >= 80)
// {
//     console.log("Pass")
//     console.log("A+")
// }
// else {
//     console.log("Not Pass")
// }

// ! not operator
// let marks = 23
// if (!(marks > 33 && marks <= 80) || !false)
// {
//     console.log("Pass")
//     console.log("A+")
// }

// pracctice question (print a good string having staring a and > 3)
// let str = "apple"
// if((str [0]==="a") && (str.length > 3))
// {
//     console.log("good String")
// }
// else {
//     console.log("not  good string")
// }

//PQ - 2
// [
// let num = 12;

// if ((num % 3 == 0) && ((num + 1 == 15) || (num - 1 == 11))) {
//     console.log("safe");
// } else {
//     console.log("unsafe");
// }
// ]  ------it will print safe

//turthly falsy


// if(" ")
// {
//     console.log("this is a true value")
// }
// else{
//     console.log("this is a false value")
// }


// let num = 0
// if(num){
//     console.log("not equal to 0")
// }
// else{
//     console.log("equal to 0")
// }

// switch statement
// let color = "red";
// switch(color){
//     case "red" :
//         console.log("stop")
//         break   //break after it not another color should excuted

//         case "yellow" :
//         console.log("slow down")
//         break

//         case "green" :
//         console.log("go")
//         break

//         default :
//         console.log("traffic light is broken")
// }

//     console.log("traffic light is stop ")



// used switch statement to print the day of week
// let day  = 1
// switch(day){
//     case 1 :  
//         console.log("Monday")
//         break
//         case 2 :  
//         console.log("Tuesday")
//         break

//         case 3 :  
//         console.log("Wednesday")
//         break

//         case 4 :  
//         console.log("Thursday")
//         break

//         default:
//         console.log("invalid day")
// }



// alert & prompt

// alert ("something is fisici")
// console.error("hello world")


// prompt("enter ur name :")   //just give the dialog box
//  let firstname = prompt("enter ur name :")  
//  console.log(firstname)

 let firstname = prompt("enter ur name :")
 let lastname = prompt("enter ur last name :")
 console.log("hello" , firstname, lastname)
 alert(msg)