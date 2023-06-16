tests = [[2,3], [4, -2], [-5,3], [-6, -2],[1.15, 20]]

pow(tests);

function pow(tests){
	var powText = "";
	for (pair of tests) {
    	var res = 1;
	    count = 0;
	    while (count<Math.abs(pair[1])) {
	    	res *= pair[0];
	    	count+=1;
	    }
    	if (pair[1]<0) {res = (1/res).toFixed(4)};
    	if ((pair[0] % 1) != 0) {res = res.toFixed(4)};
    	powText += pair[0] + "^" + pair[1] + " = " + res + "<br>";	
	}
	document.getElementById("pow").innerHTML = powText;
}