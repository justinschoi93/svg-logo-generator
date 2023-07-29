const Shape = require('./shape.js');

class Triangle extends Shape{
    constructor(shapeColor, letters, letterColor){
        super();

        this.shapeColor = shapeColor;
        this.letters = letters;
        this.letterColor = letterColor;
        this.shape = 'triangle';
        this.svgString = 
`
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,0 300,200 0,200" fill="${this.shapeColor}"/>
    <text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.letterColor}">${this.letters}</text>
</svg>
`
    }
}

const triangle = new Triangle('white', 'ABC', 'purple');
// console.log(triangle.render());

module.exports = Triangle;