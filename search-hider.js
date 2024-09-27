// ==UserScript==
// @name        Hide Google Search Results by Domain
// @namespace   http://tampermonkey.net/
// @version     1.0
// @description Hides Google search results from specified domains
// @author      You
// @match       https://www.google.com/search?*
// @grant       none
// ==/UserScript==

(function() {
  'use strict';

  // Define domains to hide (replace with the domains you want to hide)
  const blockedDomains = ['facebook.com', 'instagram.com', 'twitter.com'];

  // Function to hide search results
  function hideSearchResults() {
    const searchResults = document.querySelectorAll('.g'); // Target search results using the `.g` class
    for (const result of searchResults) {
      const link = result.querySelector('a'); // Find the link element within the search result
      if (link) {
        const href = link.href;
        for (const domain of blockedDomains) {
          if (href.includes(domain)) {
            result.style.display = 'none';
            break; // Stop iterating through blockedDomains if a match is found
          }
        }
      }
    }
  }

  // Run the script immediately
  hideSearchResults();

  // Optionally, observe for changes (e.g., pagination)
  // const observer = new MutationObserver(hideSearchResults);
  // observer.observe(document.body, { childList: true, subtree: true });
})();
