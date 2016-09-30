const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-53 test': function (client) {
        auth
            .login(client);
        utils.open_mng(client)
        utils.open_flow(client)
        utils.open_flow_add_btn(client)
        client
            .click('#updateApprvNext') // at 1st click
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
            .click('#updateApprv2Next') // at 1st click
            .pause(1000)
            .getAlertText( function(result){
                // dialogに「もう表示させない」というチェックボックスが付いてるとエラーになる
                client.assert.equal(result.value, client.globals.messages.workflow.no_range.ja)
            })
            .pause(2000)
            .accept_alert()
            .pause(3000)// 次のアラートのために時間稼ぎ

        utils.open_flow_select2(client);
        client
            .click('#updateApprv2Next')
            .pause(1000)
            .click('#updateFlowCompleteButton') // at 1st click
            .getAlertText( function(result){
                //client.assert.equal(result.value, client.globals.messages.workflow.no_flow_name.ja);
            })
            .accept_alert()
            .pause(3000) // 次のアラートのために時間稼ぎ

        utils.open_flow_set_nam(client)
        client
            .click('#updateFlowCompleteButton')
            .pause(1000)
            .useXpath()
            .expect.element('//span[text()="selenium_test"]').to.be.present
        client
            .useCss()
        auth.logout(client); // logout
        client.end();
  },

  'H-54 test': function (client) {
    auth
        .login(client);
    utils.open_mng(client)
    utils.open_flow(client)
    utils.open_flow_edit(client)
    client
        .click('#updateApprvNext')
        .pause(1000)
    utils.open_flow_select2(client,client.globals.values.work_flow.range.edit)
    client
        .pause(1000)
        .click('#updateApprv2Next')
        .pause(1000)
        .click('#updateFlowCompleteButton')
        .pause(1000)

        .useXpath()
        .expect.element('//span[text()="selenium_test"]/parent::*/parent::*/td[contains(text(),"' + client.globals.values.work_flow.range.edit + '")]').to.be.present
    client
        .useCss()
    auth.logout(client); // logout
    client.end();
    /*
  },

  'H-55 test': function (client) {
    auth
        .login(client);
    utils.open_mng(client)
    utils.open_flow(client)
    utils.open_flow_del(client)

    auth.logout(client); // logout
    client.end();
    */
  }

};
