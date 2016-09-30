const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-49 test': function (client) {
    auth
        .login(client);
    utils.open_mng(client)
    utils.open_group(client)
    client
        .click('#downloadGroupListButton')
        .waitForElementPresent(".modal-content", 19000)
    auth.logout(client); // logout
    client.end();
  }
};

