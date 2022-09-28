var color1 = document.querySelectorAll("input")[0]
var color2 = document.querySelectorAll("input")[1]
var angle = document.querySelectorAll("input")[2]
var h3 = document.querySelector("h3")
var body = document.getElementById('bod')

function setGradiant() {
	body.style.background = 
	("linear-gradient( "+angle.value+"deg , "+color1.value+", "+ color2.value+ ")");
	h3.textContent = body.style.background + ";"
	console.log("linear-gradient( to right,"+angle.value+"deg , "+color1.value+", "+ color2.value+ ")")

}


color1.addEventListener("input", setGradiant);

color2.addEventListener("input", setGradiant);

angle.addEventListener("input", setGradiant);
//ok