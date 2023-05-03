export function burgerHandler() {
	const burgerItem = document.querySelector('.burger')
	const headerMenu = document.querySelector('.header__nav')
	const menuCloseItem = document.querySelector('.header__nav-close')
	const menuLinks = document.querySelectorAll('.header__link')
	
	
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
		const activeBlock = document.querySelector('.active')
		
		headerMenu.style.height = `${activeBlock.clientHeight}px`
	}
}

