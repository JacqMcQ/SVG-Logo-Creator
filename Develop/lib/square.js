class Square {
    constructor() {
        this.color = 'blue'; 
    }

    setColor(color) {
        this.color = color;
    }
    render() {
        return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" y="50" width="100" height="100" fill="${this.color}" />
                </svg>`;
    }
}

module.exports = Square;
