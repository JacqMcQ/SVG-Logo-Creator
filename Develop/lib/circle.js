class Circle {
    constructor() {
        this.color = 'blue';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="75" fill="${this.color}" />
                </svg>`;

    }
}

module.exports = Circle;
