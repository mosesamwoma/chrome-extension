// background.js - Handle messages and updates
chrome.runtime.onInstalled.addListener(() => {
    console.log('[Spam Shield] Extension installed');
    
    // Initialize storage
    chrome.storage.local.set({
        scannedCount: 0,
        spamCount: 0,
        whitelist: [],
        settings: {
            autoScan: true,
            sensitivity: 'medium'
        }
    });
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'UPDATE_STATS') {
        chrome.storage.local.get(['scannedCount', 'spamCount'], (data) => {
            const newScanned = (data.scannedCount || 0) + request.scanned;
            const newSpam = (data.spamCount || 0) + request.spam;
            
            chrome.storage.local.set({
                scannedCount: newScanned,
                spamCount: newSpam
            });
        });
    }
    
    sendResponse({received: true});
});