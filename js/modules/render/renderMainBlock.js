import {setPageMinHeight} from "../setPageMinHeight.js";
import {burgerHandler} from "../burgerHandler.js";
import {smoothScrollToAnchor} from "../smoothScrollToAnchor.js";
import {renderHeaderBar} from "./renderHeaderBar.js";

export function renderMainBlock() {
	const main = document.querySelector('.main')
	
	main.innerHTML = `
										<section class="main-block active" id="main">
									
									            <!--Proposal start-->
									            <div class="proposal">
									                <div class="proposal__text-block-1">
									                    <p>Пройдите точный и быстрый</p>
									                </div>
									                <div class="proposal__text-block-2">
									                    <p>тест на <br> определение <br> iq</p>
									                </div>
									                <div class="proposal__button-wrap">
									                    <input class="proposal__button pass-test-button"
									                           type="button"
									                           value="пройти тест"
									                           onclick="window._allImportedFunctions.renderTestsBlock(0)"
									                    >
									                </div>
									                <div class="proposal__text-block-3">
									                    <p><span>И получите рекомендации <br>
									                    по развитию своего интеллекта <br> </span>
									                        и улучшению финансового <br>
									                        благосостояния и личной жизни</p>
									                </div>
									                <div class="proposal__arrow ">
									                    <a href="#test-info" class="proposal__arrow__link js-scroll"></a>
									                </div>
									                <div class="proposal__details">
									                    <a href="#test-info" class="proposal__details__link js-scroll">Подробнее</a>
									                </div>
									            </div>
									            <!--Proposal end-->
									
									            <div class="shift-content wrapper">
									
									                <!--Quote start-->
									                <div class="quote__wrapper" id="test-info">
									                    <div class="quote__container">
									                        <div class="quote__img-top"></div>
									                        <div class="quote__text-block">
									                            <p>Профессиональный</p>
									                            <p>IQ-тест позволяет не</p>
									                            <p>только определить</p>
									                            <p>коэффициент вашего</p>
									                            <p>интеллекта,</p>
									                            <p>но и выработать список</p>
									                            <p>рекомендаций для</p>
									                            <p>повышения этого</p>
									                            <p>показателя.</p>
									                        </div>
									                        <div class="quote__img-bottom"></div>
									                    </div>
									                </div>
									                <!--Quote end-->
									
									                <!--Advise start-->
									                <div class="advice__wrapper">
									                    <div class="advice__text-block">
									                        <p>Также по результатам теста</p>
									                        <p><span class="uppercase">вы получите</span> подробные</p>
									                        <p><span class="uppercase">советы</span> по определению наиболее</p>
									                        <p>перспективной <span class="uppercase">для вашего</span></p>
									                        <p><span class="uppercase">типа</span> <span>интеллекта</span><span
									                                class="uppercase"> сферы</span></p>
									                        <p><span class="uppercase">деятельности,</span></p>
									                        <p>которая принесет вам скорейший</p>
									                        <p>финансовый результат.</p>
									                    </div>
									                    <div class="advice__image"></div>
									                    <div class="advice__button-wrap">
									                        <input class="advice__button pass-test-button"
									                               type="button"
									                               value="пройти тест"
									                               onclick="window._allImportedFunctions.renderTestsBlock(0)"
									                        >
									                    </div>
									                </div>
									                <!--Advice end-->
									
									                <!--Details start-->
									                <div class="details__wrapper">
									                    <div class="details__lightning-right"></div>
									                    <div class="details__lightning-left"></div>
									                    <div class="details__text-blocks">
									                    <div class="details__text-block-1">
									                        <p>Прохождение теста займет у</p>
									                        <p>вас не более <span>12 минут</span>, а его</p>
									                        <p>результаты вы сможете</p>
									                        <p><span>использовать всю жизнь.</span></p>
									                    </div>
									                    <div class="details__text-block-2">
									                        <p>Профессиональная</p>
									                        <p>интерпретация и детально</p>
									                        <p><span>проработанные</span></p>
									                        <p><span>рекомендации</span> позволят вам</p>
									                        <p>качественно <span>изменить все</span></p>
									                        <p><span>аспекты своей жизни:</span> от</p>
									                        <p>финансового до любовного.</p>
									                    </div>
									                    </div>
									                    <div class="details__button-wrap">
									                        <input class="details__button pass-test-button"
									                               type="button"
									                               value="пройти тест"
									                               onclick="window._allImportedFunctions.renderTestsBlock(0)">
									                    </div>
									                    <div class="details__copyright">
									                        <div class="details__copyright-img">
									                            <div class="details__copyright-char"></div>
									                        </div>
									                        <div class="details__copyright-year">
									                            <p>2019</p>
									                        </div>
									                    </div>
									                </div>
									                <!--Details end  -->
									
									            </div>
									  </section>
				 						`
	
	renderHeaderBar()
	setPageMinHeight()
	burgerHandler()
	smoothScrollToAnchor()
}