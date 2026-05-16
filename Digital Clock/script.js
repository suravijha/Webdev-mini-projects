const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const ampm = document.getElementById("ampm");

function updateClock() {
	const currentTime = new Date();

	let hour = currentTime.getHours();
	let minutes = currentTime.getMinutes();
	let seconds = currentTime.getSeconds();

	let period = hour >= 12 ? "PM" : "AM";

	hour = hour % 12 || 12;

	hrs.textContent = String(hour).padStart(2, "0") + " : ";
	min.textContent = String(minutes).padStart(2, "0") + " : ";
	sec.textContent = String(seconds).padStart(2, "0");
	ampm.textContent = period;
}

updateClock();
setInterval(updateClock, 1000);
