// DOM Manipulation
// console.log(document.getElementById("title"));

// console.log(document instanceof HTMLDocument);

// object creation
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstname = "Mark";
company.ceo.favColor = "blue";
console.log(company);
console.log("Company CEO name is: "
	+ company.ceo.firstname);

console.log(company["name"]);
company.$stock = 110;

console.log(company);
console.log("Stock price is: " + company[stockPropNmae]);



//event 
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
