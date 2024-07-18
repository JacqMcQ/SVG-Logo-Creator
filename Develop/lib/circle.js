class Circle {
    constructor() {
        this.color = 'blue'; 
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        const svgWidth = 200;
        const svgHeight = 200;
        const centerX = svgWidth / 2;
        const centerY = svgHeight / 2;
        const radius = 75;

        return `
        <svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">
            <circle cx="${centerX}" cy="${centerY}" r="${radius}" fill="${this.color}" />
        </svg>`;
    }
}

module.exports = Circle;
