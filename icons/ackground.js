chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    
    if (tab.url.includes("suspicious-site.com")) {

      chrome.action.setIcon({
        path: {
          "16": "images/icon16.png",
          "48": "images/icon48.png",
          "128": "images/icon128.png"
        },
        tabId: tabId
      });
      
      
      chrome.action.setBadgeBackgroundColor({color: '#FF0000'});
      chrome.action.setBadgeText({text: "!", tabId: tabId});
    }
  }
});