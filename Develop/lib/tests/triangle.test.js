const Triangle = require('../triangle');

describe('Triangle', () => {
    let shape;

    beforeEach(() => {
        shape = new Triangle();
    });

    test('render method should return correct SVG string after setting color', () => {
        shape.setColor("green");
        expect(shape.render()).toMatch(/<svg width="200" height="200" xmlns="http:\/\/www\.w3\.org\/2000\/svg">[\s\S]*<polygon points="100,50 50,150 150,150" fill="green" \/>[\s\S]*<\/svg>/);
    });
});
