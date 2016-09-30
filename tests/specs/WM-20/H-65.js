const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-65 test': function (client) {
        auth
            .login(client);
        utils.open_mng(client)
        utils.open_config(client, 'UpdateApprovalFlowUnpublish') // password期限設定を開く
        client
            .click('#unpublishSubmit')
            .accept_alert()
//            .waitForElementPresent('.modal-content', 19000)
            .pause(3000)
        auth.logout(client); // logout
        client.end();
  }
};

