function changeColor(color){
	var body = document.getElementsByTagName('body');
	switch(color){
		case "rojo": body[0].style.backgroundColor = 'red';
			break;
		case "azul": body[0].style.backgroundColor = 'blue';
			break;
		case "verde": body[0].style.backgroundColor = 'green';
			break;		
	}
}

function countChar(textArea){
	document.getElementById('counter').innerText = textArea.value.length;	     
}

function approved(alumnos){	
	var aprobados = alumnos.filter(alumno => alumno.nota >= 7);
	for(var i = 0; i < aprobados.length; i++){
		alert("El alumno/a " + aprobados[i].nombre + " aprobo con " + aprobados[i].nota);
	}
}