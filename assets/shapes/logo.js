const Circle = require('./circle');
const Rectangle = require('./rectangle');
const Triangle = require('./triangle');


class Logo extends Circle{
    constructor(text, textColor){
        super(shape, shapeColor)
        this.shapeColor 
        this.text = text.toUpperCase();
        this.textColor = textColor;
        this.svgString = 

`<svg ${this.polygonPoints} fill=${shapeColor}>
    <text fill=${this.textColor}>${this.text}
    </text>
</svg>`;

        return svgString;
    
}

}

const newCircleLogo = Logo
// As of now, I would need to create 3 seperate Logo classes, extending to the 3 different shapes. 
//Is there a different approach I could take, that would allow me to write 1 logo class, that would extend 