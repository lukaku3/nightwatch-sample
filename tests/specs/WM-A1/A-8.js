
const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'A-8 test': function (client) {
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

        // cp_targetrが存在することが前提
    client
        .expect.element('//*[@id="g399"]/ul/li/span[text()="cp_target"]').to.be.present;
    client
        .moveToElement('//span[text()="New_folder"]', 1, 1).mouseButtonClick('right')
        .click('//a[text()="コピー"]')
        .accept_alert()
        .pause(3000)

        .moveToElement('//span[text()="cp_target"]', 1, 1).mouseButtonClick('right')
        .expect.element('//*[@class="rightMenu"]/li/a[text()="貼付け"]').to.be.present

    client
        .click('//*[@class="rightMenu"]/li/a[text()="貼付け"]')
        .useCss()
        .accept_alert()
//        .waitForElementPresent(".modal-content", 19000)

        .pause(3000)

    client
        .useXpath()
        .click('//*[@id="g399"]/span[1]') // WM-A1を閉じる
        .click('//*[@id="g399"]/span[1]') // WM-A1を開く
        .click('//*[@id="g434"]/span[1]') // cp_targetを開く(A)
        .pause(1000)
        .click('//span[text()="cp_target"]') // areaBへcp_targetを表示させる
        .useCss()
        .pause(3000)
    client
        .source( function(result){
            const cheerio = require('cheerio');
            const $ = cheerio.load(result.value);
            this.pause(1000)
            $('#areaBTable > tbody > tr > td:nth-child(2) > span').each( function(i){
//console.log( $(this).text() );
            })
            //
            this.expect.element('#areaBTable > tbody > tr:nth-child(' +  $('#areaBTable > tbody > tr').length  + ') > td:nth-child(2) > span').text.to.match(/Copy_of_New_folder_/);
            console.log( $('#areaBTable > tbody > tr').length );
            console.log( $('#areaBTable > tbody > tr:nth-child(' +  $('#areaBTable > tbody > tr').length  + ') > td:nth-child(2) > span').prop('data-publishstatus') );
        })

    auth.logout(client); // logout
    client.end();
  }
};

