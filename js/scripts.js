
var statusEnCours = "";
var opEnCours = "";


var resultat = 0;
var resultatMulti = 1;
var resultatDiv = 1;
var resultatCalulated = 0;


var btns = document.getElementsByClassName("nbrBtn");

// boucler sur les boutons
for(var i = 0; i < btns.length; i++) {
   
    var btn = btns[i];
    btn.onclick = function() {

    	var x = this.value;

		if(opEnCours == "") {
			document.getElementById("resultat").value = document.getElementById("resultat").value + x ;
		}else{ 
			var operateur = document.getElementById("addition").value;
			document.getElementById("resultat").value = x ;	

			opEnCours == "";
			
		}
    }
}
 

//addition 
function addition(){
	opEnCours = "+";
	statusEnCours = "+";
	var operateur = document.getElementById("addition").value;
	var res = document.getElementById("resultat").value;

	resultat = parseInt(document.getElementById("resultat").value) + resultat;

}

//soustraction
function soustraction(){
	opEnCours = "-";
	statusEnCours = "-";
	resultat = parseInt(document.getElementById("resultat").value) - resultat;	
}

//multiplication
function multiplication(){
	opEnCours = "*";
	statusEnCours = "*";
	resultatMulti = parseInt(document.getElementById("resultat").value) * resultatMulti;
}

//division
function division(){
	opEnCours = "/";
	statusEnCours = "/";
	resultatDiv = parseInt(document.getElementById("resultat").value) / resultatDiv;
}




//fonction resultat final
function egal(){

	if(resultatCalulated == 0) {

		if(statusEnCours=="+"){
			resultat = parseInt(document.getElementById("resultat").value) + resultat;
			document.getElementById("resultat").value = resultat;
		}
		if(statusEnCours=="*"){
			resultatMulti = parseInt(document.getElementById("resultat").value) * resultatMulti;
			document.getElementById("resultat").value = resultatMulti;
		}
		if(statusEnCours=="-"){
			resultat =resultat;
			document.getElementById("resultat").value = resultat - parseInt(document.getElementById("resultat").value);
		}
		if(statusEnCours=="/"){
		
			if(resultatDiv == 0){
				console.log("impossible de diviser sur 0");
			}else{
				document.getElementById("resultat").value = resultatDiv / parseInt(document.getElementById("resultat").value);
			}
			
		}

		resultatCalulated = 1;
	}

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
}


function virgule(){
	var x = document.getElementById("virgule").value;
	var resultat = document.getElementById("resultat").value;
	document.getElementById("resultat").value = resultat + x;
}




