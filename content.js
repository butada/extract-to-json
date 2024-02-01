function downloadJsonFile(data) {
  // JSON データを生成
  const jsonStr = JSON.stringify(data);
  const blob = new Blob([jsonStr], { type: "application/json" });
  // ダウンロードリンクを生成
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = "data.json";
  link.click();
  // メモリ解放
  URL.revokeObjectURL(url);
}

// ポップアップからのメッセージを受け取るためのリスナー登録
chrome.runtime.onMessage.addListener((css_selector_name, _ev, sendResponse) => {
  let result = 'failed';
  try {
    scrol_times = 10;
    for (let i = 0; i < scrol_times; i++) {
      setTimeout(() => {
        window.scrollBy(0, 200); //  下に200スクロールする
      }, 1000);
    }
    let titlelines = document.querySelectorAll(css_selector_name);
    let data = {'data': []};
    titlelines.forEach((titleline) => {
      data['data'].push(titleline.innerText);
    });
    downloadJsonFile(data);
    result = 'success';
  }
  catch (e) {
    console.error(e);
    result = 'failed: ' + e;
  }
  sendResponse(`search: ${result}`);
});