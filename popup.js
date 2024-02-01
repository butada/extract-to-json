document.querySelector("#startButton").addEventListener("click", () => {
  const css_selector_name = document.querySelector("#css_selector_name").value;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    console.log(activeTab);
  });
  // contentへ送信
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, css_selector_name, (responseFromContent) => {
      alert(responseFromContent);
    });
  });
});