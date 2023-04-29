
import {countdownTimer} from "./countdownTimer.js";

let index = 1

const mainBlock = document.querySelector('.main-block')
const testsBlock = document.querySelector('.tests-block')
const resultsBlock = document.querySelector('.results-block')
const headerBrainImg = document.querySelector('.header__brain-img')
const headerTestBlockTitle = document.querySelector('.header__test-block-title')
const headerResultBlockTitle = document.querySelector('.header__result-block-title')
const headerBasement = document.querySelector('.header__basement')

export function showMainBlock() {
	testsBlock.classList.add('hidden')
	testsBlock.classList.remove('active')
	resultsBlock.classList.add('hidden')
	resultsBlock.classList.remove('active')
	mainBlock.classList.remove('hidden')
	mainBlock.classList.add('active')
	headerTestBlockTitle.classList.add('hidden')
	headerResultBlockTitle.classList.add('hidden')
	headerBrainImg.classList.add('hidden')
	headerBasement.style.height = '46px'
}

export function showTestsOrResults() {
	if (index === 2) {
		showResultsBlock()
	} else {
		showTestsBlock()
	}
}

export function showTestsBlock() {
	mainBlock.classList.add('hidden')
	mainBlock.classList.remove('active')
	resultsBlock.classList.add('hidden')
	resultsBlock.classList.remove('active')
	headerBasement.style.height = '0'
	headerResultBlockTitle.classList.add('hidden')
	headerTestBlockTitle.classList.remove('hidden')
	headerBrainImg.classList.remove('hidden')
	testsBlock.classList.remove('hidden')
	testsBlock.classList.add('active')
}

export function showResultsBlock() {
	mainBlock.classList.add('hidden')
	mainBlock.classList.remove('active')
	testsBlock.classList.add('hidden')
	testsBlock.classList.remove('active')
	headerBasement.style.height = '0px'
	headerTestBlockTitle.classList.add('hidden')
	headerResultBlockTitle.classList.remove('hidden')
	resultsBlock.classList.remove('hidden')
	resultsBlock.classList.add('active')
	
	console.log(`index: ${index}`)
	if (index < 2) {
		countdownTimer("results__timer", 10, 0);
		index++
	}
}