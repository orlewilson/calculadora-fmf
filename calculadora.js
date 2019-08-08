
function soma(){	
	var n1 = parseFloat(document.getElementById("n1").value);
	var n2 = parseFloat(document.getElementById("n2").value);
	var resultado = n1 + n2;
     alert(resultado);
}

function multiplicar() {
   var valor1 = document.getElementById("n1").value;
   var valor2 = document.getElementById("n2").value;

   var res = valor1*valor2;
	alert(res);
}

function dividirValores(){
	var parseint1 = document.getElementById("n1").value;
	var parseint2 = document.getElementById("n2").value;
    var x = parseint1/parseint2;
    alert(x);
}
