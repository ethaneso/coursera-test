// DOM Manipulation
// console.log(document.getElementById("title"));

// console.log(document instanceof HTMLDocument);

function sayHello (event) {
	this.textContent = "Said it!";
	var name =
		document.getElementById("name").value;
		var message = "Hello " + name + "!";

		document.getElementById("content").textContent = message;
};

document.querySelector("button")
	.addEventListener("click", sayHello);

var message = "in global";
console.log("global: message = " + message);

var a = function () {
	var message = "inside a";
	console.log("a: message = " + message);
	b();
}

function b () {
	console.log("b: message = " + message);
}
a();