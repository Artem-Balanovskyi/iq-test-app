export function renderNextTestButton () {
	const nextButtonWrap = document.querySelector('.test__next-test-button-wrap')
	nextButtonWrap.innerHTML = `<input class="test__next-test-button"
									                   type="button"
									                   value="далее"
									                   onclick="window._allImportedFunctions.switchToNextTest()"
									                   disabled>`
}