import {index} from "./switchToNextTest.js"
const resultsButton = document.querySelector('.results__button-wrap')
const resultsButtonText = document.querySelector('.results__button')

export function countdownTimer(elementName, minutes, seconds) {
	let element, endTime, hours, mins, msLeft, time;
	
	function twoDigits(n) {
		return (n <= 9 ? "0" + n : n);
	}
	
	function updateTimer() {
		msLeft = endTime - (+new Date)
		if (msLeft < 0) {
			// resultsTimerText.innerHTML = ''
			// element.innerHTML = ``
			resultsButton.disabled = true
			resultsButtonText.innerHTML = `<p style="padding: 0">Увы,<br> вы не успели :(</p>`
		} else {
			time = new Date(msLeft)
			hours = time.getUTCHours()
			mins = time.getUTCMinutes()
			element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds())
			setTimeout(updateTimer, time.getUTCMilliseconds() + 500)
		}
	}
	
	element = document.getElementById(elementName);
	endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
	updateTimer();
}