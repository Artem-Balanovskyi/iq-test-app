import {setOnlyOneCheckbox} from "./modules/setOnlyOneCheckbox.js"
import {switchToNextTest} from "./modules/switchToNextTest.js"
import {getServerResponse} from "./modules/getServerResponse.js"
import {setPageMinHeight} from "./modules/setPageMinHeight.js"
import {renderMainBlock} from "./modules/render/renderMainBlock.js"
import {renderTestsBlock} from "./modules/render/testsBlock/renderTestsBlock.js"

window._allImportedFunctions = {renderMainBlock, renderTestsBlock, setOnlyOneCheckbox, switchToNextTest, renderResults: getServerResponse}

renderMainBlock()
window.onresize = setPageMinHeight

