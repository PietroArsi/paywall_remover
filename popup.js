let button1 = document.getElementById("button1");
let darkmode = document.getElementById("darkmode");

chrome.storage.sync.get("darkModeToggle", ({ darkModeToggle }) => {
    console.log("TEST");
});

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

darkmode.addEventListener("click", async () => {
    chrome.storage.sync.get("darkModeToggle", ({ darkModeToggle }) => {
        console.log("TEST");
    });
});

// function toggleDarkMode() {
//     chrome.storage.sync.get("darkModeToggle", ({ darkModeToggle }) => {
//       console.log("TEST")
//     });
// }