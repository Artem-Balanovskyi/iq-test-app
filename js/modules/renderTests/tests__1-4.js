
export function renderQuestion(questionNumber, question, answersArray, param) {
	const test = document.querySelector(`.question-${questionNumber}`)
	
	test.innerHTML = `
											<div class="test__question">${question}</div>
											${renderAnswersOptions()}
											`
	
	function renderAnswersOptions() {
		let html = ''
		
		answersArray.forEach((answer, index) => {
			let htmlSegment = `
															<label class="test__answer ${param}">
                            	<input type="checkbox"
                                   value="${answer}"
                                   class="test__answer-checkbox"
                                   id="question-${questionNumber}__answer-${index+1}"
                                   onclick="window._allImportedFunctions.setOnlyOneCheckbox(this.id)"
                                   
                            	>
                            	<div class="test__answer-bg ${param}"></div>
                            	<div class="test__answer-checkmark"></div>
                            	<div class="test__answer-text">${answer}</div>
                       				 </label>
															`
			html += htmlSegment
		})
		return html
	}
}