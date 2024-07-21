const Square = require('../square');

describe('Square', () => {
    let shape;

    beforeEach(() => {
        shape = new Square();
    });

    test('render method should return correct SVG string after setting color', () => {
        shape.setColor("red");
        expect(shape.render()).toMatch(/<svg width="200" height="200" xmlns="http:\/\/www\.w3\.org\/2000\/svg">[\s\S]*<rect x="50" y="50" width="100" height="100" fill="red" \/>[\s\S]*<\/svg>/);
    });
});
