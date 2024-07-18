const { validateInputLength } = require('../text');

describe('User Input Validation', () => {


    test('Input with more than three characters should fail validation', () => {
        const input = 'abcd';
        const isValid = validateInputLength(input);
        expect(isValid).toBe(false);
    });

    test('Empty input should fail validation', () => {
        const input = '';
        const isValid = validateInputLength(input);
        expect(isValid).toBe(false);
    });
});