import {renderTestWrapper} from "./render/testsBlock/renderTestWrapper.js"
import {renderLoadingBlock} from "./render/testsBlock/renderLoadingBlock.js"
import {renderResultsBlock} from "./render/renderResultsBlock.js"
import {data} from "../testsData.js"

let questionIndex = 1
let usersTestAnswers = []

export function switchToNextTest() {
	const nextTestButton = document.querySelector('.test__next-test-button')
	const allCheckboxesArray = document.querySelectorAll('.test__answer-checkbox')
	
	if (questionIndex < data.length) {
		renderTestWrapper(questionIndex)
		nextTestButton.disabled = true
		nextTestButton.classList.remove('enabled')
	} else {
		renderLoadingBlock()
		setTimeout(renderResultsBlock, 5000)
	}
	
	allCheckboxesArray.forEach(checkbox => {
		if (checkbox.checked) {
			const answerRecord = `${checkbox.id} : ${checkbox.value}`
			usersTestAnswers.push(answerRecord)
		}
	})
	
	const passedProgressBar = document.querySelector('.test__progress-bar-passed')
	passedProgressBar.style.width = `${21.5 * (questionIndex + 1)}px`
	questionIndex++
	
	if (questionIndex > data.length) logUsersTestAnswers(usersTestAnswers)
	
	function logUsersTestAnswers(usersTestAnswers) {
		console.log(`User's test answers:`)
		usersTestAnswers.forEach(answer => {
			console.log(`${answer}`)
		});
	}
	
}

export function restartTests() {
	questionIndex = 1
}