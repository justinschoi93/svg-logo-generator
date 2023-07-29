//Dependencies

const Shape = require('../assets/shapes/shape.js');
const Circle = require('../assets/shapes/circle.js')
const Square = require('../assets/shapes/square.js');
const Triangle = require('../assets/shapes/triangle.js');

//Test case for the Shape constructor

describe('Shape', () => {
    describe('render', () => {
        test('it should return code for an SVG shape', ()=>{

            const shape = new Shape();
            expect(shape.render()).toEqual(
`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

</svg>`);
        })
    })
})

//Test case for the Circle constructor

describe('Circle', ()=>{
    describe('render', ()=>{
        test('it should return code for an SVG circle', ()=>{

            const circle = new Circle('white', 'ABC', 'green');
            expect(circle.render()).toEqual(
`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="55" fill="white" />
    <text x="150" y="110" font-size="40" text-anchor="middle" fill="green">ABC</text>
</svg>`)

        })
    })
})

//Test case for the Square constructor

describe('Square', ()=>{
    describe('render', ()=>{
        test('it should return code for an SVG square', ()=>{

            const square = new Square('red', 'ABC', 'white');
            expect(square.render()).toEqual(
`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="red"/>
    <text x="100" y="110" font-size="40" text-anchor="middle" fill="undefined">ABC</text>
</svg>`)

        })
    })
})

//Test case for the Triangle constructor

describe('Triangle', ()=>{
    describe('render', ()=>{
        test('it should return code for an SVG triangle', ()=>{

            const triangle = new Triangle('white', 'ABC', 'purple');
            expect(triangle.render()).toEqual(
`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,0 300,200 0,200" fill="white"/>
    <text x="150" y="140" font-size="60" text-anchor="middle" fill="purple">ABC</text>
</svg>`)

        })
    })
})