// Burger Handler

(function () {
	const burgerItem = document.querySelector('.burger')
	const menu = document.querySelector('.header__nav')
	const menuCloseItem = document.querySelector('.header__nav-close')
	const menuLinks = document.querySelectorAll('.header__link')
	burgerItem.addEventListener('click', () => {
		menu.classList.add('header__nav_active')
	});
	menuCloseItem.addEventListener('click', () => {
		menu.classList.remove('header__nav_active')
	})
	for (let i = 0; i < menuLinks.length; i++) {
		menuLinks[i].addEventListener('click', () => {
			menu.classList.remove('header__nav_active')
		})
	}
}());

// Scroll to anchors

(function () {
	
	const smoothScroll = function (targetEl, duration) {
		const headerElHeight = document.querySelector('.header').clientHeight
		let target = document.querySelector(targetEl)
		let targetPosition = target.getBoundingClientRect().top - headerElHeight
		let startPosition = window.scrollY
		let startTime = null
		
		const ease = function (t, b, c, d) {
			t /= d / 2
			if (t < 1) return c / 2 * t * t + b
			t--
			return -c / 2 * (t * (t - 2) - 1) + b
		};
		
		const animation = function (currentTime) {
			if (startTime === null) startTime = currentTime
			const timeElapsed = currentTime - startTime
			const run = ease(timeElapsed, startPosition, targetPosition, duration)
			window.scrollTo(0, run)
			if (timeElapsed < duration) requestAnimationFrame(animation)
		};
		requestAnimationFrame(animation)
	}
	
	const scrollTo = function () {
		const links = document.querySelectorAll('.js-scroll')
		links.forEach(each => {
			each.addEventListener('click', function () {
				const currentTarget = this.getAttribute('href')
				smoothScroll(currentTarget, 1000)
			})
		})
	}
	scrollTo()
}())

// Results page timer

function countdown(elementName, minutes, seconds) {
	let element, endTime, hours, mins, msLeft, time;
	
	function twoDigits(n) {
		return (n <= 9 ? "0" + n : n);
	}
	
	function updateTimer() {
		msLeft = endTime - (+new Date)
		if (msLeft < 1000) {
			element.innerHTML = "Time is up!"
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

// countdown( "results__timer", 10, 0 );

// Pass test buttons

const mainPage = document.querySelector('.main-page')
const testPage = document.querySelector('.tests-page')
const headerBasement = document.querySelector('.header__basement')
const allCheckboxesArray = document.querySelectorAll('.test__answer-checkbox')
const nextTestButton = document.querySelector('.test__next-test-button')
const headerBrainImg = document.querySelector('.header__brain-img')
const headerTestPageTitle = document.querySelector('.header__test-page-title')
const headerResultPageTitle = document.querySelector('.header__result-page-title')
const passedProgressBar = document.querySelector('.test__progress-bar-passed')

function showMainPage() {
	``
	testPage.classList.add('hidden')
	mainPage.classList.remove('hidden')
	headerTestPageTitle.classList.add('hidden')
	headerBrainImg.classList.add('hidden')
	headerBasement.style.height = '46'
}

function showTestsPage() {
	mainPage.classList.add('hidden')
	headerBasement.style.height = '0'
	headerTestPageTitle.classList.remove('hidden')
	headerBrainImg.classList.remove('hidden')
	testPage.classList.remove('hidden')
}

// Get only one checked checkbox
function checkOnlyOneCheckbox(id) {
	const checkedAnswer = document.getElementById(id)
	
	allCheckboxesArray.forEach(checkbox => {
		checkbox.checked = false
	})
	
	checkedAnswer.checked = true
	
	nextTestButton.disabled = false
	nextTestButton.classList.add('enabled')
}

// Show Next Test Question
let usersTestAnswers = []
let index = 1

function showNextTest() {
	const currentTest = document.querySelector(`.test-${index}`)
	const nextTest = document.querySelector((`.test-${index + 1}`))
	
	if (index < 11) {
		allCheckboxesArray.forEach(checkbox => {
			
			const answerRecord = `${checkbox.id} : ${checkbox.value}`
			if (checkbox.checked) {
				
				usersTestAnswers.push(answerRecord)
				console.log(`usersTestAnswers:${usersTestAnswers}`)
			}
		})
		
		currentTest.classList.add('hidden')
		nextTest.classList.remove('hidden')
		nextTestButton.disabled = true
		nextTestButton.classList.remove('enabled')
		// passedProgressBar.width = passedProgressBar.width
		// console.log(`progressBar: ${passedProgressBar.width.value}`)
	}
	
	index++
}