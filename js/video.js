var video = document.querySelector("#player1");
var rate = 1.0

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	rate = rate - 0.05;
	video.playbackRate = rate;
	console.log(rate);
});

document.querySelector("#faster").addEventListener("click", function() {
	rate = rate + 0.05;
	video.playbackRate = rate;
	console.log(rate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 15;
	if (video.currentTime >= video.duration){
		video.currentTime = 0
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	var vol = document.getElementById("slider").value;
	document.querySelector("#volume").innerHTML = vol + "%";
	video.volume = vol / 100;
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});

