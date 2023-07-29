const Shape = require('./shape');

// console.log(Shape.shape);


class Circle extends Shape{
    constructor(shapeColor, letters, letterColor){
        super();

        this.shapeColor = shapeColor;
        this.shape = 'circle';
        this.letterColor = letterColor;
        this.svgString = 
        
        `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="55" fill="${this.shapeColor}" />
            <text x="150" y="110" font-size="40" text-anchor="middle" fill="${this.letterColor}">${letters}</text>
        </svg>`

    }
}

const circle = new Circle('white','ABC', 'green');
console.log(circle);