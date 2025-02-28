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
