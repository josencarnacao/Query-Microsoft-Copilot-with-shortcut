// ==UserScript==
// @name         Query Microsoft Copilot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Open a new tab to query Microsoft Copilot when 'Control + *' is pressed
// @author       Microsoft CoPilot
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to handle keydown events
    function handleKeydown(event) {
        // Check if the pressed key is '*' and if the Control key is held down
        if (event.key === '*' && event.ctrlKey) {
            // Open a new tab to query Microsoft Copilot
            window.open('https://copilot.microsoft.com/query', '_blank');
        }
    }

    // Add the event listener to the document
    document.addEventListener('keydown', handleKeydown, true);
})();