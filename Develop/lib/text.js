const inquirer = require('inquirer');

async function getText() {
    const answer = await inquirer.prompt({
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo text:'
    });

    return answer.text.slice(0, 3); 
}

// text.js

function validateInputLength(input) {
    return input.length > 0 && input.length <= 3;
}

module.exports = { getText, validateInputLength };
