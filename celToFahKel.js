const celFahTemps = [37.5, -40, 0, 100];
const celKelTemps = [173.13, -13];

celToFah(celFahTemps);
celToKel(celKelTemps);

function celToFah(cTemps) {
	var f = 0;
	var c = 0;
	var textCelFah = "";
	for (c of cTemps) {
		f = c * 9/5 + 32;
		textCelFah += c + " degrees Celcius = " + f + " degrees Fahrenheit." + "<br>";
	}
	document.getElementById("celFah").innerHTML = textCelFah;
}
function celToKel(cTemps) {
	var k = 0;
	var c = 0;
	var textCelKel = "";
	for (c of cTemps) {
		k = c + 273.15;
		textCelKel += c + " degrees Celcius = " + k + " degrees Kelvin." + "<br>";
	}
	document.getElementById("celKel").innerHTML = textCelKel;
}