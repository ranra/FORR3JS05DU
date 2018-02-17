"use strict";
document.getElementsByTagName("div")[0].setAttribute("class", "red");
var element_to_be_removed = document.getElementsByTagName("div")[2];
var container = element_to_be_removed.parentNode;
container.removeChild(element_to_be_removed);

var divQuiz = document.createElement("DIV");
divQuiz.setAttribute("id","quiz");
var position_divQuiz = document.getElementsByTagName("body")[0];
position_divQuiz.appendChild(divQuiz);

var div_spurning = document.createElement("DIV");
div_spurning.setAttribute("id", "question");
var div_spurning_text = document.createTextNode("spurning1");
div_spurning.appendChild(div_spurning_text);
var position_spurning = document.getElementById("quiz");
position_spurning.appendChild(div_spurning);

var div_svor = document.createElement("DIV");
div_svor.setAttribute("id", "answers");
var position_svor = document.getElementById("quiz");
position_svor.appendChild(div_svor);

var div_svor_a =  document.createElement("DIV");
div_svor_a.setAttribute("class", "answer");
var div_svor_text_a = document.createTextNode("svarmöguleiki1");
div_svor_a.appendChild(div_svor_text_a);
var position_svor_a = document.getElementById("answers");
position_svor_a.appendChild(div_svor_a);

var div_svor_b =  document.createElement("DIV");
div_svor_b.setAttribute("class", "answer");
var div_svor_text_b = document.createTextNode("svarmöguleiki1");
div_svor_b.appendChild(div_svor_text_b);
var position_svor_b = document.getElementById("answers");
position_svor_b.appendChild(div_svor_b);





