  "selenium" : {
    "start_process" : false,
    "start_session" : true,
    "server_path" : 
"./node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.53.1.jar",
    "log_path" : "",
    "host" : "127.0.0.1",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "derivers/chromedriver",
      "webdriver.ie.driver" : ""
    }
  },

上記セクションのcli_argsのところに対応ドライバのPATHをproject rootからの
相対PATHを追加


# cli_argsの各ブラウザについては下記参照
  https://github.com/nightwatchjs/nightwatch/wiki/Internet-Explorer-Setup

  https://github.com/nightwatchjs/nightwatch/wiki/Chrome-Setup

  https://github.com/nightwatchjs/nightwatch/wiki/Firefox-related-settings

  

