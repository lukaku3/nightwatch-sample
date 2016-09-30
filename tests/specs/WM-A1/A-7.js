
const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'A-7 test': function (client) {
    var b4 = 0;
    var af = 0;
    auth
        .login(client);
    utils
        .opendir1(client); // test対象Directoryを開く
    client
        .useXpath()
        .click('//span[text()="WM-A1"]')
        .pause(1000)

        .pause(1000)
        .moveToElement('//span[text()="WM-A1"]', 1, 1).mouseButtonClick('right')
        .click('//a[text()="ディレクトリ編集"]')
        .pause(1000)
        .click('//*[@id="g399"]/span[1]')

        // New_folderが存在することが前提
        .moveToElement('//span[text()="New_folder"]', 1, 1).mouseButtonClick('right')
        .click('//a[text()="コピー"]')
        .accept_alert()
        .pause(3000)

        .moveToElement('//span[text()="WM-13"]', 1, 1).mouseButtonClick('right')
        .expect.element('//*[@class="rightMenu"]/li/a[text()="貼付け"]').to.be.present

    client
        .useCss()
//        .waitForElementPresent(".modal-content", 19000)
    auth.logout(client); // logout
    client.end();
  }
};

