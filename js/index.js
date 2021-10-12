var desc=0.2;
var cant_v=0;
var precio=200;

function cant_c(y){
	if (y>=0) {
		cant_v=y;
	}
}	

function cat_c(y){
	switch(y){
		case "Estudiante": desc=0.8;break;
		case "Trainee": desc=0.5;break;
		case "Junior": desc=0.15;break;
	}
}

/*function mensaje(){
	let total = precio*cant_v*cat_v;
	document.getElementById("mensaje").value="Total a pagar: "+total+"$";
}*/

function resumen(){
	let total = Math.round(precio*cant_v*(1-desc));
	document.getElementById("mensaje").value="Total a pagar: "+total+"$";	
}

function borrar(){
	cant_v=0;
	document.getElementById("cant").value=0;
	document.getElementById("mensaje").value="Total a pagar: "+0+"$";
}