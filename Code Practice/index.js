// 1 ==> Spread Operator

// let poorCountry = ['Bangladesh','Srilanka'];
// let richCountry = [...poorCountry,'USA','London','Canada'];

// console.log(richCountry);



// 2 ==> Without Spread Operator

// let poorCountry = ['Bangladesh','Srilanka'];
// let richCountry = ['USA','London','Canada'];

// richCountry.push(poorCountry);

// console.log(richCountry);



// 3 ==> Rest Perameter

// function calculation(a,b,...number){

//     let sum = 0;
//     for(let i of number){
//         sum = sum + i ; 
//     }
//     console.log(sum);
// }
// calculation(10,20,1,2,3,4);



// 4 ==> Dynamic Function

// var name = function(nameValue){

//         return nameValue;
// }

// console.log(name("Emon Hossain"));



// 5 ==> variable scope

// function myFun(){
//     var name = "ES6";
//     console.log(name);
// }
// myFun();



// 6 ==> variable Hoisting

// name = 'Emon Hossain';
// var name;
// console.log(name);



// 7 ==> variable Hoisting

// let Bangladesh = ['Dhaka','Sylhet','Barishal','Chottogram'];

// for (cites of Bangladesh){
//     console.log(cites);
// }



// 8 ==> Nested Object

// let billGates = {
//     fname : "Mr. Borolox" ,
//     shirt:{
//         color:"White",
//         Quality:"Good",
//         Price:"200USD"
//     },
//     swatter:{
//         color:"Black",
//         Quality:"Avarage",
//         Price:"150USD"
//     }
// }

// console.log(billGates['swatter']['Price']);



// 9 ==> For in Loop

// let billGates = {
//                 Color:"White",
//                 Quality:"Good",
//                 Price:"200USD",
//                 Smiling: "Yes",
//                 Borolox: "Jommer"
//             }
// for(let props in billGates){
//     console.log(props+" = "+billGates[props]);
// }



// 10 ==> Array Destructuring

// let Bangladesh = ['Dhaka','Sylhet','Barishal','Chottogram','Padma'];

// let [,,,,P] = Bangladesh;
// console.log(P);



// 11 ==> ES6 Map

//let myMap = new Map();

// myMap.set("Country1","Bangladesh");
// myMap.set("Country2","India");
// myMap.set("Country3","Pakistan");
// myMap.set("Country4","Srilangka");
// myMap.set("Country5","Mayanmar");

// console.log(myMap.values());

// myMap.set("Country1","Bangladesh");
// myMap.set("Country2","India");
// myMap.set("Country3","Pakistan");
// myMap.set("Country4","Srilangka");
// myMap.set("Country5","Mayanmar");

// myMap.delete("Country2")
// console.log(myMap.values());


// 12 ==> ES6 Set

// let myMap = new Set();

// myMap.add("Bangladesh");
// myMap.add("India");
// myMap.add("Pakistan");
// myMap.add("Srilangka");
// myMap.add("Mayanmar");
// myMap.add("Bangladesh");

// // console.log(myMap.size);

// if(myMap.has("Bangladesh")){
//     console.log("Yes");
// }
// else{
//     console.log("Hoga mara sara");
// }


// 13 ==> ES6 Class Object

// class MyClass {

//     Myfun(name){
//         console.log(name)
//     }
//     Myfun2(name){
//         console.log(name)
//     }
//     Myfun3(name){
//         console.log(name)
//     }
//     Myfun4(name){
//         console.log(name)
//     }
// }

// let obj = new MyClass;

// obj.Myfun('Madaripur');
// obj.Myfun2('Bandorban');
// obj.Myfun3('Sitakunda');
// obj.Myfun4('Sylhet');


// 14 ==> ES6 Class Constructor

// class MyClass {
//     constructor(a,b){
//         this.firstNum = a
//         this.secondNum = b
//     }

// add(){
//     let result =  this.firstNum + this.secondNum;
//     console.log(result);
// }
// }

// let obj = new MyClass(20,20);

// obj.add();


// 15 ==> ES6 Class Inheritance

// class parent {

//     hlw1(){
//         console.log("Hello 1");
//     }

//     hlw2(){
//         console.log("Hello 2");
//     }
// }

// class child extends parent{

//     //Change parent class properties

//     hlw2(){
//         console.log('hell yeah');
//     }
// }

// let obj = new parent();
// obj.hlw1();
// obj.hlw2();



// 15 ==> ES6 Class Inheritance Super Keyword


// class parent {

//     hlw1(){
//         console.log("Hello 1");
//     }

//     hlw2(){
//         console.log("Hello 2");
//     }
// }

// class child extends parent{

//     //Change parent class properties

//     demo(){
//         super.hlw1();
//         super.hlw2();
//     }
// }

// let obj = new child();
// obj.demo();