//Enumearating properties of an object:
//get all the properties of an object:

const circle = {
    radius : 1,
    draw(){
        console.log('draw');
    }
};

//1. for- in loop:
for(let key in circle){
    console.log(key, circle[key]);
}
console.log('-----for of loop-------');

//2. for- of loop 
for (let key of Object.keys(circle))
console.log(key);

console.log('-----entry insted of key-------');

for (let entry of Object.entries(circle))
console.log(entry);

console.log('-----in operator-------');

//3. in operator:
//check a property in an object:

if('radius' in circle){
    console.log('Yes');
}

if('price' in circle){
    console.log('Yes');
}

if('draw' in circle){
    console.log('Yes');
}
