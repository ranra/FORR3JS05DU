"use strict";

var photos=['img/p1.jpg',"img/p2.jpg","img/p3.jpg","img/p4.jpg",
"img/p5.jpg","img/p6.jpg","img/p7.jpg","img/p8.jpg","img/p9.jpg"];

var alt_text = [["Rabbit","Animators, Illustrators"],["Sea","Photographers, Filmmakers"],["Deer","Photographers, Filmmakers"],["New York Street Map","Designers"], ["Trumpet Player","Photographers, Filmmakers"],["Typographic Study","Designers, Illustrators"],["bicycle Japan","Photographers"],["Aqua Logo","Designers"], ["Ghost","Animators, Illustrators"]];



var host = document.getElementById("gallery");

photos.forEach(function(photo,i){
		var myImage = new Image(100, 200);
		myImage.src = photo;
		myImage.dataset.tags = alt_text[i].slice(1, 2);
		myImage.alt = alt_text[i][0];
		host.appendChild(myImage);
});







