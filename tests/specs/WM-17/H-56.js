const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-56 test': function (client) {
    auth
        .login(client);
    utils.open_mng(client)
    utils.open_flow(client)
    client
        .click('#downloadApprListButton')
        .waitForElementPresent('.modal-content', 19000)
        .accept_alert()
        .pause(3000)
        .click('.wm-btnCancel.modalDClose')
    auth.logout(client); // logout
    client.end();
  }
};

