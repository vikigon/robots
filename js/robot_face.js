var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var eyeRadius = 9;
var eyeHeight = 60;
var canvasCenterX = 200 / 2;

// carita
ctx.fillStyle = '#02a0ef';
ctx.fillRect(13, 30, 175, 90); 
ctx.fill();
    
// ojos
ctx.arc(60, eyeHeight, eyeRadius, 0, 2 * Math.PI);
ctx.arc(140, eyeHeight, eyeRadius, 0, 2 * Math.PI);
ctx.fillStyle = '#e6d417';
ctx.fill();
  
// boca
ctx.beginPath();
ctx.arc(canvasCenterX, 78, 30, 0, Math.PI, false);
ctx.closePath();
ctx.fillStyle = '#de4b4b';
ctx.fill();

//antenita
ctx.beginPath();
ctx.fillStyle = '#02a0ef';
ctx.fill();
ctx.fillRect(canvasCenterX, 20, 7, 10); 
ctx.closePath();
ctx.beginPath();
ctx.arc(canvasCenterX + 3.5, 12, 7, 0, 2 * Math.PI);
ctx.lineWidth = 2;
ctx.strokeStyle = '#ffffff';
ctx.stroke();
ctx.fillStyle = '#6632cf';
ctx.fill();
ctx.closePath();

//orejas
ctx.beginPath();
ctx.fillStyle = '#02a0ef';
ctx.fillRect(1, 50, 12, 30); 
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle = '#02a0ef';
ctx.fillRect(187, 50, 12, 30); 
ctx.fill();
ctx.closePath();
