export function renderLoadingBlock() {
	const testContainer = document.querySelector('.test__container')
	const nextButtonWrap = document.querySelector('.test__next-test-button-wrap')
	
	testContainer.innerHTML = `<div class="loading-block">
							                    <div class="question-wrap">
							                        <div class="test__loading-block__title">
							                            <p>Обработка <br>результатов</p>
							                        </div>
							                        <div class="tests__loading-block__img-container"></div>
							                        <div class="tests__loading-block__text-box">
							                            <p>Определение стиля мышления...........</p>
							                            <p>........................................................</p>
							                        </div>
							                    </div>
							                </div>`
	
	nextButtonWrap.innerHTML = ''
}