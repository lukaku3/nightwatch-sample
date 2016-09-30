const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-41 test': function (client) {
    auth
        .login(client);
    utils.open_mng(client)
    utils.open_publog(client)
    utils.open_publog_search(client)
    utils.open_publog_dl(client)
    client.click('#closeButton')
    auth.logout(client); // logout
    client.end();
  }
};

