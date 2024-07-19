const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { getText } = require('./Develop/lib/text');
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
    let svgString;

    switch (answer.shape) {
        case 'Circle':
            shape = new Circle();
            svgString = renderCircle(shape);
            break;
        case 'Triangle':
            shape = new Triangle();
            svgString = renderTriangle(shape);
            break;
        case 'Square':
            shape = new Square();
            svgString = renderSquare(shape);
            break;
        default:
            console.log('Unknown shape.');
            return;
    }

    const text = await getText(); 

    const colorAnswer = await inquirer.prompt({
        type: 'input',
        name: 'color',
        message: `Enter color for the ${answer.shape.toLowerCase()}:`
    });

    shape.setColor(colorAnswer.color);

    svgString = insertText(svgString, text);

    const filename = `${answer.shape.toLowerCase()}_logo.svg`;

    fs.writeFileSync(path.join(__dirname, filename), svgString);

    console.log(`SVG file "${filename}" saved successfully.`);
}

function renderCircle(circle) {
    const svgWidth = 200;
    const svgHeight = 200;
    const centerX = svgWidth / 2;
    const centerY = svgHeight / 2;
    const radius = 75;

    return `
    <svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">
        <circle cx="${centerX}" cy="${centerY}" r="${radius}" fill="${circle.color}" />
    </svg>`;
}

function renderTriangle(triangle) {
    const svgWidth = 200;
    const svgHeight = 200;
    const points = `100,10 ${svgWidth - 50},${svgHeight - 10} 50,${svgHeight - 10}`;

    return `
    <svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">
        <polygon points="${points}" fill="${triangle.color}" />
    </svg>`;
}

function renderSquare(square) {
    const svgWidth = 200;
    const svgHeight = 200;
    const rectX = 25;
    const rectY = 25;
    const rectWidth = 150;
    const rectHeight = 150;

    return `
    <svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">
        <rect x="${rectX}" y="${rectY}" width="${rectWidth}" height="${rectHeight}" fill="${square.color}" />
    </svg>`;
}

function insertText(svgString, text) {
    const svgWidth = 200;
    const svgHeight = 200;
    const textX = svgWidth / 2;
    const textY = svgHeight / 2;

    return svgString.replace('</svg>', `<text x="${textX}" y="${textY}" text-anchor="middle" dominant-baseline="middle" font-size="20">${text}</text></svg>`);
}

main();
