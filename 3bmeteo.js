// ==UserScript==
// @name         Remove Top Padding on Mobile (3bmeteo.com)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes top padding on mobile devices only on 3bmeteo.com
// @author       Your Name
// @match        https://www.3bmeteo.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (window.location.href.startsWith("https://www.3bmeteo.com/")) {
        // Add the CSS rules only on 3bmeteo.com
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 767px) {
                body {
                    padding-top: 0 !important;
                    margin-top:-5px!important;
                }
            }
        `;
        document.head.appendChild(style);
    }
})();
