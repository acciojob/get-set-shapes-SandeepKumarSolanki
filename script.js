//complete this code
class Rectangle {
	constructor(width , height){
		this.width = width;
		this.height = height;
	}
	
	setWidth(width){
		this.width = width;
	}
	setHeight(height){
		this.height = height;
	}

	
	getWidth(){
		return this.width;
	}
	getHeight(height){
		return this.height;
	}

	
	getArea(){
		return (getWidth()*getHeight());
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side , side);
		this.side = side;
	}

	getPerimeter(){
		return 4 * this.side;
	}
	
}



// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

// Creating a Rectangle instance
const rectangle = new Rectangle(5, 10);
console.log(rectangle.getWidth); // Output: 5
console.log(rectangle.getHeight); // Output: 10
console.log(rectangle.getArea()); // Output: 50

// Creating a Square instance
const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28

