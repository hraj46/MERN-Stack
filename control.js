// if statement
let marks = 85;
if (marks > 80){
    console.log("Huraayyyy!!!");
}

// -------------------------------------------

// if-else statement
let weather = "rainy";
if(weather == "sunny"){
    console.log("Go to the park");
} else{
    console.log("Stay at home!!");
}

// -------------------------------------------

// if-else-if statement
let light = "red";
if(light == "green"){
    console.log("run!!");
} else if (light == "yellow"){
    console.log("ready for the run");
} else if (light == "red"){
    console.log("Stopp!!");
} else{
    console.log("Internal error");
}

// --------------------------------------------

// Switch statement
let option = 2;
switch(option){
    case 1:
        console.log("Music");
        break;
    case 2:
        console.log("Game");
        break;
    case 3:
        console.log("Settings");
        break;
    default:
        console.log("Invalid Option");
}

//---------------------------------------------

// for loop
for(let i=1; i<=5; i++){
    console.log(i);
}

// --------------------------------------------

// while
let count = 1;
while(count >= 5){
    console.log(count);
    count++
}

// --------------------------------------------
// do...while loop
let i = 1;
do{
    console.log("Number: ", i);
    i++
} while(i<=5);

//Write a program to print number from 1 to 10 using for loop and do...while loop
for(let j=1; j<=10; j++){
    console.log(j);
}

let k = 1;
do{
    console.log("num: ", k);
    k++
} while(k<=10);

// --------------------------------------------------------------------------------------
// Jumping Statements (Break Continue)
// Break: Stops the loop immediatly when a condition is met.
for (let i=1; i<=10; i++){
    if(i===5){
        break;
    }
    console.log(i);
}

// Continue: Skip the current iteration and continue the loop
for (let i=1; i<=5; i++){
    if(i===3){
        continue;
    }
    console.log(i); // Prints only 1,2,4,5 because the current iteration value is 3.
}

// if it's sunday, don't study. if not sunday study 3 subjects.
let day = "Monday";
if(day == "Sunday"){
    console.log("dont study");
}
else{
    for(let i=1; i<=3; i++){
        console.log("\n study subject ",i);
    }
}

// ----------------------------------------------------------------------------------------------------

// Syntax
function greet(name) {
    console.log("Hello " + name);
}
greet("Himanshu")
greet("Naman")

// Add two numbers
function sum(a, b){
    console.log(a+b);
}
sum(5, 3)

//By using function print numbers from 1 to 5
function Numbe(n){
    if(n == 6){
        return;
    }
    console.log(n);
    n++;
    Numbe(n);

}
Numbe(1);

//--------------------------------------------------------------------------------------------
function ab(){
    console.log(a);
//    let a = 10;  //Cannot access 'a' before initialization
    var a = 10; //Undefined
}
ab();
//In the both cases regarding 'let' and 'var' the outputs are differents due to the term hoisting 
//Hoisting is the process of declearing the function and variable and move it to the top of their respective scopes.
// -------------------------------------------------------------------------------------------------

var a = 1;
function b(){
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);

// ------------------------------------------------------------------------------------------------
// Scope: Where variable can be accessed or used in your code - inside or outside a function or block
let college = "LPU";
function myClass(){
    let subject = "MERN";
    console.log("College: ", college);
    console.log("Subject: ", subject);
}
myClass();

// Block Scope
{
    let pencil = "Apsara";
    console.log(pencil);
}
//console.log(pencil)

// ----------------------------------------------------------------------------------------------------------------------------
// Closures: When a function remembers the veriable from its outer function even after outer function has finished executing.

function outer(){
    let name = "Himanshu";

    function inner(){
        console.log("Hello: ", name);
    }
    return inner;
}
outer();

let greetFunc = outer();
greetFunc();

// -------------------------------------------------

function createCounter(){
    let count = 0;
    return function(){
        count++;
        console.log("Current count: ", count);
    }
}
let counter = createCounter();
counter();
counter();

//----------------------------------------------------------//
                // SIMPLE CALCULATOR //
//----------------------------------------------------------//
let d=10;
let c=5;
for(let i=1;i<=4;i++){
    if(i==1){
        console.log("addition ", (d+c));
    }
    else if(i==2){
        console.log("Substration ", (d-c));
    }
    else if(i==3){
        console.log("multiply", d*c);
    }
    else {
        console.log("Divison", d/c);
    }
}