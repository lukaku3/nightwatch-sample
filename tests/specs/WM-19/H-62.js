const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-62 test': function (client) {
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
            .pause(3000) // 次のアラートのために時間稼ぎ
        utils.open_flow_select(client,'Webサイト制作管理者', 1)
        utils.open_flow_select(client,'Webチーフ管理者', 2)
        utils.open_flow_select(client,'Webインテグレーター', 3)
        client
            .click('#updateApprvNext')
            .pause(1000)
            .expect.element('.wm-dataForm.wm-dataList > tbody').to.be.present

        client
            .click('#updateApprv2Next')
            .pause(1000)
            .getAlertText( function(result){
                // dialogに「もう表示させない」というチェックボックスが付いてるとエラーになる
                client.assert.equal(result.value, client.globals.messages.workflow.no_range.ja)
            })
            .pause(2000)
            .accept_alert()
            .pause(3000)// 次のアラートのために時間稼ぎ

        utils.open_flow_select2(client)
        client
            .click('#updateApprv2Next') //範囲を選択し次へ
            .pause(1000)
            .expect.element('#priorityWorkflow').to.be.present
        client
            .expect.element('#priorityApprv').to.be.present
        client
            .pause(1000)
        utils.open_flow_set_name(client)
        utils.open_flow_reg_or_back(client)

        auth.logout(client); // logout
        client.end();
  }
};

