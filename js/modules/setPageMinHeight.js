const results = document.querySelector('.results')
const testsWrapper = document.querySelector('.tests__test-wrapper')
const mainBlock = document.querySelector('.main-block')

let footerBottomStyle = 0

export function setPageMinHeight() {
	testsWrapper.style.minHeight = `${window.innerHeight}px`
	mainBlock.style.maxHeight = `${1928}px`;
	if (screen.height >= 639) {
		results.style.minHeight = `${window.innerHeight + 21}px`
	}
}
