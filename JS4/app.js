// //  for loops
// // for (initialization; condition; updations /increment/decrement)\
//  for(let i = 1 ; i<5; i++)
//  {
//     console.log(i);
//  }

//  for(let i = 5; i>=1; i--){
//     console.log(i);
//  }
// let i = 5
//  console.log(i)

// // print odd numbers 1 to 15
// console.log("forward")
// for(let i = 1; i<=15; i=i+2){
//     console.log(i)
// }


// console.log("backward")
// for (let i = 15 ; i>= 1; i =i-2)
//     {
//     console.log(i)
// }

// // print all even number 2 to 20
// console.log("even number")

// for (let i = 2; i <= 200; i= i+2){
//     console.log(i)
// }
// console.log("backward")
// for(let i = 20 ; i >=-10; i = i-2){
//     console.log(i)
// }

// // for (let i = 1; ; i++){
// //     console.log(i)
// // }  ----infinite loop

// //multiplication for 5
// for(let i = 5 ; i<= 50 ; i = i+5){
//     console.log(i)
// }

// // basic questions 
// let n = prompt("write what table u want")
// n = parseInt()
// for(let i = n ; i<= n*10; i = i+n){
//     console.log(i)
// } // to creta a table a basic weblication


// // // nested loop 
// for(let i = 1; i <=4; i++)
// { 
//     console.log(`outer loop ${i}`)
//     for(let i = 1; i <=3; i++)
// {
//     console.log(i)
// }
// }


// while loop is used in conditions 
// let i = 1;
// while(i<= 20 )
// {
//     console.log(i)
//     i++
// }


// let i = 2;
// while(i<= 20 )
// {
//     console.log(i)
//     i = i+ 2
// }


// favourite movies
// const favMovie = "avatar"

// let guess = prompt("guess my fav movies")

// while((guess != favMovie) )
//         if(guess == "quit"){
//             console.log("you quit")
//             break;
//         }
   
//     guess = prompt("wrong guess my fav movies . please try again")
   
//    if(guess == favMovie)
//    {
//     console.log("Congrats")
//    }
//    else {
//     console.log("you quit")
//    }


   // break keyword
//    let i = 1 
//    while(i<= 5) {
//     if (i == 4)
//     {
//         break
//     }
//     console.log(i)
//     i++

//    }
//    console.log("we used break")



//loops in array
// let fruits = ["apple" , "banana" , "kiwi", "orange" , "fig"]

// for(let i = 1; i<fruits.length ; i++)
// {
//     console.log(i , fruits[i])
// }

// let fruits = ["apple" , "banana" , "kiwi", "orange" , "fig"]

// for(let i = fruits.length-1; i>=0 ; i--)
//  {
//      console.log(i , fruits[i])
//  }


// loops with nested array 

// let heroes = [ [ "ironman" , "spiderman" , "thor"] , ["superman", "wonder woman" , "flash"] ]
// for (let i=0; i<heroes.length; i++ )
// {
//     console.log(i, heroes[i])  // outer arary
//     for(let j = 0; j<heroes[i].length; j++)
//     {
//         console.log(`j=${j} , ${heroes[i][j]}`) // print for inner array
//     }
// }



// let students = [["riya" , 100] , ["aman", 39] , ["raj" , 78] , ["jeet" , 70]]
// for(let i = 0; i<students.length ; i++){
//     console.log(`info of student #${i}`)
//     for (let j = 0 ; j<students[i].length ; j++)
//     {
//         console.log(students[i][j])
//     }
// }


//for of loop
// for(element of collecction ){
//     // do something
// }

// let fruits = ["mango"  ,"apple", "kiwi" , "orange", "pineapple"]
// for(fruit of fruits)
// {
//     console.log(fruit)
// }
// for(char of "apna college")
// {
//     console.log(char)
// }

// // nested for of loop
// let hero = [ [ "ironman" , "spiderman" , "thor"] , ["superman", "wonder woman" , "flash"] ]
// for (list of hero){
//     for(hero of list){
//         console.log(hero)
//     }
// }


// to do array
let todo = []
let req = prompt("please enter ur request")
 //console.log(req)
while(true) // to use this while loop it use infitely only when it will stop if we quit this app 
{
    if(req == "quit")
    {
        console.log("quitting this app")
        break;
    }

    if(req == "list")
    {
        console.log("---------------")
        for(let i=0; i<todo.length; i++)
        {
            console.log(i, todo[i])
        }
        console.log("---------------")


    } else if (req == "add") {
        let task = prompt("please enter the task u want to add")
        todo.push(task)
        console.log("task added")
    } else if(req == "delete")
    {
        let index = prompt("please enter the task index")
        todo.splice(index, 1 )
        console.log("task deleted")
    } else 
    {
        console.log("wrong request")
    }
    req = prompt("please enter ur request") 
    
    
}
