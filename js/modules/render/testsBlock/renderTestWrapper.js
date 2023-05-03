import {renderTest} from "./renderTest.js"
import {renderNextTestButton} from "./renderNextTestButton.js"

export function renderTestWrapper(questionIndex) {
	const testContainer = document.querySelector('.test__container')
	const questionNumber = questionIndex + 1
	
	
	testContainer.innerHTML =  `<div class="test-${questionNumber}">
											            <div class="question-wrap question-${questionNumber}">
											            ${renderTest(questionIndex)}
																	</div>
											        </div>`
	
	renderNextTestButton()
}