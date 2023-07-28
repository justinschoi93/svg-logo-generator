const Shape = require('./shape');


class Circle {
    constructor(shapeColor){
        super(width, height);

        this.shapeColor = shapeColor;
        this.shape = 'circle';
        this.svgString = `<svg width="${width}" height="${height}" fill="${this.shapeColor}"><${this.shape}></svg>`

    }
}