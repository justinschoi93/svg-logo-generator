class Shape {
    constructor() {
        this.svgString = 
        `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        </svg>`; 
    }

    render(this.svgString) {
        return this.svgString;
    }
}

class Circle extends Shape{
    constructor(shapeColor){
        super()
        this.shape = 'circle';
        this.polygonPoints = '<circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>'
        this.svgString = `<svg ${polygonPoints} ${shapeColor}></svg>`;

    }
    
    
}

class Rectangle extends Shape{
    constructor(shapeColor){
        super()
        this.shape = 'rectangle';
        this.polygonPoints = 'width="200" height="200" viewBox="0 0 100 100"'
        this.svgString = `<svg ${polygonPoints} ${shapeColor}></svg>`;

    }
    
}

class Triangle extends Shape{
    constructor(shapeColor){
        super()
        
        this.shape = 'triangle';
        this.shapeColor = shapeColor;
        this.polygonPoints = 'polygon points="200,10 250,190 160,210"'
        this.svgString = 
`<svg height="250" width="500">
    <${this.polygonPoints} fill=${this.shapeColor} />
</svg>`;

    }
    
}
<rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>


