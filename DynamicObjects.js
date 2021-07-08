const circle = {
    radius: 1,
    color: 'red',
    log(){
        console.log('log', this.radius);
    }
}
console.log(circle);
//add more properties in circle object:
circle.price =100;
circle.draw = function(){}

console.log(circle);

//delete properties from circle object:
delete circle.price;
delete circle.draw;
console.log(circle);

circle.log();