// ==UserScript==
// @name        Eurosport.it Enhancements
// @namespace   http://tampermonkey.net/
// @version     1.0
// @description Removes unwanted elements on eurosport.it
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

  // Remove elements immediately
  removeElementsByClass('.bg-onDark-03');
  removeElementsByDataTestId('organism-smart-banner');
  removeElementsByDataTestId('molecule-marketing-block');

  // Optionally, observe for changes and remove newly added elements
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      for (const addedNode of mutation.addedNodes) {
        if (addedNode.classList.contains('bg-onDark-03')) {
          addedNode.remove();
        } else if (addedNode.hasAttribute('data-testid')) {
          const dataTestId = addedNode.getAttribute('data-testid');
          if (dataTestId === 'organism-smart-banner' || dataTestId === 'molecule-marketing-block') {
            addedNode.remove();
          }
            if (dataTestId === 'molecule-app-download-banner-header') {
            addedNode.remove();
          }
        }
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
