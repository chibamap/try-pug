pug
====


## Pugとは

HTMLテンプレートエンジンです。昔はjadeって名前でした。


## 導入

nodeで実装されており、npmで公開されてます。[node](https://nodejs.org/ja/)入れましょう。
pugのビルドを自動化しましょう。ビルドツールの[webpack]()導入しましょう。
nodeのバージョン管理の[nodebrew](https://github.com/hokaccha/nodebrew)導入しましょう。
ツールのインストールはMacユーザーは[Homebrew](https://github.com/Homebrew/brew)使うと便利です。Homebrew入れましょう。

ということで、以下の流れでインストールしていきます。

- Homebrew
- nodebrw
- node (npmもセットです)


### Hoebrew

[https://brew.sh/index_ja.html](https://brew.sh/index_ja.html)

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
### nodebrew & node

[https://github.com/hokaccha/nodebrew](https://github.com/hokaccha/nodebrew)

```
brew install nodebrew
mkdir -p ~/.nodebrew/src
echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.bash_profile
source ~/.bash_profile
sudo nodebrew install-binary stable
nodebrew use v8.4.0
```

### npm パッケージたち

```
git clone git@github.com:hogehoge-banana/try-pug.git
cd try-pug
npm i
```


## run

```
npm start
```

- `http://localhost:8080` にアクセスする
- ドヤ顔
