# Super Swagger Merger
## 概要
swaggerファイルをURL、パラメーター、出力内容をディレクトリごとに分割管理することで、
従来の一つのyamlファイルで記述するよりも、APIの編集を便利にしたもの
## DEMO
![result](https://github.com/bravesoft-lab/super_swagger_merger/blob/demo.gif)

## ディレクトリ構成
```
├── README.md
├── api
│   └── src
│       ├── components <- APIで出力されるデータを管理するディレクトリ
│       │   ├── console_api
│       │   │   └── base.yaml
│       │   └── success.yaml
│       ├── definitions
│       │   └── error_response.yaml
│       ├── elements
│       ├── main.yaml <- ルートのファイル、ここを起点として様々なファイルを読み取って、一つのyamlとして出力する
│       ├── parameters <- APIで渡す、パラメーター、ヘッダー情報などを管理するディレクトリ
│       │   └── default.yaml
│       └── paths <- APIのパスを管理するディレクトリ
│           └── console_api.yaml
├── gulpfile.js <- yamlファイルを結合したり、HTMLファイルを出力するプログラム
├── package-lock.json
├── package.json
├── redoc-static.html <- swagger,yamlをHTMLに変換したもの、最終的に出力されるもの
├── swagger.yaml <- 結合されて出力されるyaml
```
## 使い方
```
npm run watch
```
を別タブで起動する。
この状態でyamlファイルを編集すると自動でswagger.yamlとredoc-static.htmlが吐き出される
そのあと,redoc-static.htmlをブラウザで開くとAPI仕様書が表示される
