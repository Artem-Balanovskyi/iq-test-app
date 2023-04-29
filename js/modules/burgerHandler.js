export function burgerHandler() {
	const burgerItem = document.querySelector('.burger')
	const headerMenu = document.querySelector('.header__nav')
	const menuCloseItem = document.querySelector('.header__nav-close')
	const menuLinks = document.querySelectorAll('.header__link')
	const mainBlock = document.querySelector('.main-block')
	const testsBlock = document.querySelector('.tests-block')
	const resultsBlock = document.querySelector('.results-block')
	
	
	burgerItem.addEventListener('click', () => {
		setActiveBlockHeaderMenuHeight()
		headerMenu.classList.add('header__nav_active')
	});
	
	menuCloseItem.addEventListener('click', () => {
		headerMenu.classList.remove('header__nav_active')
	})
	
	for (let i = 0; i < menuLinks.length; i++) {
		menuLinks[i].addEventListener('click', () => {
			headerMenu.classList.remove('header__nav_active')
		})
	}
	
	function setActiveBlockHeaderMenuHeight() {
		const headerMenu = document.querySelector('.header__nav')
		
		if (mainBlock.classList.contains('active')) {
			headerMenu.style.height = '100%'
		}
		if (testsBlock.classList.contains('active')) {
			const testsBlockHeight = document.querySelector('.tests__test-wrapper').clientHeight
			headerMenu.style.height = `${testsBlockHeight}px`
		}
		if (resultsBlock.classList.contains('active')) {
			const resultsBlockHeight = document.querySelector('.results').clientHeight
			headerMenu.style.height = `${resultsBlockHeight}px`
		}
	}
}

