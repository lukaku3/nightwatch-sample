const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-40 test 0rec': function (client) {
    auth
        .login(client);
    utils.open_mng(client)
    utils.open_publog(client)
    utils.open_publog_search(client, '2016/09/10', '2016/09/10')
    client
        .expect.element('#publishLogList > tr > td').to.not.be.present
    client.click('#closeButton')
    auth.logout(client); // logout
    client.end();
  },
  'H-42 test 2rec': function (client) {
    auth
        .login(client);
    utils.open_mng(client)
    utils.open_publog(client)
    utils.open_publog_search(client)
    client
        .expect.element('#publishLogList > tr > td').to.be.present
    client.click('#closeButton')
    auth.logout(client); // logout
    client.end();
  }
};

