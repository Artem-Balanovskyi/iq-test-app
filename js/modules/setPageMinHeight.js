const results = document.querySelector('.results')
const testsWrapper = document.querySelector('.tests__test-wrapper')

let footerBottomStyle = 0

export function setPageMinHeight() {
	testsWrapper.style.minHeight = `${screen.height}px`
	if (screen.height >= 639) {
		results.style.minHeight = `${screen.height + 21}px`
	}
}