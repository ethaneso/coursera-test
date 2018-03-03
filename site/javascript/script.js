// DOM Manipulation
// console.log(document.getElementById("title"));

// console.log(document instanceof HTMLDocument);

// object creation
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstname = "Mark";
// company.ceo.favColor = "blue";
// console.log(company);
// console.log("Company CEO name is: "
	 // + company.ceo.firstname);

// console.log(company["name"]);
// ompany.$stock = 110;

// console.log(company);
// console.log("Stock price is: " + company[stockPropNmae]);

// function multiply(x, y) {
	// return x * y;
// }
// console.log(multiply(5, 3));
// multiply.version = "v.1.0.0";
// console.log(multiply.version);

// alert();

// function
// function go(){
// 	alert('hi');
// 	alert('hey there');
// }

// go();

function call(name, age){
	return name+age;
	 }

var add = call(1, 2);
alert(add);

var myList = ['apples', 'organge', 'bananas'];
myList.forEach(function(value, index) {
	alert('I have '+value+' in my shopping bag');
});

//while loop
var times = 0;
while (times < 10) {
	console.log('tried it', times);
	times = times+1

}

do {
	console.log('did it', times);
	times++;
} while(times < 10);

// var name = "cool";
// var age = 20;
// alert(name);
// alert(age);

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
