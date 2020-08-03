// var item = document.getElementById('bot_list')

// function save() {
// 	sessionStorage.setItem('robotlist', item.innerHTML)
// 	alert('Your list is saved')
// }

// function show() {
// 	if(sessionStorage.getItem('robotlist')) {
// 		item.innerHTML = sessionStorage.getItem('robotlist')
// 	}
// }

// function erase() {
// 	sessionStorage.clear()
// 	location.reload()
// }

//

function start() {
	var button = document.getElementById('save')
	button.addEventListener('click', newItem)
	showItem()
}

function newItem() {
	var id = document.getElementById('task_id').value
	var description = document.getElementById('task_description').value
	var urgency = document.getElementById('task_urgency').value
	var date = document.getElementById('task_date').value

	var values = [description, urgency, date]

	localStorage.setItem(id, values)
	showItem()
}

function showItem() {
	var box = document.getElementById('show_data')

	box.innerHTML = '<button onclick="deleteAll()" style="margin: 2em 0 2em 0;" class="button_red">Delete all tasks</button>'

	for(var i=0; i<localStorage.length; i++) {
		var id = localStorage.key(i)
		var taskValue = localStorage.getItem(id)

		box.innerHTML += '<p>' + id + '. ' + taskValue + '<button onclick="deleteOne(\''+id+'\')" style="margin: 0.5em 0 1em 1em;" class="button_red_no_width">Delete</button></p>'

	}

}

function deleteAll() {
	if(confirm('Are you sure you want to delete all tasks?')) {
	localStorage.clear()
	location.reload()
	showItem()
	}
}

function deleteOne(key) {
	if(confirm('Are you sure you want to delete the task?')) {
	localStorage.removeItem(key)
	location.reload()
	showItem()
} 
}

window.addEventListener('load', start, false )