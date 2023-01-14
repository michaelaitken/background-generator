var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var listItems = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// for (var i = 0; i < listItems.length; i++) {
// 	var item = listItems[i]
// 	item.addEventListener("click", function() {
// 		item.classList.toggle("done");
// 	})
// };

listItems.addEventListeners("click", function(){
	listItems.classList.toggle("done")
})

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


