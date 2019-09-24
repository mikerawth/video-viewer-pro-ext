chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.sendMessage(tab.id, { message: "react" });
});

chrome.commands.onCommand.addListener(function (command) {
  if (command === 'toggle-video-view') {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { message: "react" });
    });
  }
});