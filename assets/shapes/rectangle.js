const Shape = require('./shape');

class Rectangle extends Shape{
    constructor(shapeColor){
        super()
        this.shape = 'rectangle';
        this.polygonPoints = ''
        this.svgString = `<svg ${polygonPoints} ${shapeColor}></svg>`;

    }
    
    //will inherit render();
    //console.log(this.render());
}

class Triangle extends Shape{
    constructor(shapeColor){
        super()
        this.shape = 'triangle';
        this.polygonPoints = ''
        this.svgString = `<svg ${polygonPoints} ${shapeColor}></svg>`;

    }
    
    //will inherit render();
    //console.log(this.render());
}