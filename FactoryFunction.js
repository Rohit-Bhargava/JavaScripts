// factory function : it produces objects

function createCericle(radius){

    return {                        // we can also use 'const circle' instence of return
        radius,
        draw(){
            console.log('draw');

        }
    }
}

const c1 = createCericle(1);
console.log(c1);
c1.draw();

const c2 = createCericle(5);
console.log(c2);

console.log('---constructor Function---');

// Cunstruor Funion: also used to create objects
// Name: pascal notation: OneTowThreeFour

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw', radius);

    }
}

//how to call constructor function: use new keyword
const a = new Circle(1);
console.log(a);
console.log(a.radius);
a.draw();

