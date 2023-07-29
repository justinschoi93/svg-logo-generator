class Shape {
    constructor() {
        this.svgString = 
`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

</svg>`; 
    }

    render() {
        return this.svgString;
    }
}

const shape = new Shape(300, 300);
// console.log(shape.render());

module.exports = Shape;