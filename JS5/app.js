//JS Object literals
//object literals are there to store cimplex data 
// const student = {
//     name: "aishwarya",
//     age: 21,
//     marks: 50
// }  // it give the clarity in object literals

// const item = {
//     price : 100.99,
//     discount : 50,
//     color :["red" , "blue"]
// }


// // thread/ twiier post
// const post ={
//     username: "aishwarya",
//     content :"this is my #first post",
//     likes:150,
//     reposts:5,
//     tags:["@apna college" , "@delta"]

// }


// get values --- post["content"] , post.likes

// const obj = {
//     1:"a",
//     2:"b",  // 1 is not index it convert it on string then  match it print it 
//     true:"c",
//     null:"d",
//     undefined :"e"
// }


// add / update value
// const student = {
//     name : "aishwarya",
//     age: 23,
//     marks:94.4, // by marks we can update for grades also or we can udate it upto array also to marks  als o possible 
//     city:"delhi"   //student.city = "Mumbai" by using dot operator we used 
// }  //gender is not add so we can add by dot operator student.gender = "male"
// we can delete also ---- delete student.keyword


// nested object
// const classInfo = {
//     aman : {
//         grade :"A",
//         city  : "mumbai"
//     },
//     viraj : {
//          grade :"O",
//         city  : "pune"
//     } ,
//     jeetraj :
//     {
//      grade :"A",
//         city  : "mumbai"
//     }

// } 
// to search some thing ---- classInfo.aman.city

// array object 
// const classinfo = [
//     {
//         name : "aman",
//         grade: "A",
//         city: "pune"
//     },
//     {
//         name : "karan",
//         grade: "O",
//         city: "mumbai"
//     },
//     {
//         name : "riya",
//         grade: "AB",
//         city: "shirpur"
//     }
// ]


// math object like some constant value just like pi or e
// Math.abs(12)--- it give only positive number , if u enter neg then also it give u posutive
//Math.pow(2,4) -- power 2 power 4 is 15
// Math.floor ---(5.5) round of number nearest ansd shortest
//Math.ceil(n) round off but greater one 

//Random Integers
// let random = Math.random()
// Math.floor(Math.random() * 5) + 20
// in range of 20 to 25 only it willl print 


// guessing game
const max = prompt("Enter the max number") 
//console.log(max) 

const random = Math.floor(Math.random() * max ) + 1
console.log(random) 
let guess = prompt("guess the number")
while(true) {
    if(guess == "quit")
    {
        console.log("user quit")
        break
    }
    if(guess == random)
    {
        console.log("you are right!!! random number ", random)
        break
    } else if (guess < random)
    {
        guess = prompt(" hint : your guess was too small. plz try again")
    }
    else {
                guess = prompt("hint : your guess was too large. plz try again")

    }
    
    
    //else {
    //     guess = prompt("your guess was wrong !! plz try again")

    // }
}