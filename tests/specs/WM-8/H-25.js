const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-25 test 1num': function (client) {
    auth
        .login(client);
    utils.open_mng(client)
    utils.open_img(client)
    utils.open_img_dir(client)
    utils.open_img_upfile(client)
    client
        .source( function(result){
//            .useXpath()
//            .click('//span[text()="selenium"]')
//            .useCss()
        })
//        .useXpath()
//        .moveToElement('li[id$="selenium"]',1,1)
//        .click('//li[@class="aTree"]/ul/li[@class="aTree"]/span/span[.="selenium"]')
//
//        .expect.element('#listSearchResultId > tbody').to.not.be.present
//
//    auth.logout(client); // logout
//    client.end();
  }
};

