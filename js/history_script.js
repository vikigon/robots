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