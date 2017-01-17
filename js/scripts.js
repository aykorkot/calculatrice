var statusEnCours = "";
var lastNum;
var cpt =0;
var btns = document.getElementsByClassName("nbrBtn");
var nbr = "";

var x;

// boucler sur les boutons
for(var i = 0; i < btns.length; i++) {
   
    var btn = btns[i];
 
    btn.onclick = function() {

    	x = this.value;
    	nbr = nbr+x;

		document.getElementById("resultat").value = document.getElementById("resultat").value + x ;
		lastNum = nbr;

		console.log(nbr);
    }
}
 

//addition 
document.getElementById("addition").onclick = function (){

	statusEnCours = "+";
	var x = document.getElementById("addition").value;
	document.getElementById("resultat").value = document.getElementById("resultat").value + " " + x + " ";
	cpt=0;	
	nbr = "";
}

//soustraction
document.getElementById("soustraction").onclick = function (){
	statusEnCours = "-";
	var x = document.getElementById("soustraction").value;
	document.getElementById("resultat").value = document.getElementById("resultat").value + " " + x + " ";
	cpt=0;
nbr = "";
}

//multiplication
document.getElementById("multiplication").onclick = function (){
	statusEnCours = "x";
	var x = document.getElementById("multiplication").value;
	document.getElementById("resultat").value = document.getElementById("resultat").value + " " + x + " ";
	cpt=0;
	nbr = "";	
}



//division
document.getElementById("division").onclick = function (){
	statusEnCours = "/";
	var x = document.getElementById("division").value;
	document.getElementById("resultat").value = document.getElementById("resultat").value + " " + x + " ";
	cpt=0;
	nbr = "";

}



//fonction resultat final
document.getElementById("egal").onclick = function (){

	var valeur = document.getElementById("resultat").value;
	if(cpt===0){
		document.getElementById("resultat").value = eval(valeur);
		cpt = 1;
	}else{

		document.getElementById("resultat").value = eval(valeur+"+"+lastNum);
		
		if(statusEnCours==="+"){
			document.getElementById("resultat").value = eval(valeur+"+"+lastNum);
		}
		if(statusEnCours==="-"){
			document.getElementById("resultat").value = eval(valeur+"-"+lastNum);
		}
		if(statusEnCours==="x"){
			document.getElementById("resultat").value = eval(valeur+"*"+lastNum);
		}
		if(statusEnCours==="/"){
			document.getElementById("resultat").value = eval(valeur+"/"+lastNum);
		}
	}

}



// vider le champ
document.getElementById("cBtn").onclick = function (){
	document.getElementById("resultat").value = "";
}



//effacer dernier nombre
function effacer(){
	var resultat = document.getElementById("resultat").value;
	var taille = resultat.length;
	taille = resultat.substring(0,taille-1);
	document.getElementById("resultat").value = taille;
}


function virgule(){
	var x = document.getElementById("virgule").value;
	var resultat = document.getElementById("resultat").value;
	document.getElementById("resultat").value = resultat + x;
}