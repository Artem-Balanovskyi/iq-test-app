import {burgerHandler} from "./modules/burgerHandler.js";
import {smoothScrollToAnchor} from "./modules/smoothScrollToAnchor.js";
import {showMainBlock, showTestsOrResults} from "./modules/blockVisibility.js";
import {setOnlyOneCheckbox} from "./modules/setOnlyOneCheckbox.js";
import {switchToNextTest} from "./modules/switchToNextTest.js";
import {renderResults} from "./modules/renderResults.js";


window._allImportedFunctions = {showMainBlock, showTestsOrResults, setOnlyOneCheckbox, switchToNextTest, renderResults}


burgerHandler()
smoothScrollToAnchor()





