# Node.JS
## Windowsの場合
    https://nodejs.org/en/　よりRecommendedを取得しインストール。

## Linuxの場合
    curl -O https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh
    sh ./install.sh
    echo "source ~/.nvm/nvm.sh" >> ~/.bash_profile
    source  ~/.nvm/nvm.sh

# Checkout from Subversion
## Linux
    yum install subversion (svnコマンドが無い場合
    svn co http://192.168.11.102/repos/WM/branches/nightwatch nightwatch
## Windows
    http://192.168.11.102/repos/WM/branches/nightwatchからnightwatchディレクトリを作成しcheckout

# nightwatch project rootへ移動
    cd nightwatch
    npm install

# PATHを通す
## windows
    set PATH=%PATH%;c:\path\to\node_modules\.bin
## linux
    echo PATH=$PATH:/path/to/node_modules/.bin

# seleniumが待っているIPを設定ファイルへ記述
    nightwatch.json内にあるSectionの"test_settings"配下に"selenium_host"とあるので
    そこにseleniumが待機しているマシンのIPを書く。
    ブラウザ別に書く場合は、"test_settings"内にブラウザのSectionがあるので其の中に
    "selenium_host"を追加すること。

# テストクライアント
* oracleJDKをインストール
* ブラウザ用のドライバをselenium-server-standalone-*.jarと同じ場所に配置(nightwatch/drivers内にあり)
* selenium-server-standalone-*.jar を置く

## selenium 起動
    ※)exeはnightwatch/driversの配下にあり。jarは「./node_modules/selenium-server-standalone-jar/jar/」にあり
    java -jar selenium-server-standalone-*.jar \
    -Dwebdriver.chrome.driver=chromedriver.exe   (ex. chrome
    -Dwebdriver.ie.driver=MicrosoftWebDriver.exe (ex. Edge

# nightwatch実行コマンド
##登録済みブラウザ全て実施
    nightwatch       (nightwatch.jsonに定義したブラウザ全て同時実行
    nightwatch -e default (ex. only Firefox
    nightwatch -e ie (ex. chrome,default
    nightwatch -e ie tests/login/login.js (1つのファイル指定の場合

# nightwatchについて
    http://nightwatchjs.org/guide#running-tests
