"use strict";
// popup.ts
var _a, _b;
(_a = document.getElementById('start')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0].id) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'start' });
        }
    });
});
(_b = document.getElementById('stop')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0].id) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'stop' });
        }
    });
});
