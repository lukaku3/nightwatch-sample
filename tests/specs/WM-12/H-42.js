const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-42 test': function (client) {
    auth
        .login(client);
    utils.open_mng(client)
    utils.open_publog(client)
    utils.open_publog_search(client)
    client
        .expect.element('#publishLogList > tr > td').to.be.present
    client
        .pause(1000)
        .getText('#publishLogList > tr:nth-child(2) > td', function(result){
            var dt = result.value;
        })
        .click('#publishLogList > tr:nth-child(2) > td')
        .pause(1000)
    client
        .click('#closeButton')
        .pause(1000)
    client.click('#closeButton')
    auth.logout(client); // logout
    client.end();
  }
};

