function DownloadFile(url, filename) {
    return new Promise((resolve, reject) => {
        browser.downloads.download({
            url: url,
            filename: filename,
            conflictAction: 'uniquify',
            saveAs: false
        }, (downloadId) => {
            if (browser.runtime.lastError) {
                reject(browser.runtime.lastError);
            } else {
                resolve(downloadId);
            }
        });
    });
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    
    if (request.action === "downloadFiles") {
        const urls = request.cours.map(c => c.url);
        const filenames = request.cours.map(c => c.name);
        const downloadPromises = urls.map((url, index) => {
            console.log(`Downloading ${url} as ${filenames[index]}`);
            return DownloadFile(url, `${filenames[index]}`);
        });
        Promise.all(downloadPromises)
            .then((downloadIds) => {
                sendResponse({ success: true, downloadIds: downloadIds });
            })
            .catch((error) => {
                sendResponse({ success: false, error: error.message });
            });
        return true; // Keep the message channel open for sendResponse
    }

    if (request.action === "EditCSS") {
        chrome.scripting.insertCSS({
            target: { tabId: sender.tab.id },
            files: ["moodle.css"]
        }, () => {
            console.log("CSS injected successfully.");
        });
    }
});
