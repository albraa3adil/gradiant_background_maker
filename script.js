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

function copy() {
	// Get the text field
	var copyText = document.getElementById("copy").textContent;
	console.log(copyText.textContent);
  
	// Select the text field
	// copyText.select();
	// copyText.setSelectionRange(0, 99999); // For mobile devices
  
	 // Copy the text inside the text field
	navigator.clipboard.writeText(copyText);
  
	// Alert the copied text
	// alert("Copied the text: " + copyText);
  }
//ok