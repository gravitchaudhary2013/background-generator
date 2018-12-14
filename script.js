var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body   = document.getElementById("gradient");
var button  = document.getElementById("click");
var h1= document.querySelector("h1");

function setGradient(){
	body.style.background="linear-gradient(to right, " + color1.value + ", " + color2.value+")";
	css.textContent=body.style.background+";"
}

function loadColor(){
	body.style.background="linear-gradient(to right, " + color1.value + ", " + color2.value+")";
	css.textContent="linear-gradient(to right, " + color1.value + ", " + color2.value+")";
}

function changeColor(){
	var colorCode1 = "#"+(Math.random()*0xffffff<<0).toString(16);
	var colorCode2 = "#"+(Math.random()*0xffffff<<0).toString(16);
	color1.value=colorCode1;
	color2.value=colorCode2;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.addEventListener("load", loadColor);

button.addEventListener("click", changeColor);