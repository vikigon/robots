var video = document.querySelector('#history_video')
var button = document.querySelector('#play')

function playVideo() {
	if(video.paused){
	video.play()
	button.innerHTML = '<span class="icon-pause">'
	} else {
		video.pause()
		button.innerHTML = '<span class="icon-play">'
	}
}

function stopVideo() {
	video.currentTime = 0
	video.pause()
	button.innerHTML = '<span class="icon-play">'
}

function skipVideo(value) {
	video.currentTime += value
}