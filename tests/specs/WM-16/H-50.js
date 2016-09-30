const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-50 test': function (client) {
    auth
        .login(client);
    utils.open_mng(client)
    utils.open_group(client)
    utils.open_group_add_btn(client)
    utils.open_group_add_new(client)
    auth.logout(client); // logout
    client.end();
  },
  'H-52 test': function (client) {
    auth
        .login(client);
    utils.open_mng(client)
    utils.open_group(client)
    utils.open_group_del(client)
    client.click('.wm-btnCancel')
    auth.logout(client); // logout
    client.end();
  }
};

