const inquirer = require('inquirer');

async function getText() {
    const answer = await inquirer.prompt({
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo text:'
    });

    return answer.text.slice(0, 3); // Ensure only the first three characters are taken
}

module.exports = { getText };
