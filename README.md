# minMatrix.js

シンプルな行列とクォータニオンを扱うことができるライブラリです。

## 概要

`src/minMatrix.js` にすべてのクラスの定義があります。

webpack 等のビルドツールは使っていませんので、そのままソースコードを利用できます。ただし `export` 構文を使って記述されているので、適宜 babel などを併用しないと、対応していないブラウザではそのまま使うことができない可能性があります。

すべてのクラスは `static` なメソッドのみを持ちます。

* `Mat4` - 4x4 の行列を扱うクラス
* `Vec3` - ３つの要素を持つベクトルを扱うクラス
* `Vec2` - ２つの要素を持つベクトルを扱うクラス
* `Qtn` - クォータニオンを扱うクラス
* `Geometry` - いくつかのジオメトリ構造を生成するクラス

## ドキュメントの生成

以下のコマンドで ESDoc によるドキュメントの自動生成を行います。

```
$ npm run doc
```

生成されたドキュメントは `__docs__` 以下に格納されます。

## ユニットテスト

以下のコマンドで Jest によるユニットテストの結果を表示します。

```
$ npm run test
```

テストファイルは `__tests__` 以下にあります。`export` 等の構文を含むファイルをテストするために `@babel/plugin-transform-modules-commonjs` を利用しています。

## special thanks

* [Babel · The compiler for next generation JavaScript](https://babeljs.io/)
* [ESDoc \- A Good Documentation Generator for JavaScript \| esdoc\-site](https://esdoc.org/)
* [Jest · 🃏 Delightful JavaScript Testing](https://jestjs.io/)

## LICENSE

MIT.

