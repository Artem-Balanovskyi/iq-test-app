import {burgerHandler} from "./modules/burgerHandler.js"
import {smoothScrollToAnchor} from "./modules/smoothScrollToAnchor.js"
import {showMainBlock, showTestsOrResults} from "./modules/blockVisibility.js"
import {setOnlyOneCheckbox} from "./modules/setOnlyOneCheckbox.js"
import {switchToNextTest} from "./modules/switchToNextTest.js"
import {renderResults} from "./modules/renderResults.js"
import {renderTests} from "./modules/renderTests.js"
import {renderTestWrappers} from "./modules/renderTestWrappers.js";
import { setPageMinHeight} from "./modules/setPageMinHeight.js";
import {data} from "./testsData.js";

window._allImportedFunctions = {showMainBlock, showTestsOrResults, setOnlyOneCheckbox, switchToNextTest, renderResults}

burgerHandler()
smoothScrollToAnchor()

renderTestWrappers(Object.keys(data))

setPageMinHeight()
window.onresize = setPageMinHeight

data.forEach(test => {
	if (test.questionNumber === 4 || test.questionNumber === 7)
		renderTests(test.questionNumber, test.question, test.answers, 'height-40px')
	else if (test.questionNumber === 5 || test.questionNumber === 6)
		renderTests(test.questionNumber, test.question, test.answers, 'color-label')
	else if (test.questionNumber === 9)
		renderTests(test.questionNumber, test.question, test.answers, 'height-78px', 'mr-15px')
	else
		renderTests(test.questionNumber, test.question, test.answers)
})
