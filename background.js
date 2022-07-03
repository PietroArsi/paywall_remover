let prefix = "https://12ft.io/";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ prefix });
  console.log(`Prefix registered: ${prefix}`);
});