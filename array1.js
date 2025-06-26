// // var a = "Himanshu", 9, "Aman"
// let a = ["Himanshu", 9, "Aman"]

// // Traversal of Array (Negivate within the array)
// var myFriends = ["Naman", "Nayyum", "Ashish", "Hemant"]
// // console.log(myFriends[2]);
// // console.log(myFriends.length);

// // Searching
// // indexOf // lastIndexOf // includes
// var myFriends = ["Akash", "Kamal", "Krishna", "Anirudh", "Kamal"]
// // console.log(myFriends.indexOf("Kamal"));
// // console.log(myFriends.indexOf("Kamal", 2));
// // console.log(myFriends.lastIndexOf("Anirudh"));
// // console.log(myFriends.lastIndexOf("Krishna"));
// // console.log(myFriends.includes("Akash"));


// // Sorting
// let months = ["March", "Jan", "Feb", "April", "Dec", "Nov"]
// //console.log(months.sort());

// let arr = [5, 7, 1, 3, 9, 12, 51, 1000, 44]
// //console.log(arr.sort());

// // CRUD (Create Read Update Delete)

// //! Object
// let student = {
//     name: "Manoj Bharti",
//     age: 21,
//     class: "Btech"
// }
// // console.log(student);
// // console.log(student.name);
// // console.log(Object.keys(student));

// //! Destructuring
// // Array Destructuring
// const myBioData = ["Navi", 25, "Teacher"]
// let [myName, myAge, myProffesion] = myBioData;
// //console.log(myAge);

// // Object Destructuring
// const myData = {
//     myName1: "Navii",
//     myAge1: 25,
//     myProffesion1: "Teacher"
// }
// let [myName1, myAge1, myProffesion1] = myData;
// console.log(myAge1);

// // Arrow Functions (It is a way of writing a function in sorter and cleaner way) (Symbol: =>)
// // Traditional way
// //function add(a, b){
// //    console.log(a+b);
// //}
// // Arrow way
// //const add = (a, b) => {
// //    console.log(a+b);
// //}

// // Arrow function to print the table of 2
// const printTableOfTwo = () => {
//   console.log("Table of 2:");
//   for (let i = 1; i <= 10; i++) {
//     console.log(`2 x ${i} = ${2 * i}`);
//   }
// };
// printTableOfTwo();

// Promises: It is a object who tells us whether the task requirements is full filed or not.
// let Promise = new Promise((resolve, reject) => {
//     if(success){
//         console.log("Success!!");
//     } else{
//         reject("Error!!");
//     }
// }) 
// promise.then(response => {
//     console.log(response);
// }).catch(error => {
//     console.log(error);
// })

// ---------------------------------------------------------------------------------------------------------

// Pending
// Fullfilled
// Rejected

// ---------------------------------------------------------------------------------------------------------

// let playMovie = new Promise((resolve, reject) => {
//     let internetWorking = true;

//     if(internetWorking){
//         resolve("Movie is playing!!");
//     } else{
//         reject("No internet connection");
//     }
// })
// playMovie
//     .then(msg => {
//         console.log(msg);
//     }).catch(err => {
//         console.log(err);
//     })

//! Async/Await
// Synchronous is a way of executing the code line by-line
async function fetchData(){
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();
        console.log(data);

    } catch(error){
        console.error(error);
    }
}
fetchData();

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => {
//     console.log(data[0].name);
// })
// .catch(error => {
//     console.log("Something went wrong", error);
// })

//! -------------------------------------------------------------------------------------------------------

// Working with JSON : JS Object Notation
const studennt = {
    name: "Himanshu Raj",
    age: "21"
}
//Convert object to JSON
const jsonString = JSON.stringify(studennt);
console.log(jsonString);

// JSON to Object
const jsObject = JSON.parse(jsonString);
console.log(jsonString);