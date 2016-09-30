const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-57 test': function (client) {
    auth
        .login(client);
    utils.open_mng(client)
    utils.open_flow(client)
    utils.open_flow_email(client)
    client
        .pause(1000)
        .useXpath()
        .expect.element('//*[@class="modal-content"]/div[1]/div[text()="アラートメール設定"]').to.be.present;
    client
        .click('//*[@id="mailOKButton"]/parent::*/li[2]')
        .click('//*[@class="wm-posRight"]/li[3]')
        .useCss()
    auth.logout(client); // logout
    client.end();
  }
};

