// main.js
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { getText, insertText } = require('./Develop/lib/text');
const Triangle = require('./Develop/lib/triangle');
const Circle = require('./Develop/lib/circle');
const Square = require('./Develop/lib/square');

async function main() {
    const answer = await inquirer.prompt({
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo:',
        choices: ['Circle', 'Triangle', 'Square']
    });

    let shape;

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

    const colorAnswer = await inquirer.prompt({
        type: 'input',
        name: 'color',
        message: `Enter color for the ${answer.shape.toLowerCase()}:`
    });

    shape.setColor(colorAnswer.color);

    const text = await getText();

    let svgString = shape.render();
    svgString = insertText(svgString, text);

    const filename = `${answer.shape.toLowerCase()}_logo.svg`;

    fs.writeFileSync(path.join(__dirname, filename), svgString);

    console.log(`Generated "${filename}".`);
}

main();
