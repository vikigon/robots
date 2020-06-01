// El usuario elige su robot favorito y se imprime la foto en pantalla

var robotFav = prompt("Pick the number of your favorite robot: (1) WALL-E, (2) The Iron Giant, (3) R2-D2")
if(robotFav == "1") {
	var wallE = document.createElement("img") 
	wallE.src = "img/wall_e_fav.jpg"
	wallE.alt = "WALL-E"
	wallE.title = "You're WALL-E's favorite too!"
	wallE.style.border = "5px solid #02a0ef"
	wallE.style.margin = "20px 0"
	document.getElementById("fav_robot").appendChild(wallE)
	}
else if(robotFav == "2") {
	var ironGiant = document.createElement("img")
	ironGiant.src = "img/iron_giant_fav.jpg"
	ironGiant.alt = "The Iron Giant"
	ironGiant.title = "You're The Iron Giant's favorite too!"
	ironGiant.style.border = "5px solid #ff9549"
	ironGiant.style.margin = "20px 0"
	document.getElementById("fav_robot").appendChild(ironGiant)
	}
else if(robotFav == "3") {
	var r2D2 = document.createElement("img")
	r2D2.src = "img/r2d2_fav.jpg"
	r2D2.alt = "R2-D2"
	r2D2.title = "You're R2-D2's favorite too!"
	r2D2.style.border = "5px solid #3500c6"
	r2D2.style.margin = "20px 0"
	document.getElementById("fav_robot").appendChild(r2D2)
}
else {
	var noFavRobot = document.createElement("img")
	noFavRobot.src = "img/no_fav_robot.gif"
	noFavRobot.alt = "Robots love to dance!"
	noFavRobot.title = "Bots love to dance!"
	noFavRobot.style.border = "5px solid #02a0ef"
	noFavRobot.style.margin = "20px 0"
	document.getElementById("fav_robot").appendChild(noFavRobot)
}

// Se visualiza un mensaje de agradecimiento cuando el usuario envía el formulario satisfactoriamente

function thanksMessage(event) {
	event.preventDefault(); //Evito que se envíe el form porque igual no está configurado :)
	var form = document.querySelector('form');
    if(form.checkValidity()){
      alert("Thank you for your message! The robots will answer you shortly. 🤖");
    }
}