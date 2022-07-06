let prefix = "https://12ft.io/";
let darkModeToggle = false;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ prefix });
  chrome.storage.sync.set({ darkModeToggle });
  console.log(`Prefix registered: ${prefix}`);
});