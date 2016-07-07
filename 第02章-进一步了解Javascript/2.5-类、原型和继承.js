function Shape() {
	this.X = 0;
	this.Y = 0;

	this.move = function(x, y) {
		this.X = x;
		this.Y = y;
	}
	this.distance_from_origin = funciton() {
		return Math.sqrt(this.X * this.X + this.Y * this.Y);
	}
}
new Shape();

//所有的Javascript对象都有一个原型（prototype）对象，它是一种继承属性和方法的机制。

function Shape() {
}
Shape.prototype.X = 0;
Shape.prototype.Y = 0;
Shape.prototype.move = function(x, y) {
	this.X = x;
	this.Y = y;
}
Shape.prototype.distance_from_origin = function() {
	return Math.sqrt(this.X * this.X + this.Y * this.Y);
}
Shape.prototype.area = function() {
	throw new Error("I don't have a form yet");
}

var s = new Shape();
s.move(10, 10);
console.log(s.distance_from_origin());
//使用这种方式和上面效果是一样的，但在内存的效率上会提高一点
//如果创建了大量实例，他们都将共享自己创建的move和distance_from_origin方法
