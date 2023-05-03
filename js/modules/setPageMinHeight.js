export function setPageMinHeight() {
	const activeBlock = document.querySelector('.active')
	if (activeBlock.classList.contains('main-block')) {
		activeBlock.style.maxHeight = `${1928}px`;
	}
	
	if (activeBlock.classList.contains('tests__test-wrapper')) {
		activeBlock.style.minHeight = `${window.innerHeight}px`
	}
	
	if (activeBlock.classList.contains('results') && window.innerHeight >= 639) {
		activeBlock.style.minHeight = `${window.innerHeight + 21}px`
	}
}
