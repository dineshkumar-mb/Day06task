
"Convert the UML diagram to Javascript class( CIRCLE CLASS)"


     class Circle{
 constructor(radius=1.0,color="red"){
     this.radius = radius;
     this.color = color;
 }
 toString(radius=this.radius){
     this.radius = radius;
     return `after converting to string ${(this.radius).toString()+(this.color).toString()}`
 }

 circle(){
     return `color is ${this.color} and radius is ${this.radius}`;
 }
 circle(radius){
     this.radius=radius;
     return `radius is ${this.radius}`;
 }
 circle(radius,color){
     this.radius=radius;
     this.color=color;
     return `the radius is ${this.radius} and color is ${this.color}`;
 }
 setRadius(radius=1.0){
     this.radius=radius;
 }
 getRadius(){
     return `the radius by get and set is ${this.radius}`;
 }
 setColor(color="red"){
     this.color=color;
 }
 getColor(){
     return `the color by get and set is ${this.color}`;
 }

 getArea(){
     return `the area is ${(this.radius)*(this.radius)*4}`;
 }
 getCircumference(){
     return `the circumference is ${(this.radius)*2*(Math.PI)}`;
 }
}
let bangle = new Circle(6,"black");

console.log(bangle);

console.log(bangle.circle()); //undefined since the medthod1 is overrided by method2 and by method3
console.log(bangle.circle(5)); //radius is 5 and color is undefined because method2 is overrided by method 3
console.log(bangle.circle(4,"white")); //radius is 5 and color is white executes with no issues.


bangle.setRadius();
console.log(bangle.getRadius()); //set radius to default to 1.0 and accessed by getRadius() method.
bangle.setColor();
console.log(bangle.getColor()); //set color to default red and accessed by getColor() method.

console.log(bangle.toString(6));

console.log(bangle.getArea()); 
console.log(bangle.getCircumference());




    //console//
//     Circle { radius: 6, color: 'black' }
// the radius is undefined and color is undefined
// the radius is 5 and color is undefined
// the radius is 4 and color is white
// the radius by get and set is 1
// the color by get and set is red
// after converting to string 6red
// the area is 144
// the circumference is 37.69911184307752