// text.js
const inquirer = require('inquirer');

async function getText() {
    const answer = await inquirer.prompt({
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo text:'
    });

    return answer.text.slice(0, 3); 
}

function insertText(svgString, text) {
    const svgWidth = 200;
    const svgHeight = 200;
    const textX = svgWidth / 2;
    const textY = svgHeight / 2;

    return svgString.replace('</svg>', `<text x="${textX}" y="${textY}" text-anchor="middle" dominant-baseline="middle" font-size="20">${text}</text></svg>`);
}

function validateInputLength(input) {
    return input.length > 0 && input.length <= 3;
}

module.exports = { getText, insertText, validateInputLength };
