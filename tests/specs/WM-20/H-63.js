const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-63 test': function (client) {
        auth
            .login(client);
        utils.open_mng(client)
        utils.open_config(client) // password期限設定を開く
        client.expect.element('.modal-content > div.move-header > div:nth-child(1)').text.to.equal(client.globals.messages.config.password.ja.caption); // dialogのcaption
        client
            .click('#updatePasswordSetLabel')
            .clearValue('#customer-properties-form > div.wm-subScroll > div > div.radioContainer > div:nth-child(1) > span > input[type="text"]')
            .pause(1000)
            .setValue('#customer-properties-form > div.wm-subScroll > div > div.radioContainer > div:nth-child(1) > span > input[type="text"]', 10)
            .click('#updatePasswordSubmit')
            .pause(1000)
            .accept_alert()
            .waitForElementNotPresent('.progress-image > img', 16000)
        auth.logout(client); // logout
        client.end();
  },
  'H-63 test 設定した値の確認': function (client) {
        auth
            .login(client);
        utils.open_mng(client)
        utils.open_config(client) // password期限設定を開く
        client.expect.element('#customer-properties-form > div.wm-subScroll > div > div.radioContainer > div:nth-child(1) > span > input[type="text"]').to.have.value.that.equals(10)
        client
            .click('#closeButton')
        auth.logout(client); // logout
        client.end();
  }
};

