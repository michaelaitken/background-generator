var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log("Answer: ", _.without(array, 3))
var backgroundText = document.querySelector("h3");
var leftColor = document.querySelector(".leftColor");
var rightColor = document.querySelector(".rightColor");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ leftColor.value 
	+ ", " 
	+ rightColor.value 
	+ ")";

	backgroundText.textContent = body.style.background + ";";
}

leftColor.addEventListener("input", setGradient);
rightColor.addEventListener("input", setGradient);