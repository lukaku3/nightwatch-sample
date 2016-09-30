const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-58 test': function (client) {
    auth
        .login(client);
    utils.open_mng(client)
    utils.open_flow(client)
    utils.open_flow_email(client)
    client
        .pause(1000)
        .source( function(result){
            var i = 3;
            client
                .useXpath()
                .getValue('//*[@class="modal-content"]/div[2]/div/p/select', function(result){
                    if(result.value == 2){
                        client
                            .click('//*[@class="modal-content"]/div[2]/div/p/select/option[1]')
                    }else{
                        client
                            .click('//*[@class="modal-content"]/div[2]/div/p/select/option[2]')
                    }

                })
                .useCss()
                .click('#mailOKButton')
        })
        .click('.wm-posRight > .wm-btnCancel.modalDClose')
        .pause(1000)
    auth.logout(client); // logout
    client.end();
  },
  'H-55 test': function (client) {
    auth
        .login(client);
    utils.open_mng(client)
    utils.open_flow(client)
    utils.open_flow_del(client)

    auth.logout(client); // logout
    client.end();
  }
};

