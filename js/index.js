import {burgerHandler} from "./modules/burgerHandler.js"
import {smoothScrollToAnchor} from "./modules/smoothScrollToAnchor.js"
import {showMainBlock, showTestsOrResults} from "./modules/blockVisibility.js"
import {setOnlyOneCheckbox} from "./modules/setOnlyOneCheckbox.js"
import {switchToNextTest} from "./modules/switchToNextTest.js"
import {renderResults} from "./modules/renderResults.js"
import {renderQuestion} from "./modules/renderTests/tests__1-4.js"

window._allImportedFunctions = {showMainBlock, showTestsOrResults, setOnlyOneCheckbox, switchToNextTest, renderResults}

burgerHandler()
smoothScrollToAnchor()

const testsData = {
	firstTestQuestion: 'Ваш пол:',
	firstTestAnswers: ['Мужчина', 'Женщина'],
	secondTestQuestion: 'Укажите ваш возраст:',
	secondTestAnswers: ['До 18', 'От 18 до 28', 'От 29 до 35', 'От 36'],
	thirdTestQuestion: 'Выберите лишнее:',
	thirdTestAnswers: ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина'],
	fourthTestQuestion: `<p>Продолжите числовой ряд:</p><p>18 20 24 32</p>`,
	fourthTestAnswers: ['62', '48', '74', '57', '60', '77'],
}

renderQuestion(1, testsData.firstTestQuestion, testsData.firstTestAnswers)
renderQuestion(2, testsData.secondTestQuestion, testsData.secondTestAnswers)
renderQuestion(3, testsData.thirdTestQuestion, testsData.thirdTestAnswers)
renderQuestion(4, testsData.fourthTestQuestion, testsData.fourthTestAnswers, 'height-40px')
