export function renderHeaderBar () {
	const headerBar = document.querySelector('.header__bar')
	const activeBlock = document.querySelector('.active')
	
	const burger = `<div class="header__burger burger">
			                        <span class="burger__line burger__line_first"></span>
			                        <span class="burger__line burger__line_second"></span>
			                        <span class="burger__line burger__line_third"></span>
                   		  </div>`
	
	if (activeBlock.classList.contains('main-block')) {
		headerBar.innerHTML = burger
	}
	
	if (activeBlock.classList.contains('tests__test-wrapper')) {
		headerBar.innerHTML = burger + `<div class="header__brain-img "></div>
	                                  <div class="header__test-block-title "><p>тест на определение IQ</p></div>`
	}
	
	if (activeBlock.classList.contains('results')) {
		headerBar.innerHTML = burger + `<div class="header__brain-img"></div>
                        					  <div class="header__result-block-title"><p>Готово!</p></div>`
	}
}