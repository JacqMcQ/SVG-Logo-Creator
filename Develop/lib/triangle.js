class Triangle {
    constructor() {
        this.color = 'blue';
    }

    setColor(color) {
        this.color = color;
    }
    render() {
        return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="100,50 50,150 150,150" fill="${this.color}" />
                </svg>`;
    }
}

module.exports = Triangle;
