const Shape = require('./shape.js');

class Rectangle extends Shape{
    constructor(shapeColor, letters, letterColor){
        super();

        this.shapeColor = shapeColor;
        this.letters = letters;
        this.letterColors = letterColor;
        this.shape = 'rectangle';
        this.svgString = 
`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${this.shapeColor}"/>
    <text x="100" y="110" font-size="40" text-anchor="middle" fill="${this.letterColor}">${letters}</text>
</svg>`

    }
}

const rectangle = new Rectangle('red', 'ABC', 'white');
// console.log(rectangle.render());

module.exports = Rectangle;