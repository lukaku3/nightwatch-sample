const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-13 test 1num': function (client) {
    auth
        .login(client);
    utils.opendir1(client) // test対象Directoryを開く
    utils.open_mng(client)
    utils.open_mng_search(client)
    utils.open_mng_edit_user(client, 'selenium1 rows');
    utils.click_dialog_search(client);
    client
        .waitForElementNotPresent('.progress-image > img', 15000)
        .source( function (result){
            const $ = cheerio.load(result.value);
            this.assert.equal(1, ($('#listSearchResultId > tbody').children().length - 1) )
        })
        .expect.element('#areaCIframe').to.not.be.present // iframeがないことを確認
    client
        .source( function (result){ // right click to open_mng dialog
            this.moveToElement('#page-1 > tr > td:nth-child(1)', 10, 10)
            this.doubleClick()
            this.pause(5000)
        })
        .waitForElementPresent('#areaCIframe', 15000)
        .expect.element('#areaCIframe').to.be.present // iframeがあることを確認
    auth.logout(client); // logout
    client.end();
  }
};

