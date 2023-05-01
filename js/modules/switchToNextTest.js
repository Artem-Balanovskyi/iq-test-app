import {showResultsBlock} from "./blockVisibility.js"
import {hideElements, showElements} from "./helpers.js"

const nextTestButton = document.querySelector('.test__next-test-button')
const nextTestButtonWrap = document.querySelector('.test__next-test-button-wrap')
const passedProgressBar = document.querySelector('.test__progress-bar-passed')

export let index = 1
let usersTestAnswers = []
export function switchToNextTest() {
	const allCheckboxesArray = document.querySelectorAll('.test__answer-checkbox')
	const currentTest = document.querySelector(`.test-${index}`)
	const nextTest = document.querySelector((`.test-${index + 1}`))
	const loadingBlock = document.querySelector((`.loading-block`))
	
	if (index < 11) {
		hideElements(currentTest)
		showElements(nextTest)
		nextTestButton.disabled = true
		nextTestButton.classList.remove('enabled')
	} else {
		hideElements(currentTest, nextTestButtonWrap)
		showElements(loadingBlock)
		setTimeout(showResultsBlock, 5000)
	}
	
	allCheckboxesArray.forEach(checkbox => {
		if (checkbox.checked) {
			const answerRecord = `${checkbox.id} : ${checkbox.value}`
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