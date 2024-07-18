class Triangle {
    constructor() {
        this.color = '';
    }
    
    getColor() {
        return this.color;
    }

    render() {
        return `<polygon points= "150, 18 244, 182 56, 182" fill="${this.color}"/>`;
    }
}