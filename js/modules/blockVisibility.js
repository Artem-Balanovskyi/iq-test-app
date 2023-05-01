import {countdownTimer} from "./countdownTimer.js"
import {showElements, hideElements} from "./helpers.js"

const mainBlock = document.querySelector('.main-block')
const testsBlock = document.querySelector('.tests-block')
const resultsBlock = document.querySelector('.results-block')
const headerBrainImg = document.querySelector('.header__brain-img')
const headerTestBlockTitle = document.querySelector('.header__test-block-title')
const headerResultBlockTitle = document.querySelector('.header__result-block-title')
const headerBasement = document.querySelector('.header__basement')

let index = 1

export function showMainBlock() {
	deactivateBlocks(testsBlock, resultsBlock)
	hideElements(headerTestBlockTitle, headerResultBlockTitle, headerBrainImg)
	headerBasement.style.height = '46px'
	activateBlocks(mainBlock)
}

export function showTestsOrResults() {
	if (index === 2) {
		showResultsBlock()
	} else {
		showTestsBlock()
	}
}

export function showTestsBlock() {
	deactivateBlocks(mainBlock, resultsBlock)
	headerBasement.style.height = '0'
	hideElements(headerResultBlockTitle)
	showElements(headerTestBlockTitle, headerBrainImg)
	activateBlocks(testsBlock)
}

export function showResultsBlock() {
	deactivateBlocks(mainBlock, testsBlock)
	headerBasement.style.height = '0'
	hideElements(headerTestBlockTitle)
	showElements(headerResultBlockTitle)
	activateBlocks(resultsBlock)
	
	if (index < 2) {
		countdownTimer("results__timer", 10, 0);
		index++
	}
}

function activateBlocks(...blocks) {
	blocks.forEach(block => {
		block.classList.remove('hidden')
		block.classList.add('active')
	})
}

function deactivateBlocks(...blocks) {
	blocks.forEach(block => {
		block.classList.add('hidden')
		block.classList.remove('active')
	})
}