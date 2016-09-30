const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-22 test 1num': function (client) {
    auth
        .login(client);
    utils.open_mng(client)
    utils.open_proc(client)
    client
        .expect.element('#listSearchResultId > tbody').to.not.be.present
    utils.open_proc_select_approv(client,'3次承認完了')
    utils.click_dialog_search(client)
    client
        .waitForElementNotPresent('.progress-image > img', 16000)
        .expect.element('#listSearchResultId > tbody').to.be.present
    client
        .source( function(result){
            const $ = cheerio.load(result.value);
            this.assert.equal(1, ($('#listSearchResultId > tbody').children().length - 1) );
            this.click('#listBySerachDownload')
            if (client.options.desiredCapabilities.browserName == "internet explorer"){
                // when IE then here.
                // tbd
            }
        })
    auth.logout(client); // logout
    client.end();
  }
};

