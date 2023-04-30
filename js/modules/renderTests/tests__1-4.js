export function renderQuestion(questionNumber, question, answersArray, param) {
	
	const test = document.querySelector(`.question-${questionNumber}`)
	
	// Rendering for questions 1-4, 7:
	
	if (questionNumber > 0 && questionNumber < 5 || questionNumber === 7) {
		test.innerHTML = `
											<div class="test__question">${question}</div>
											${renderAllAnswers(questionNumber)}
											`
	}
	
	// Rendering for questions 5-6:
	
	if (questionNumber > 4 && questionNumber < 7) {
		test.innerHTML = `
											<div class="test__question  mb-20px">
                            <p>Выберите цвет, который</p>
                            <p>сейчас наиболее вам <br>приятен:</p>
                      </div>
                      <div class="test__grid-container">
											${renderAllAnswers(questionNumber)}
											</div>
											`
	}
	
	
	function renderAllAnswers(questionNumber) {
		let html = ''
		
		answersArray.forEach((answer, index) => {
			let htmlSegment = `
															<label class="test__answer ${param}">
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
			return `
      		      <div class="test__answer-bg ${param}"></div>
                <div class="test__answer-checkmark"></div>
                <div class="test__answer-text">${answer}</div>
						   `
		}
		
		if (questionNumber > 4 && questionNumber < 7) {
			return `
								<div class="test__color-box-active">
                <div class="test__color-box_${answer} test__color-box"></div>
                </div>
							 `
		}
	}
	
}