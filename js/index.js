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

// Results block timer

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

// Pass test buttons

const mainBlock = document.querySelector('.main-block')
const testBlock = document.querySelector('.tests-block')
const resultsBlock = document.querySelector('.results-block')
const headerBasement = document.querySelector('.header__basement')
const allCheckboxesArray = document.querySelectorAll('.test__answer-checkbox')
const nextTestButton = document.querySelector('.test__next-test-button')
const nextTestButtonWrap = document.querySelector('.test__next-test-button-wrap')
const headerBrainImg = document.querySelector('.header__brain-img')
const headerTestBlockTitle = document.querySelector('.header__test-block-title')
const headerResultBlockTitle = document.querySelector('.header__result-block-title')
const passedProgressBar = document.querySelector('.test__progress-bar-passed')

function showMainBlock() {
	``
	testBlock.classList.add('hidden')
	resultsBlock.classList.add('hidden')
	mainBlock.classList.remove('hidden')
	headerTestBlockTitle.classList.add('hidden')
	headerResultBlockTitle.classList.add('hidden')
	headerBrainImg.classList.add('hidden')
	headerBasement.style.height = '46px'
}

function showTestsBlock() {
	mainBlock.classList.add('hidden')
	resultsBlock.classList.add('hidden')
	headerBasement.style.height = '0'
	headerResultBlockTitle.classList.add('hidden')
	headerTestBlockTitle.classList.remove('hidden')
	headerBrainImg.classList.remove('hidden')
	testBlock.classList.remove('hidden')
}

function showResultsBlock() {
	testBlock.classList.add('hidden')
	// headerBasement.style.height = '46px'
	headerTestBlockTitle.classList.add('hidden')
	headerResultBlockTitle.classList.remove('hidden')
	resultsBlock.classList.remove('hidden')
	countdown("results__timer", 10, 0);
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
	const loadingBlock = document.querySelector((`.loading-block`))
	
	if (index < 11) {
		currentTest.classList.add('hidden')
		nextTest.classList.remove('hidden')
		nextTestButton.disabled = true
		nextTestButton.classList.remove('enabled')
	} else {
		currentTest.classList.add('hidden')
		loadingBlock.classList.remove('hidden')
		nextTestButtonWrap.classList.add('hidden')
		setTimeout(showResultsBlock, 5000)
	}
	
	allCheckboxesArray.forEach(checkbox => {
		const answerRecord = `${checkbox.id} : ${checkbox.value}`
		
		if (checkbox.checked) {
			usersTestAnswers.push(answerRecord)
		}
		
	})
	passedProgressBar.style.width = `${21.5 * (index + 1)}px`
	index++
	if (index === 12) logUsersTestAnswers(usersTestAnswers)
	function logUsersTestAnswers (usersTestAnswers) {
		console.log(`User's test answers:`)
		usersTestAnswers.forEach(answer => {
			console.log(`${answer}`)
		});
	}
}


const responseDataBlock = document.querySelector('.results__response-data')

async function fetchResults() {
	let url = 'https://swapi.dev/api/people/1'
	
	try {
		
		let response = await fetch(url)
		return await response.json();
		
	} catch (error) {
		responseDataBlock.innerHTML = `
Sorry, something goes wrong :(<br>
Try again later.<br>
${error.name}: ${error.message}
`
	
	}
}

async function renderResults() {
	document.querySelector('.results__button-wrap').style.marginBottom = '15px'
	
	let data = await fetchResults();
	console.log(data)
	let html = '';
	
	for (let [key, value] of Object.entries(data)) {
		function isValueObject(value) {
			let html = ''
			if (typeof value === "object") {
				for (let i = 1; i < value.length; i++) {
					let htmlSegment = `<p class="value">${value[i]}</p>`
					html += htmlSegment;
				}
				return html
			}
			return value
		}
		
		
		let htmlSegment = `<div class="result">
<hr>
 <p class="key">${key}:</p>
<p class="value">${isValueObject(value)}</p>
<hr>
                        </div>`;
		
		html += htmlSegment;
	}
	
	
	responseDataBlock.innerHTML = html;
}