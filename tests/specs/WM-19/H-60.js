const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-60 test': function (client) {
        auth
            .login(client);
        utils.open_mng(client)
        utils.open_flow(client)
        utils.open_flow_add_btn(client)
        client
            .click('#updateApprvNext')
            .getAlertText( function(result){
                client.assert.equal(result.value, client.globals.messages.workflow.no_approvers.ja);
            })
            .accept_alert()
        utils.open_flow_select(client,'Webサイト制作管理者', 1)
        utils.open_flow_select(client,'Webチーフ管理者', 2)
        utils.open_flow_select(client,'Webインテグレーター', 3)
        client
            .click('#updateApprvNext')
            .pause(1000)
            .expect.element('.wm-dataForm.wm-dataList > tbody').to.be.present
        client
            .click('#updateApprv2Next')
            .getAlertText( function(result){
                client.assert.equal(result.value, client.globals.messages.workflow.no_range.ja);
            })
            .accept_alert()
        auth.logout(client); // logout
        client.end();
  }
};

