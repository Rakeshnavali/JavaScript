/*
the variables are the containers that can store the data.
variable declearation:
   we can decleare variables by using var,let,const keywords.
   const is a keyword use to create variable as constant variable.
     =>constant variables conn't be changable if we assign the value once.
   var is a keyword use to create variable
    =>this varable have problem with block scope.
    =>var is not prefere to use.
   let is a keyword use to create a variable.
     => letest way to decleare a variables.
 */

const num0 = 10
var num1 = 12
let num2 = 15
num3 = 20
console.log("Intial values: ")
console.table([num0,num1,num2,num3]);



/*num0 = 20;
it's trowing an error,because we cann't change the const variable values.
*/

num1 = 24;
if(num1==24){
  num1 = "changing number inside the block scope";
}else{
  num1 = "we cann't change the value inside the block scope";
}

num2 = 30;
num3 = 40;

console.table([num0,num1,num2,num3])
// console.log(num4)
// console.log(num5)
