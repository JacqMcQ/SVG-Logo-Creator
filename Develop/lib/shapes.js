
const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./circle.js');
const Triangle = require('./triangle');
const Square = require('./square');

async function main() {
    const answer = await inquirer.prompt({
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo:',
        choices: ['Circle', 'Triangle', 'Square']
    });

    let shape;
    let svgString;

    switch (answer.shape) {
        case 'Circle':
            shape = new Circle();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Square':
            shape = new Square();
            break;
        default:
            console.log('Unknown shape.');
            return;
    }

    svgString = shape.render();

    const filename = `${answer.shape.toLowerCase()}_logo.svg`;

    fs.writeFileSync(filename, svgString);

    console.log(`SVG file "${filename}" saved successfully.`);
}

main();
