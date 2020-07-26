function start(){
origen1 = document.getElementById('drag_and_drop_image');
origen1.addEventListener('dragstart', dragging, false);
origen1.addEventListener('dragend', ended, false);

soltar = document.getElementById('cajasoltar');
soltar.addEventListener('dragenter', entering, false);
soltar.addEventListener('dragleave', exiting, false);
soltar.addEventListener('dragover', function(e){
e.preventDefault(); }, false);
soltar.addEventListener('drop', dropped, false);
}


function dragging(e){
var code = '<img src="'+origen1.getAttribute('src')+'">';
e.dataTransfer.setData('Text', code);
}

function ended(e){
elemento = e.target;
elemento.style.visibility = 'hidden';
}

function entering(e){
e.preventDefault();
soltar.style.background = '#02a0ef99';
}

function exiting(e){
e.preventDefault();
soltar.style.background = '#fcfcfc;';
}

function dropped(e){
e.preventDefault();
soltar.style.background = '#fcfcfc;';
soltar.innerHTML = e.dataTransfer.getData('Text');
}

window.addEventListener('load', start, false);
