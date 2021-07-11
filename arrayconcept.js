const num = [3, 4];
console.log(num.length);
console.log(num[0]);

//add an element at end of the array:

num.push(5,6);
console.log(num);

//add an element at middle of the array:
num.splice(2,3,'a','b');
console.log(num);

//add an element at beginning of the array:
num.unshift(1,2);
console.log(num);

//how to print all the values from an array:
for(const key in num){
    console.log(num[key]);
}

console.log('--------');

//find element in array: (primitive):
const s = [1,2,3,1,4];
console.log(s.indexOf(1));
console.log(s.indexOf(5));
console.log(s.includes(3));


//find element in array: (ref type):
//Array can have Objects..

const courses = [

    {id: 1, name: 'a'},
    {id: 2, name: 'b'},

];

//console.log(courses.includes({id: 1, name: 'a'}));

const c3 = courses.find(courses => courses.name === 'a');

const c1 = courses.find(function(courses){
    return courses.name === 'a';
});

console.log(c1);

const c2 = courses.findIndex(function(courses){
    return courses.name === 'a';
});

console.log(c2);
console.log(c3);