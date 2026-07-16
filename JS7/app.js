// this keyword - used to calling object 
// const student  =  // student is object
// {
//     name :"Aishwarys",
//     Eng : 67,  //parameter to called
//     Math :78,
//     getAvg()
//     {
//         let avg = (this.Eng + this.Math) / 3
//         console.log(`${this.name} got avg marks = ${avg}`)
//     }

// }


//try & catch : try throw the eror if it catch then it will print by catch or then try don't throw the error so try will be print the error
// console.log("hello")
// console.log("hello")

// try{
//     console.log("a")
// }
// catch{
//     console.log("hello0000")
// }
// console.log("------iuhibobo------------")


//arrow function


//set TimeOut - use for api call send request and all
// console.log("hi, there")
// setTimeout ( () => {
//     console.log("Apna college")
// }, 5000)

// console.log("welcome to")

// set interval
// setInterval( () => {
//     console.log("Apna college")
// }, 2000)
// to stop this we use "clearInterval()"


//this arrow function - in settimeout we can use it to fetch the correct th data

// const studemt = {
//     name : "aishwarya",
//     marks : 98,
//     prop : this,

// }
// const a = 5


// ps
// Q- write a arrow function that returns the square of a number 'n'
// const square = (n) => n*n
// console.log(square(4))

//write a function that prints "Hello World" 5times at interval of 2s each
let id = setInterval(()=> 
{
    console.log("Heloo")
}, 2000)

setTimeout (() => {
    console.log(id)
    console.log("clear interval")
}, 10000)