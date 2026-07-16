//array Method
//1] forEach - 
// let arr = [
//     {
//         name : "aishwarya",
//         marks: 89,
//         city : "shirpur"
//     },
//    {
//         name : "jeetraj",
//         marks: 78,
//         city : "pune"
//     },
//     {
//         name : "riya",
//         marks: 47,
//         city : "karvand"
//     }
// ]

// let gps = arr.map((el) => {
//     return marks / 10
// })

// arr.forEach((student) => {
//     console.log(student.city)
// })


// map function
// let num =[1,2,3,4,5]
// let double = num.map(() => {})


//filter function
let nums = [1,2,3,4,5,6,7,8,9,10]
let ans = nums.filter((el) => {
    return el % 2 != 0
})