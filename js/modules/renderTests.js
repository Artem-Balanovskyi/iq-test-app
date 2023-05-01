export function renderTests(questionNumber, question, answersArray, ...param) {
	
	const test = document.querySelector(`.question-${questionNumber}`)
	
	// Rendering for tests 1-4, 7, 9:
	
	if (questionNumber > 0 && questionNumber < 5 || questionNumber === 7 || questionNumber === 9) {
		test.innerHTML = `
											<div class="test__question">
														${question}
											</div>
											${renderCheckboxes(questionNumber, 'test__answer')}
											`
	}
	
	// Rendering for tests 5 & 6:
	
	if (questionNumber === 5 || questionNumber === 6) {
		test.innerHTML = `
											<div class="test__question  mb-20px">
                            ${question}
                      </div>
                      <div class="test__grid-container">
											${renderCheckboxes(questionNumber, 'test__answer')}
											</div>
											`
	}
	
	// Rendering for tests 8 & 11:
	
	if (questionNumber === 8 || questionNumber === 11) {
		test.innerHTML = `
											<div class="test__question mb-20px">
                            ${question}
                      </div>
                      <div class="tests__test-${questionNumber}__img-container"></div>
                      ${isThereSeparator(questionNumber)}
                      <div class="tests__test-${questionNumber}__grid-container">
													${renderCheckboxes(questionNumber, 'test__option-label')}
											</div>
											`
		
		function isThereSeparator(questionNumber) {
			if (questionNumber === 11) return `<div class="tests__test-11__separator"></div>`
			else return ``
		}
	}
	
	// Rendering for tests 10:
	
	if (questionNumber === 10) {
		test.innerHTML = `
											<div class="test__question mb-20px font-size-18px">
                            ${question}
                        </div>
                        <div class="tests__test-10__img-container"></div>
                        ${renderCheckboxes(questionNumber, 'test__answer')}
											`
	}
	
	
	function renderCheckboxes(questionNumber, labelClassName) {
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
                            	${renderAnswer(answer, param)}
                       				</label>
															`
			html += htmlSegment
		})
		return html
	}
	
	function renderAnswer(answer, param) {
		
		// Rendering for tests 1-4, 7, 9, & 10:
		if (questionNumber > 0 && questionNumber < 5 || questionNumber === 7 || questionNumber === 9 || questionNumber === 10) {
			return `
      		    <div class="test__answer-bg ${param[0]}"></div>
              <div class="test__answer-checkmark ${param[1]}"></div>
              <div class="test__answer-text">${answer}</div>
						 `
		}
		
		// Rendering for tests 5 & 6:
		if (questionNumber === 5 || questionNumber === 6) {
			return `
						  <div class="test__color-box-active">
                	<div class="test__color-box_${answer} test__color-box"></div>
              </div>
						 `
		}
		
		// Rendering for tests 8 & 11:
		if (questionNumber === 8 || questionNumber === 11) {
			return `
							<div class="test__option-checkbox">
                	<span>${answer}</span>
              </div>
						 `
		}
	}
	
}