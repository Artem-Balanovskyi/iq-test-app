export function renderQuestion(questionNumber, question, answersArray, ...param) {
	const test = document.querySelector(`.question-${questionNumber}`)
	
	// Rendering for questions 1-4, 7, 9:
	
	if (questionNumber > 0 && questionNumber < 5 || questionNumber === 7 || questionNumber === 9) {
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
	
	// Rendering for questions 10:
	
	if (questionNumber === 10) {
		test.innerHTML = `
											<div class="test__question mb-20px font-size-18px">
                            ${question}
                        </div>
                        <div class="tests__test-10__img-container"></div>
                        ${renderAllAnswers(questionNumber, 'test__answer')}
											`
	}
	
	// Rendering for questions 11:
	
	if (questionNumber === 11) {
		test.innerHTML = `

											<div class="test__question mb-20px">
                            ${question}
                      </div>
                      <div class="tests__test-11__img-container"></div>
                      <div class="tests__test-11__separator"></div>
                      <div class="tests__test-11__grid-container">
													${renderAllAnswers(questionNumber, 'test__option-label')}
											</div>
											`
	}
	
	function renderAllAnswers(questionNumber, labelClassName) {
		let html = ''
		
		answersArray.forEach((answer, index) => {
			let htmlSegment = `
															<label class="${labelClassName} ${param[0]}">
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
		
		if (questionNumber > 0 && questionNumber < 5 || questionNumber === 7 || questionNumber === 9 || questionNumber === 10) {
			return `
      		      <div class="test__answer-bg ${param[0]}"></div>
                <div class="test__answer-checkmark ${param[1]}"></div>
                <div class="test__answer-text">${answer}</div>
						   `
		}
		
		if (questionNumber === 5 || questionNumber === 6) {
			return `
								<div class="test__color-box-active">
                		<div class="test__color-box_${answer} test__color-box"></div>
                </div>
							 `
		}
		
		if (questionNumber === 8 || questionNumber === 11) {
			return `
								<div class="test__option-checkbox">
                		<span>${answer}</span>
                </div>
							 `
		}
	}
	
}