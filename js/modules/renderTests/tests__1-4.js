export function renderQuestion(questionNumber, question, answersArray, param) {
	
	const test = document.querySelector(`.question-${questionNumber}`)
	
	// Rendering for questions 1-4, 7:
	
	if (questionNumber > 0 && questionNumber < 5 || questionNumber === 7) {
		test.innerHTML = `
											<div class="test__question">
														${question}
											</div>
											${renderAllAnswers(questionNumber, 'test__answer')}
											`
	}
	
	// Rendering for questions 5-6:
	
	if (questionNumber === 5 || questionNumber === 6) {
		test.innerHTML = `
											<div class="test__question  mb-20px">
                            ${question}
                      </div>
                      <div class="test__grid-container">
											${renderAllAnswers(questionNumber, 'test__answer')}
											</div>
											`
	}
	
	// Rendering for questions 8:
	
	if (questionNumber === 8) {
		test.innerHTML = `
											<div class="test__question mb-20px">
                            ${question}
                      </div>
                      <div class="tests__test-8__img-container"></div>
                      <div class="tests__test-8__grid-container">
													${renderAllAnswers(questionNumber, 'test__option-label')}
											</div>
											`
	}
	
	
	function renderAllAnswers(questionNumber, labelClassName) {
		let html = ''
		
		answersArray.forEach((answer, index) => {
			let htmlSegment = `
															<label class="${labelClassName} ${param}">
                            	<input type="checkbox"
                                   value="${answer}"
                                   class="test__answer-checkbox"
                                   id="question-${questionNumber}__answer-${index + 1}"
                                   onclick="window._allImportedFunctions.setOnlyOneCheckbox(this.id)"
                                   
                            	>
                            	${renderSingleAnswer(answer, param)}
                       				</label>
															`
			html += htmlSegment
		})
		return html
	}
	
	function renderSingleAnswer(answer, param) {
		if (questionNumber > 0 && questionNumber < 5 || questionNumber === 7) {
			return   `
      		      <div class="test__answer-bg ${param}"></div>
                <div class="test__answer-checkmark"></div>
                <div class="test__answer-text">${answer}</div>
						   `
		}
		
		if (questionNumber > 4 && questionNumber < 7) {
			return   `
								<div class="test__color-box-active">
                		<div class="test__color-box_${answer} test__color-box"></div>
                </div>
							 `
		}
		
		if (questionNumber === 8) {
			return   `
								<div class="test__option-checkbox">
                		<span>${answer}</span>
                </div>
							 `
		}
	}
	
}