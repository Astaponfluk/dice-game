function namePlayers() {
	var player1 = document.getElementById("player1").value;
	var player2 = document.getElementById("player2").value;

	var player1 = player1.toUpperCase();
	var player2 = player2.toUpperCase();

	document.querySelectorAll("p")[0].innerHTML = player1;
	document.querySelectorAll("p")[1].innerHTML = player2;

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "images/romandice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "images/romandice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomDiceImage);

if (randomNumber1 > randomNumber2) {
   document.querySelectorAll("h1")[0].innerHTML = (player1 + " WINS");
} else if (randomNumber2 > randomNumber1) {
   document.querySelectorAll("h1")[0].innerHTML = (player2 + " WINS");
} else if (randomNumber2 === randomNumber1){
  document.querySelectorAll("h1")[0].innerHTML = ("Draw");
};
	form.addEventListener('submit', handleForm);
 }

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); }


 window.onload = function() {


if (sessionStorage.getItem('name') == "player1") {
	return;
}

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

var name = sessionStorage.getItem('name');
if (name !== null) $('#player1').val(name);

var email = sessionStorage.getItem('email');
if (email !== null) $('#player2').val(email);

}


window.onbeforeunload = function() {
sessionStorage.setItem("name", $('#player1').val());
sessionStorage.setItem("email", $('#player2').val());
}

namePlayers();