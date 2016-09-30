const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-16 test 0num': function (client) {
    auth
        .login(client);
    utils.open_mng(client)
    utils.open_proc(client)
    client
        .expect.element('#listSearchResultId > tbody').to.not.be.present
    utils.open_proc_edit_user(client)
    utils.open_proc_select_span(client)
    utils.open_mng_start_date(client, "2016/09/01")
    utils.open_mng_expired_date(client, "2016/09/02")
    utils.click_dialog_search(client)
    client
        .expect.element('#listSearchResultId > tbody').to.not.be.present
/*
    auth.logout(client); // logout
    client.end();
*/
        /*
  },
  'H-16 test 1num': function (client) {
    auth
        .login(client);
//    utils.opendir1(client) // test対象Directoryを開く
    utils.open_mng(client)
    utils.open_proc(client)
    client
        .expect.element('#listSearchResultId > tbody').to.not.be.present
    utils.open_proc_edit_user(client, 'selenium1 rows')
    utils.open_proc_select_span(client)
    utils.open_mng_start_date(client, "2016/09/01")
    utils.open_mng_expired_date(client, "2016/09/28")
    utils.click_dialog_search(client)
    client
        .waitForElementNotPresent('.progress-image > img', 16000)
//        .expect.element('#listSearchResultId > tbody').to.be.present
    client
        .source( function(result){
            const $ = cheerio.load(result.value);
            this.assert.equal(1, $('#listSearchResultId > tbody').children().length );
        })
    auth.logout(client); // logout
    client.end();
  },
  'H-16 test 21num': function (client) {
    auth
        .login(client);
//    utils.opendir1(client) // test対象Directoryを開く
    utils.open_mng(client)
    utils.open_proc(client)
    utils.open_proc_edit_user(client, 'selenium21 rows');
    client
        .expect.element('#listSearchResultId > tbody').to.not.be.present
    utils.click_dialog_search(client);
    client
        .waitForElementNotPresent('.progress-image > img', 16000)
        .expect.element('#listSearchResultId > tbody').to.be.present
    client
        .source( function(result){
            const $ = cheerio.load(result.value);
            this.assert.equal(21, $('#listSearchResultId > tbody').children().length );
            this.assert.equal(1, $('#paging > ul > li.active').children().length );
            this.assert.equal('次へ', $('#paging > ul > li:nth-child(4) > a').text() );
        })
    auth.logout(client); // logout
    client.end();
    */
  }
};

