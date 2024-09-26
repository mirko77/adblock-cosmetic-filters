// ==UserScript==
// @name        3bmeteo.com Enhancements
// @namespace   http://tampermonkey.net/
// @version     1.3
// @description Removes #radar-homepage-container and adjusts mobile padding on 3bmeteo.com
// @author      You
// @match       https://www.3bmeteo.com/*
// @grant       none
// ==/UserScript==

(function() {
  'use strict';

  // Function to remove elements with the specified ID
  function removeRadarContainer() {
    const elements = document.querySelectorAll('#radar-homepage-container');
    for (const element of elements) {
      element.remove();
    }
  }

  // Function to add mobile padding style
  function addMobilePaddingStyle() {
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

  // Wait for the page to load before running the script
  window.addEventListener('load', () => {
    // Remove radar container after page load
    removeRadarContainer();

    // Add mobile padding style
    addMobilePaddingStyle();
  });
})();
