
let activeTabId = null;
let startTime = null;

chrome.tabs.onActivated.addListener(activeInfo => {
    trackTime();
    activeTabId = activeInfo.tabId;
    startTime = Date.now();
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.active && changeInfo.status === 'complete') {
        trackTime();
        activeTabId = tabId;
        startTime = Date.now();
    }
});

chrome.windows.onFocusChanged.addListener(windowId => {
    trackTime();
    if (windowId !== chrome.windows.WINDOW_ID_NONE) {
        startTime = Date.now();
    } else {
        startTime = null;
    }
});

function trackTime() {
    if (activeTabId !== null && startTime !== null) {
        chrome.tabs.get(activeTabId, tab => {
            if (chrome.runtime.lastError || !tab.url) return;
            const timeSpent = Math.floor((Date.now() - startTime) / 1000);
            const domain = new URL(tab.url).hostname;
            fetch('http://localhost:3501/api/usage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ domain, timeSpent })
            });
        });
    }
}
