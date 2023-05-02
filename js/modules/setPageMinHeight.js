const results = document.querySelector('.results')
const testsWrapper = document.querySelector('.tests__test-wrapper')
const mainBlock = document.querySelector('.main-block')

let footerBottomStyle = 0

export function setPageMinHeight() {
	testsWrapper.style.minHeight = `${screen.height}px`
	console.log(`screenHeight: ${screen.height} px`)
	console.log(`screenWidth: ${screen.width} px`)
	console.log(`window.innerHeight: ${window.innerHeight} px`)
	console.log(`window.innerWidth: ${window.innerWidth} px`)
	console.log(`testsWrapper: ${testsWrapper.style.minHeight}`)
	// mainBlock.style.maxHeight = `${1928}px`;
	if (screen.height >= 639) {
		results.style.minHeight = `${screen.height + 21}px`
	}
}
