

const Triangle = require('./shapes');

describe('Triangle', () => {
    test('render method should return correct SVG string after setting color', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});
