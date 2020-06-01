// La lista de pelis se ordena automáticamente y se le suma una lista ordenada

var robotTimeline = [
	"2001 - David, A.I. Artificial Intelligence",
	"2008 - WALL-E and Eva, WALL-E",
	"1927 - Maria, Metropolis",
	"1968 - HAL 9000, 2001: A Space Odyssey",
	"2004 - Sonny; I, Robot",
	"1986 - Johnny 5, Short circuit",
	"1956 - Robby the Robot, Forbidden Planet",
	"1987 - RoboCop, RoboCop",
	"1977 - C-3PO and R2-D2, Star Wars",
	"1984 - Terminator T-800, The Terminator"
];

robotTimeline.sort();

var robotList = "";
for (var i =0; i < robotTimeline.length; i++) {
    robotList += "<li>" + robotTimeline[i] + "</li>";
}

document.getElementById("robot_sort").innerHTML = robotList;

// Citas de robots al azar al hacer clic en el botón

function randomQuote() {

	var quotes = [
	"\"Dead or alive, you're coming with me!\" — Robocop",
    "\"There can be no understanding between the hand and the brain unless the heart acts as mediator.\" - Maria, Metropolis",
    "\"R2 says the chances of survival are 725... to one.\" - C-3PO, Star Wars",
    "\"I am C-3PO, human/cyborg relations. And you are?\" - C-3PO, Star Wars",
    "\"As a robot, I could have lived forever. But I tell you all today, I would rather die a man, than live for all eternity a machine.\" - Andrew, Bicentennial Man",
    "\"They hate us, you know. The humans. They'll stop at nothing.\" - Gigolo Joe, A.I. Artificial Intelligence",
    "\"Martin is Mommy and Henry's real son. After i find the Blue Fairy then I can go home. Mommy will love a real boy. The Blue Fairy will make me into one.\" - David, A.I. Artificial Intelligence",
    "\"Don’t blame me. I’m an interpreter. I’m not supposed to know a power socket from a computer terminal.\" — C-3PO, Star Wars",
    "\"Boop beep boop boop beep bloop.\" - R2-D2, Star Wars",
    "\"Hasta la vista, baby.\" - The Terminator, Terminator 2: Judgement Day",
    "\"I’ll be back.\" - The Terminator",
    "\"Stephanie, change color. Attractive. Nice software. Hmmmm.\" - No. 5, Short Circuit",
    "\"Stupid - foolish, gullible, doltish, dumbell.\" - No. 5, Short Circuit",
    "\"I am putting myself to the fullest possible use, which is all I think that any conscious entity can ever hope to do.\" - HAL 9000, 2001: A Space Odyssey",
    "\"I know I've made some very poor decisions recently, but I can give you my complete assurance that my work will be back to normal.\" - HAL 9000, 2001: A Space Odyssey"
];
    
    var rand = Math.floor(Math.random()*quotes.length);
    
    document.getElementById("random_quote").innerHTML = quotes[rand];
  }
