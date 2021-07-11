const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
}

//1 for in loop

// const another = {};
// for(key in circle)
// another[key] = circle[key];
// console.log(another);


//2. using Object.assign method:
// const another = Object.assign({}, circle);
// const another1 = Object.assign({
//     color: 'red'}, circle);
//     console.log(another1);
//     another1.draw();

//3. using spread .... Operator:
const another = {...circle};
console.log(another);
another.draw();

