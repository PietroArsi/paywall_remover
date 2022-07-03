let button1 = document.getElementById("button1");

button1.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    chrome.storage.sync.get("prefix", ({ prefix }) => {
        let newWebsite = `${prefix}${tab.url}`
        console.log(`New website: ${newWebsite}`);
        chrome.tabs.update({
            url: `${newWebsite}`
       });
    });
});