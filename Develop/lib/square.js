class Square {
    constructor() {
        this.color = 'red'; 
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        const svgWidth = 200;
        const svgHeight = 200;
        const rectX = 25;
        const rectY = 25;
        const rectWidth = 150;
        const rectHeight = 150;

        return `
        <svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">
            <rect x="${rectX}" y="${rectY}" width="${rectWidth}" height="${rectHeight}" fill="${this.color}" />
        </svg>`;
    }
}

module.exports = Square;
