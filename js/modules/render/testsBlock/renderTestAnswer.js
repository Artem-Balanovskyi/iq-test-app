export function renderTestAnswer(questionNumber, answer, params) {
	
	// Rendering for tests 1-4, 7, 9, & 10:
	if (questionNumber > 0 && questionNumber < 5 || questionNumber === 7 || questionNumber === 9 || questionNumber === 10) {
		return `<div class="test__answer-bg ${params.firstParam}"></div>
              <div class="test__answer-checkmark ${params.secondParam}"></div>
              <div class="test__answer-text">${answer}</div>`
	}
	
	// Rendering for tests 5 & 6:
	if (questionNumber === 5 || questionNumber === 6) {
		return ` <div class="test__color-box-active">
                	<div class="test__color-box_${answer} test__color-box"></div>
              </div>`
	}
	
	// Rendering for tests 8 & 11:
	if (questionNumber === 8 || questionNumber === 11) {
		return `<div class="test__option-checkbox">
                	<span>${answer}</span>
              </div>`
	}
}