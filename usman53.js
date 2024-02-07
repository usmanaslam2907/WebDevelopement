console.log("I am Java");


let names="Usman";
let name1="Zeeshan";
let name2="Nisar";
let name3="Rafey";
// this is so difficult to write again so make functions
// console.log(names + " is a good boy");
// console.log(name1 +" is a good boy");
// console.log(name2 +" is a good boy");
// console.log(name3 +" is a good boy");

// we make function

function greet(name ,greettext="Greetings from java")
{
    console.log(greettext);
    console.log(name +" is a good boy");
}
function sum(a,b,c)
{
   let wapis=a+b+c;
   return wapis;
}
let greettext="Hi Good Morning";
greet(name1,greettext);
greet(name2,greettext);
greet(name3,greettext);
greet(names);

let print=sum(2,4,2)
console.log(print);

