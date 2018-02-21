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

document.querySelector("body")
	.addEventListener("mousemove",
		function (event) {
			console.log("x: " + event.clientX);
			console.log("y: " + event.clientY);
		}
		);