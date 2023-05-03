import {renderTestCheckbox} from "./renderTestCheckbox.js"
import {data} from "../../../testsData.js"

export function renderTest(questionIndex) {
	
	const {questionNumber, question, answers} = data[questionIndex]
	
	// Rendering for tests 1-4, 7, 9:
	
	if (questionNumber > 0 && questionNumber < 5 || questionNumber === 7 || questionNumber === 9) {
		return `<div class="test__question">${question}</div>
						${renderTestCheckbox(questionNumber, answers)}`
	}
	
	// Rendering for tests 5 & 6:
	
	if (questionNumber === 5 || questionNumber === 6) {
		return `<div class="test__question  mb-20px">${question}</div>
            <div class="test__grid-container">
						${renderTestCheckbox(questionNumber, answers)}
						</div>`
	}
	
	// Rendering for tests 8 & 11:
	
	if (questionNumber === 8 || questionNumber === 11) {
		return `<div class="test__question mb-20px">${question}</div>
            <div class="tests__test-${questionNumber}__img-container"></div>
            ${isThereSeparator(questionNumber)}
            <div class="tests__test-${questionNumber}__grid-container">
								${renderTestCheckbox(questionNumber, answers)}
						</div>`
		
		function isThereSeparator(questionNumber) {
			if (questionNumber === 11) return `<div class="tests__test-11__separator"></div>`
			else return ``
		}
	}
	
	// Rendering for tests 10:
	
	if (questionNumber === 10) {
		return `<div class="test__question mb-20px font-size-18px">${question}</div>
              <div class="tests__test-10__img-container"></div>
              ${renderTestCheckbox(questionNumber, answers)}`
	}
	
}

