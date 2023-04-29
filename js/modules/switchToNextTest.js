import {showResultsBlock} from "./blockVisibility.js";

const allCheckboxesArray = document.querySelectorAll('.test__answer-checkbox')
const nextTestButton = document.querySelector('.test__next-test-button')
const nextTestButtonWrap = document.querySelector('.test__next-test-button-wrap')
const passedProgressBar = document.querySelector('.test__progress-bar-passed');


export let index = 1
let usersTestAnswers = []
export function switchToNextTest() {
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
	
	function logUsersTestAnswers(usersTestAnswers) {
		console.log(`User's test answers:`)
		usersTestAnswers.forEach(answer => {
			console.log(`${answer}`)
		});
	}
}