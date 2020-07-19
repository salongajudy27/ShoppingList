var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liObj = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var btn = document.createElement("button");
	btn.innerText = "Delete";
	li.appendChild(btn);
	btn.addEventListener("click",DeleteBtn);
	li.addEventListener("click",ToggleListClass);
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

function ToggleListClass(){
	this.classList.toggle("done");
}

function DeleteBtn(){
	this.parentElement.remove();


}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

[].forEach.call(liObj, function(li) {
		var btn = document.createElement("button");
		btn.innerText = "Delete";
		btn.addEventListener("click",DeleteBtn);
		li.appendChild(btn);
  		li.addEventListener("click",ToggleListClass);
});
