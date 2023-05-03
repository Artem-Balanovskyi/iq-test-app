import {renderTestWrapper} from "./renderTestWrapper.js"
import {setPageMinHeight} from "../../setPageMinHeight.js"
import {burgerHandler} from "../../burgerHandler.js"
import {smoothScrollToAnchor} from "../../smoothScrollToAnchor.js"
import {renderHeaderBar} from "../renderHeaderBar.js"
import {restartTests} from "../../switchToNextTest.js"

export function renderTestsBlock(questionIndex) {
	const headerBasement = document.querySelector('.header__basement')
	const main = document.querySelector('.main')
	
	if (questionIndex === 0) restartTests()
	
	headerBasement.style.height = '0'
	
	main.innerHTML = `
										<section class="tests-block">
										            <div class="tests__test-wrapper active">
												            <div class="test__progress-bar-total">
														            <div class="test__progress-bar-passed"></div>
														        </div>
														        
														        <div class="test__container"></div>
												            		
										            <div class="test__next-test-button-wrap"></div>
										            </div>
										</section>
									 `
	
	renderTestWrapper(questionIndex)
	
	renderHeaderBar()
	setPageMinHeight()
	burgerHandler()
	smoothScrollToAnchor()
}