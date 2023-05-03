import {setPageMinHeight} from "../setPageMinHeight.js"
import {burgerHandler} from "../burgerHandler.js"
import {smoothScrollToAnchor} from "../smoothScrollToAnchor.js"
import {renderHeaderBar} from "./renderHeaderBar.js"
import {countdownTimer} from "../countdownTimer.js";

let index = 1

export function renderResultsBlock() {
	const headerBasement = document.querySelector('.header__basement')
	const main = document.querySelector('.main')
	
	headerBasement.style.height = '0'
	
	main.innerHTML = `<section class="results-block" id="results">
						            <div class="results active">
						                <div class="results__text-block-1">
						                    <p>Ваш результат рассчитан:</p>
						                </div>
						                <div class="results__text-block-2">
						                    <p><span>Вы относитесь к 3%</span> респондентов, чей</p>
						                    <p>уровень интеллекта более чем на</p>
						                    <p>15 пунктов отличается от среднего в</p>
						                    <p>большую или меньшую сторону!</p>
						                </div>
						                <div class="results__call-us-now">
						                    <div class="results__text-block-3">
						                        <p>Скорее получите свой</p>
						                        <p>результат!</p>
						                    </div>
						                    <div class="results__text-block-4-wrap">
						                        <div class="results__text-block-4">
						                            <p>в целях защиты персональных</p>
						                            <p>данных результат теста, их</p>
						                            <p>подробная интерпретация и</p>
						                            <p>рекомендации доступны в виде</p>
						                            <p>голосового сообщения по звонку с</p>
						                            <p>вашего мобильного телефона</p>
						                        </div>
						                    </div>
						                    <div class="results__text-block-5">
						                        <p>Звоните скорее, запись доступна всего</p>
						                        <p><span id="results__timer">10:00</span> минут</p>
						                    </div>
						                </div>
						                <button class="results__button-wrap" type="submit"
						                        onclick="window._allImportedFunctions.renderResults()">
						                    <div class="results__button">
						                        <p>Позвонить и прослушать</p>
						                        <p>результат </p>
						                    </div>
						                </button>
						                <div class="results__response">
						                    <div class="results__response-data"></div>
						                </div>
						                <div class="results__lightning-right"></div>
						                <div class="results__lightning-left"></div>
						                <footer class="footer">
						                    <p>TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU</p>
						                    <p>DE DIVERTISMENT. PRIN FOLOSIREA LUI</p>
						                    <p>DECLARATI CA AVETI 18 ANI IMPLINITI.</p>
						                </footer>
						
						            </div>
						        </section>`
	
	renderHeaderBar()
	setPageMinHeight()
	burgerHandler()
	smoothScrollToAnchor()
	countdownTimer("results__timer", 10, 0);
}