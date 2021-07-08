for(let i=0; i<10; i++){
    if(i % 2 === 0){
    console.log(i);
    }else{
        console.log('odd')
    }
}

console.log('-----00------')

//while loop
let i  = 1;
while(i<10){
    console.log(i)
    i++;
}

console.log('-----11---------')


// Do -while: it will execute at least once

let p = 1;
do{
    console.log(p);
    p++;
}
while(p<=10);
console.log('-----22-------')  

// for in loop
// for object

const persons = {
    name :'Naveen',
    age : 25
};
for(let key in persons)
console.log(key, persons[key]);

// for Array:

const color = ['red', 'green', 'blue'];
for(let index in color){
console.log(index, color[index]);}

// for-of:
// is used to get the values from Array:
for(let i of color){
console.log(i);
}

console.log('------33------')

let k = 0;
while(k<=10){
    if(k === 5){
        console.log(k);
        break;
        k++;
    }
}