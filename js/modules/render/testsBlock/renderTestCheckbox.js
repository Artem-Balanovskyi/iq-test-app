import {renderTestAnswer} from "./renderTestAnswer.js"

export function renderTestCheckbox(questionNumber, answers) {
	let html = ''
	let params = setParams(questionNumber)
	
	answers.forEach((answer, index) => {
		
		
		let htmlSegment = `<label class="${params.labelClassName} ${params.firstParam}">
                            	<input type="checkbox"
                                   value="${answer}"
                                   class="test__answer-checkbox"
                                   id="question-${questionNumber}__answer-${index + 1}"
                                   onclick="window._allImportedFunctions.setOnlyOneCheckbox(this.id)"
                                   
                            	>
                            	${renderTestAnswer(questionNumber, answer, params)}
                       				</label>`
		html += htmlSegment
	})
	return html
}

function setParams(questionNumber) {
	
	let params = {
		firstParam: '',
		secondParam: '',
		labelClassName: 'test__answer'
	}
	
	if (questionNumber === 4 || questionNumber === 7)
		params.firstParam = 'height-40px'
	if (questionNumber === 5 || questionNumber === 6)
		params.firstParam = 'color-label'
	if (questionNumber === 9)
		params.firstParam = 'height-78px'
	params.secondParam = 'mr-15px'
	if (questionNumber === 8 || questionNumber === 11)
		params.labelClassName = 'test__option-label'
	
	return params
}