//Dependencies

const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./assets/shapes/circle.js');
const Square = require('./assets/shapes/square.js');
const Triangle = require('./assets/shapes/triangle.js');


//inquirer initiated
    inquirer
    //an array of question objects are prompted
    .prompt([
        {
            name: 'letters',
            message: 'What characters would you like to use for your logo? (You may select up to 3!)',
            type: 'input',
            validate: (input)=>{if(input.length === 3){return true}else{return false}}
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
    //to prevent asynchronous action from interfering with the task at hand, 
    //.then is used to allow the user data to be properly received before the logo.svg 
    //is generated. 

    .then (response => { 
        
       
       const svgCode = generateLogo(response);

       //the logo.svg file is created 
        fs.writeFile('./assets/logo.svg', svgCode, (error)=>{error? console.log('error!'):console.log('success!')})

    });



//this function accepts the user response data and generates the svg code for the logo
function generateLogo(data){
    //will accept shape, letters, colors, and return SVG code
    if (data.shape.toLowerCase() === 'circle') {
        const shape = new Circle(data.shapeColor, data.letters, data.letterColor);
        return shape.render();
    } else if (data.shape.toLowerCase() === 'square') {
        const shape = new Square(data.shapeColor, data.letters, data.letterColor);
        return shape.render();
    } else if (data.shape.toLowerCase() === 'triangle') {
        const shape = new Triangle(data.shapeColor, data.letters, data.letterColor);
        return shape.render();
    };
    
};



