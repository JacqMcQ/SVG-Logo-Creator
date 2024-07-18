const Circle = require('../circle');
const Triangle = require('../triangle');
const Square = require('../square'); 

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

describe('Triangle', () => {
    let shape;

    beforeEach(() => {
        shape = new Triangle();
    });

    test('render method should return correct SVG string after setting color', () => {
        shape.setColor("green");
        expect(shape.render()).toMatch(/<svg width="200" height="200" xmlns="http:\/\/www\.w3\.org\/2000\/svg">[\s\S]*<polygon points="100,10 150,190 50,190" fill="green" \/>[\s\S]*<\/svg>/);
    });

});

describe('Square', () => {
    let shape;

    beforeEach(() => {
        shape = new Square();
    });

    test('render method should return correct SVG string after setting color', () => {
        shape.setColor("red");
        expect(shape.render()).toMatch(/<svg width="200" height="200" xmlns="http:\/\/www\.w3\.org\/2000\/svg">[\s\S]*<rect x="25" y="25" width="150" height="150" fill="red" \/>[\s\S]*<\/svg>/);
    });

});
