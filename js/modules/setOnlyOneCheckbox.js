const nextTestButton = document.querySelector('.test__next-test-button')
const allCheckboxesArray = document.querySelectorAll('.test__answer-checkbox')

export function setOnlyOneCheckbox(id) {
	const checkedAnswer = document.getElementById(id)
	
	allCheckboxesArray.forEach(checkbox => {
		checkbox.checked = false
	})
	
	checkedAnswer.checked = true
	
	nextTestButton.disabled = false
	nextTestButton.classList.add('enabled')
}