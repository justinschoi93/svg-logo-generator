//Dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./assets/shapes/circle.js');
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
        
       
       const svgCode = generateLogo(response);
        // console.log(svgCode)
        fs.writeFile('./assets/logo.svg', svgCode, (error)=>{error? console.log('error!'):console.log('success!')})

    });




function generateLogo(data){
    //will accept shape, letters, colors, and return SVG code
    if (data.shape.toLowerCase() === 'circle') {
        const shape = new Circle(data.shapeColor, data.letters, data.letterColor);
        return shape.render();
    } else if (data.shape.toLowerCase() === 'rectangle') {
        const shape = new Rectangle(data.shapeColor, data.letters, data.letterColor);
        return shape.render();
    } else if (data.shape.toLowerCase() === 'triangle') {
        const shape = new Triangle(data.shapeColor, data.letters, data.letterColor);
        return shape.render();
    };
    
};



// const newLogo = generateLogo()