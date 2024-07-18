class Triangle {
    constructor() {
        this.color = 'blue'; 
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        const svgWidth = 200;
        const svgHeight = 200;
        const points = `100,10 ${svgWidth - 50},${svgHeight - 10} 50,${svgHeight - 10}`;

        return `
        <svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">
            <polygon points="${points}" fill="${this.color}" />
        </svg>`;
    }
}

module.exports = Triangle;
