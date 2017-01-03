
var statusEnCours = "";
var opEnCours = "";


var resultat = 0;
var resultatMulti = 1;
var resultatDiv = 1;
var resultatCalulated = 0;
var derNbr;
var conditionDernNbr = 0;


var btns = document.getElementsByClassName("nbrBtn");

// boucler sur les boutons
for(var i = 0; i < btns.length; i++) {
   
    var btn = btns[i];
    btn.onclick = function() {

    	var x = this.value;

		if(opEnCours == "") {
			document.getElementById("resultat").value = document.getElementById("resultat").value + x ;
		}else{ 
			
			document.getElementById("resultat").value = x ;
			opEnCours == "";
			
		}
    }
}
 

//addition 
document.getElementById("addition").onclick = function (){
	opEnCours = "+";
	statusEnCours = "+";

	resultat = parseInt(document.getElementById("resultat").value) + resultat;
	
	
	var opValue = this.value;
	document.getElementById("opEnCours").innerHTML = opValue;	

}

//soustraction
document.getElementById("soustraction").onclick = function (){
	opEnCours = "-";
	statusEnCours = "-";
	resultat = parseInt(document.getElementById("resultat").value) - resultat;	
	
	var opValue = this.value;
	document.getElementById("opEnCours").innerHTML = opValue;	
}

//multiplication
document.getElementById("multiplication").onclick = function (){
	opEnCours = "x";
	statusEnCours = "x";
	resultatMulti = parseInt(document.getElementById("resultat").value) * resultatMulti;
	
	var opValue = this.value;
	document.getElementById("opEnCours").innerHTML = opValue;	
}




//division
document.getElementById("division").onclick = function (){
	opEnCours = "/";
	statusEnCours = "/";
	resultatDiv = parseInt(document.getElementById("resultat").value) / resultatDiv;
	
	var opValue = this.value;
	document.getElementById("opEnCours").innerHTML = opValue;	
}




//fonction resultat final
document.getElementById("egal").onclick = function (){

	
	if(conditionDernNbr == 0) {
		derNbr = parseInt(document.getElementById("resultat").value);
		conditionDernNbr = 1;
	}
	
	if(statusEnCours=="+"){		
		resultat = derNbr + resultat;
		document.getElementById("resultat").value = resultat;
	}
	
	 
	if(statusEnCours=="x"){
		resultatMulti = derNbr * resultatMulti;
		document.getElementById("resultat").value = resultatMulti;
	}
	if(statusEnCours=="-"){
		resultat =resultat;
		document.getElementById("resultat").value = resultat - derNbr;
	}
	if(statusEnCours=="/"){
		var nbrDiv = derNbr;
		
		if(nbrDiv == 0){
			alert("impossible de diviser sur 0");
			resetVar();
		}else{
			document.getElementById("resultat").value = resultatDiv / nbrDiv;
		}
		
	}
	
	document.getElementById("opEnCours").innerHTML = "";
	resultatCalulated = 1;
	 

}



// vider le champ
document.getElementById("cBtn").onclick = function (){
	document.getElementById("resultat").value = "";
	resetVar();
}



//effacer dernier nombre
function effacer(){
	var resultat = document.getElementById("resultat").value;
	var taille = resultat.length;
	taille = resultat.substring(0,taille-1);
	document.getElementById("resultat").value = taille;
}


function resetVar(){
	opEnCours = "";
	resultat = 0;
	resultatCalulated = 0;
	resultatMulti = 1;
	conditionDernNbr = 0;
	document.getElementById("opEnCours").innerHTML = "";
}


function virgule(){
	var x = document.getElementById("virgule").value;
	var resultat = document.getElementById("resultat").value;
	document.getElementById("resultat").value = resultat + x;
}




