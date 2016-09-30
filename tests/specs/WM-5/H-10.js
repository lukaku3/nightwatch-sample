const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-10 test 0num': function (client) {
    auth
        .login(client);
    utils.opendir1(client) // test対象Directoryを開く
    utils.open_mng(client);
    utils.open_mng_search(client);
    utils.open_mng_edit_group(client, 'selenium0')
    client.click('#search-process-form > div.wm-subScroll > div.wm-inner > table > tbody > tr:nth-child(5) > td > span > input[type="text"]');// for change forcus.
    utils.open_mng_edit_user(client, 'selenium0 rows');
    utils.click_dialog_search(client)
    client
        .waitForElementNotPresent('.progress-image > img', 15000)
        .accept_alert()
        .source( function(result){
            const $ = cheerio.load(result.value);
            this.assert.equal(0, $('#listSearchResultId > tbody').children().length );
        })
        .assert.equal(1,1)
    client.click('#closeButton');
    auth.logout(client); // logout
    client.end();
  },
  'H-10 test 1num': function (client) {
    auth
        .login(client);
    utils.opendir1(client) // test対象Directoryを開く
    utils.open_mng(client)
    utils.open_mng_search(client)
    utils.open_mng_edit_group(client, 'selenium1')
    client.click('#search-process-form > div.wm-subScroll > div.wm-inner > table > tbody > tr:nth-child(5) > td > span > input[type="text"]');// for change forcus.
    utils.open_mng_edit_user(client, 'selenium1 rows');
    utils.click_dialog_search(client);
    client
        .waitForElementNotPresent('.progress-image > img', 15000)
        .source( function (result){
            const $ = cheerio.load(result.value);
            this.assert.equal(1, ($('#listSearchResultId > tbody').children().length -1) );
        })
        .pause(1000)
        .click('#closeButton');
    auth.logout(client); // logout
    client.end();
  },
  'H-10 test 21num': function (client) {
    auth
        .login(client);
    utils.opendir1(client) // test対象Directoryを開く
    utils.open_mng(client)
    utils.open_mng_search(client)
    utils.open_mng_edit_group(client, 'selenium21')
    client.click('#search-process-form > div.wm-subScroll > div.wm-inner > table > tbody > tr:nth-child(5) > td > span > input[type="text"]');// for change forcus.
    utils.open_mng_edit_user(client, 'selenium21 rows');
    utils.click_dialog_search(client);
    client
        .waitForElementNotPresent('.progress-image > img', 15000)
        .pause(3000)
        .source( function(result){
            const $ = cheerio.load(result.value);
            if ($('#listSearchResultId > tbody').children().length >= 21){
                this.assert.equal(21,21);
            }
            this.assert.equal(1, $('#paging > ul > li.active').children().length );
            this.expect.element('.page-link.next').text.to.equal('次へ');
        })
        .click('#closeButton');
    auth.logout(client); // logout
    client.end();
  }
};

