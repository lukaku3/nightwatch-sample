const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-66 test': function (client) {
        auth
            .login(client);
        utils.open_mng(client)
        utils.open_config(client, 'UpdateWmPropertiesMandatory') // password期限設定を開く
        client
            .click('#mandatorySubmit')
            .accept_alert()
            .pause(2000)
            // .waitForElementPresent('.modal-content', 19000)

        auth.logout(client); // logout
        client.end();
  }
};

