
const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'A-6 test': function (client) {
    var b4 = 0;
    var af = 0;
    auth
        .login(client);
    utils
        .opendir1(client); // test対象Directoryを開く
    client
        .useXpath()
        .click('//span[text()="WM-A1"]')
        .source( function(result){
            const cheerio = require('cheerio');
            const $ = cheerio.load(result.value);
            b4 = $('#areaBTable > tbody > tr').length;
        })
        .moveToElement('//span[text()="WM-A1"]', 1, 1).mouseButtonClick('right')
        .pause(1000)

        .click('//a[text()="ディレクトリ編集"]')
        .pause(1000)
        .moveToElement('//span[text()="WM-A1"]', 1, 1).mouseButtonClick('right')

        .pause(3000)
        .click('//*[@class="rightMenu"]/li/a[text()="新規作成"]')
        .useCss()
//        .waitForElementPresent(".modal-content", 19000)

        // 作成後の数を数える
    client
        .pause(3000)
        .source( function(result) {
            const cheerio = require('cheerio');
            const $ = cheerio.load(result.value);
            af = $('#areaBTable > tbody > tr').length;
            this.assert.notEqual(b4,af);
        })
    auth.logout(client); // logout
    client.end();
  }
};

