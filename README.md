# 概要

Chrome extensionによるWebページスクレイピングツールです。
スクレイピングしたデータはJson出力してダウンロードできます。

Selenium等でスクレイピングするのも良いですが、
extensionでお手軽にスクレイピングしたいこともあって作りました。

尚、css_selectorを選定する際、`selectorgadget　extension` を使うと楽ちんでした。

# 使い方

まず、開発者モードでextensionを読み込んでください。

次に、スクレイピングしたいページを開いてください。

extensionを実行すると、テキストボックスが表示されますので、CSSセレクタを入力してください。

スクレイピングを開始するボタンをクリックしたら、Jsonファイルがダウンロードされます。

例えば、Hackernewsのページを開いて `.titleline` と入力すると、タイトル一覧のJsonファイルを出力できます。

もし、カスタマイズしたい場合は、`content.js` を変更すると良いと思います。

# 参考

https://uncaughtexception.hatenablog.com/entry/2023/10/29/125417
