console.log('check console');

// variable in js
// var,const,let;
var name="rohit";
var marks="94";
var numbers=94;
var subject=`maths`;
console.log(name,marks,numbers,subject);
//Rules for creating javascript variables(Nameing rules of javascript variables):-
/*
1. variable name can not start with numbers.
2. can start with letters, $, _ and numbers also used but not start it.  
3. case sansative.
*/
var name1="rohit" // 'name1' is a valide variable name.
console.log(name1) // show the value of variable.

//'let' and 'const'
const Name="Rohit"; //when define a variable with fixd value, so use it.
//Name="hari"       //"Name" is const variable that's why value is not change.
console.log(Name);
{
    let name="bhargava"  //block leve(local variable)
    name="mohan";
    console.log(name);
}
name="shoan";
console.log(name);
let lastName="pandit"    //golble variable
{
 lastName="brahamman" 
    console.log(lastName);
}
// "var" is old keyword and "let" is new. 
