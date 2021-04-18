var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("body");
var b=document.getElementById("b");
body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setGradiente(){
	body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";

	css.textContent=body.style.background;
}

function setRandom(){
	console.log("hola");
	body.style.background="linear-gradient(to right,"+getRandomColor()+","+getRandomColor()+")";
	css.textContent=body.style.background;
}

color1.addEventListener("input", setGradiente);


color2.addEventListener("input", setGradiente);


b.addEventListener("click",setRandom);
