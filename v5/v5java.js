"use strict";
var spurningar = ["hvað er hundur?", "er blár rauður?"];
var svor = [["dýr", "maður", "fugl", "api"], ["nei", "já"]];
var level =[];
function Quiz (spurning, svor, rett_svar, numer) {
	this.spurning = spurning;
	this.svor = svor;
	this.rett_svar = rett_svar;
	this.numer = numer;
}

for (var i = 0; i < spurningar.length; i++){
	level.push(new Quiz(spurningar[i], svor[i], svor[i][0], i+1));
}
console.log(level.length);


var list = document.getElementsByTagName("DIV");
list[1].innerHTML = level[0].spurning;
list[2].innerHTML = level[0].rett_svar;



