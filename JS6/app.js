// function in js whichc is importtant to call and run the program 
// function funcName()
//    {
//          // do something 
//     }

//     function Calling (using the function)
//     funName()

// function hello()
// {
//     console.log("hello")
// }

// hello()
// hello()
// hello()
// hello()

// function printName ()
// {
//     console.log("print")
//      console.log("print")
//       console.log("print")
//        console.log("print")
// }
// printName ()


// function print1to5()
// {
//     for(let i = 1; i<=5; i++)
//         console.log(i)
// }
// print1to5()



//vote for adult
// function  isAdult()
// {
//     let age = 20
// if(age >= 18){
//     console.log("is Adult in age")
// }else {
//     console.log("Not Adult in age")
// }
// }
// isAdult()




// Practice question
// function printpoem()
// {
//     console.log("good better best")
//     console.log("Never let it best")
// }
// printpoem()


// Practice question

//    let random =  Math.floor(Math.random() * 6) +1
//     console.log(random)
// create  this whole code in function 

// function rolldice()
// {
//     let random = Math.floor(Math.random() * 6) + 1
//     console.log(random)
// }
// rolldice()
// rolldice()
// rolldice()
// rolldice()
// rolldice()
// rolldice()



// function with arguments
//  function funName(arg1 ,arg2)
// function printInfo(name , age)
// {
//     console.log(`${name}'s age is ${age}`)
// }
// printInfo("shradha", 23)
// printInfo("aishwarya",23)


// function sum(a,b)
// {
//     console.log(a+b)

// }
// sum(5,7)
// sum(6,3)

// practice question 3
// create a function gives us average of 3 numbers
// function average(a,b,c)
// {
//     console.log((a+b+c)/3)
// }
// average(1,2,3)

//QS 4
//create a function that prints the multiplication table of a Number
// function table(n)
// {
//   for(let i = n; i <=n*10; i+=n)
//   {
//     console.log(i)
//   }
// }
// table(5)


// return 
// after return statement there will be nothing to print 
// function Adult(age)
// {
//     if(age>=18)
//     {
//         return("adult")
//     }
//     else{
//         return "not adult"
//     }
//     console.log("Print")
// }
//Adult(18)

//PQ
//create a function that return the sum of numbers from 1 to n
// function getSum(n)
// {
//     let sum = 0
//     for(let i = 1; i<=n; i++)
//     {
//         sum += i
//     }
//     return sum
// }

// ti run this  type getSum(3) -- 6



// Ps
//creat  afunction that returns the conctenations of all strings in an Array
// let str = ["hii", "hello" , "jeetraj", "sisodiya"]
// function concat(str)

// {
//     let result = ""
// for (let i=0; i<str.length; i++)
// {
//     result += str[i]
// }
// return result
// }


// to print -- str, concat ..

// Scope
// it detrmine the accessibility of variables , objects and functions form diffrent parts of the code 
//there are three types of scope are 1] function , 2] block 3] lexical

//functon scope- it defines inside are not visible from outside the function
// let sum = 54 // globals scope
// function calsum(a,b)
// {
//     let sum = a+b // function scope
//     console.log(sum)
    
// }

//calsum(4,8)
//console.log(sum) not this will print 


// block scope
//in block variables are declared inside the block we can accessed them only in isde not outside the block
// {
//     let a = 9
// } 
 // ❌console.log(a) 


 // lexical scope
// function outerFunc()
// {
//     let x = 5
//     let y = 6
//     function innerFunc()
//     {
//         console.log(x)
//          console.log(y)
//     }
//     innerFunc()
// }

//to print outerfunc - 5,6 will print
//ps 7




//function expressions
// let name = "aishwarya"
// let sum = function(a,b)
// {
//     return a+b
// }
//we can call function by its variable name also  -- sum(1,2) - 3


// let hello = function()
// {
//     console.log("helloooo")
// }

// hello  = function()
// {
//     console.log("namaste")
// }


//higher order functions
// that howw many times we call that function
// function multipleGreet(func, count){
//     for(let i =1; i<=count; i++)
//     {
//         func()
//     }
// }
// let greet = function()
// {
//     console.log("hello")
// }
// multipleGreet(greet, 2000)



// higer order functons (returns) takes multiple arguments 
// let odd = function(n)
// {
//     console.log(!(n%2 == 0))
// }


// let even  = function(n)
// {
//     console.log(n%2 == 0)
// }


// function oddOrEvenFactory(request) {
//   if (request == "odd") {
//     let odd = function(n) {
//       console.log(!(n % 2 == 0));
//     };
//     return odd;
//   } else if (request == "even") {
//     let even = function(n) {
//       console.log(n % 2 == 0);
//     };
//     return even;
//   } else {
//     console.log("wrong request");
//   }
// }

// let request = "even"; // even


// Methods
const calculator = {

    num : 55,
    add : function(a,b){
        return a+b
    },
    sub : function(a,b){
        return a-b
    },
    mult : function(a,b){
        return a*b
    }
}