export function renderTestWrappers(questionsIndexes) {
	const tests = document.querySelector(`.tests__container`)
	let html = ''
	
	questionsIndexes.forEach(questionIndex => {
		
		questionIndex++
		let htmlSegment
		
		if (questionIndex === 1) {
			 htmlSegment = `
																<div class="test-${questionIndex}">
														        <div class="question-wrap question-${questionIndex}"></div>
														    </div>
															 `
		} else {
			 htmlSegment = `
																<div class="test-${questionIndex} hidden">
														        <div class="question-wrap question-${questionIndex}"></div>
														    </div>
															 `
		}
		html += htmlSegment
	})

	tests.innerHTML = html
}