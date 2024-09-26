// ==UserScript==
// @name        Eurosport.it Enhancements
// @namespace   http://tampermonkey.net/
// @version     1.2
// @description Removes unwanted elements on eurosport.it and automatically clicks .close-button
// @author      You
// @match       https://www.eurosport.it/*
// @grant       none
// ==/UserScript==

(function() {
  'use strict';

  // Function to remove elements with a specific class
  function removeElementsByClass(className) {
    const elements = document.querySelectorAll(className);
    for (const element of elements) {
      element.remove();
    }
  }

  // Function to remove elements with a specific data-testid attribute
  function removeElementsByDataTestId(dataTestId) {
    const elements = document.querySelectorAll(`[data-testid="${dataTestId}"]`);
    for (const element of elements) {
      element.remove();
    }
  }

  // Function to automatically click the .close-button element
  function clickCloseButton() {
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
      closeButton.click();
    }
  }

  // Remove elements immediately
  removeElementsByClass('.bg-onDark-03');
  removeElementsByDataTestId('organism-smart-banner');
  removeElementsByDataTestId('molecule-marketing-block');
  removeElementsByDataTestId('molecule-app-download-banner-header');

  // Optionally, observe for changes and remove newly added elements
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      for (const addedNode of mutation.addedNodes) {
        if (addedNode.classList.contains('bg-onDark-03')) {
          removeElementsByClass('bg-onDark-03');
        } else if (addedNode.hasAttribute('data-testid')) {
          const dataTestId = addedNode.getAttribute('data-testid');
          if (dataTestId === 'organism-smart-banner' || dataTestId === 'molecule-marketing-block') {
            removeElementsByDataTestId(dataTestId);
          }
            if (dataTestId === 'molecule-app-download-banner-header') {
addedNode.remove();
            }
        }

        // Check for newly added .close-button elements
        if (addedNode.classList.contains('close-button')) {
          clickCloseButton();
        }
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Check for existing .close-button elements
  clickCloseButton();
})();
