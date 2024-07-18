
const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./circle.js'); // Import Circle class
// Import Triangle and Square classes if they exist
// const Triangle = require('./Triangle');
// const Square = require('./Square');

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
        // Add cases for 'Triangle' and 'Square' if classes exist
        // case 'Triangle':
        //     shape = new Triangle();
        //     break;
        // case 'Square':
        //     shape = new Square();
        //     break;
        default:
            console.log('Unknown shape.');
            return;
    }

    // Generate SVG string based on selected shape
    svgString = shape.render();

    const filename = `${answer.shape.toLowerCase()}_logo.svg`;

    fs.writeFileSync(filename, svgString);

    console.log(`SVG file "${filename}" saved successfully.`);
}

main();
