// This listens for when a user visits a new website
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    
    // Example: Check if the URL contains "phishing" or "test-threat"
    if (tab.url.includes("suspicious-site.com")) {
      // Change the icon to your 'warning' version
      chrome.action.setIcon({
        path: {
          "16": "images/icon16.png",
          "48": "images/icon48.png",
          "128": "images/icon128.png"
        },
        tabId: tabId
      });
      
      // Add a red badge that says "!"
      chrome.action.setBadgeBackgroundColor({color: '#FF0000'});
      chrome.action.setBadgeText({text: "!", tabId: tabId});
    }
  }
});