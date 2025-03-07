class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getArea() {
    return this.width * this.height;  // Fix: Use this.width and this.height
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);  // Initialize both width and height with 'side'
  }

  getPerimeter() {
    return 4 * this.width;  // Fix: Square has equal width and height, use this.width (or this.height)
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
