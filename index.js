//Dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./assets/shapes/shape.js');
const Circle = require('./assets/shapes/cirle.js');
const Rectangle = require('./assets/shapes/rectangle.js');
const Triangle = require('./assets/shapes/triangle.js');



inquirer
    .prompt([
        {
            name: 'letters',
            message: 'What characters would you like to use for your logo? (You may select up to 3!)',
            type: 'input',
            //validate: function(input[if (input.length <= 3) return true]){}
        },
        {
            name: 'letterColor',
            message: 'What color would you like the text of your logo to be? (Key word or hexadecimal number)',
            type: 'input',
        
        },
        {
            name: 'shape',
            message: 'What shape would you like your logo to be?',
            type: 'list',
            choices: ['circle', 'triangle', 'square']
        },
        {
            name: 'shapeColor',
            message: 'What color would you like the shape of your logo to be? (Key word or hexademical number)',
            type: 'input',
        }
    ])
    .then (response => {
        
     
        

    });

function generateSVG(data){
    //will accept shape, letters, colors, and return SVG code
    if (data.shape.toLowerCase() === 'circle') {
        const shape = new Circle();
        const newLogo = 
    } else if (data.shape.toLowerCase() === 'rectangle') {
        const shape = new Rectangle();
    } else if (data.shape.toLowerCase() === 'triangle') {
        const shape = new Triangle();
    } 

    shape.setColor(data.shapeColor);
    shape.
}
