const Circle = require('../circle');

describe('Circle', () => {
    let shape;

    beforeEach(() => {
        shape = new Circle();
    });

    test('render method should return correct SVG string after setting color', () => {
        shape.setColor("blue");
        expect(shape.render()).toMatch(/<svg width="200" height="200" xmlns="http:\/\/www\.w3\.org\/2000\/svg">[\s\S]*<circle cx="100" cy="100" r="75" fill="blue" \/>[\s\S]*<\/svg>/);
    });
});
