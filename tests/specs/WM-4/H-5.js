const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-5 test': function (client) {
    auth
        .login(client);
    client
        .pause(1000);
    utils.open_edit(client);
    client
        .click('#OpenHelpPage')
        .pause(6000)
//        .source(function (result){
//            const $ = cheerio.load(result.value);
//            console.log(result);
//        })
        .source(function (result){
//            const $ = cheerio.load(result.value);
            // console.log( $('title').text() );
        });
    client
       .window_handles(function(result) { // switch to pdf
            var temp = result.value[1];
            this.switchWindow(temp);
            this.switchWindow(result.value[0]);
        })
    auth.logout(client); // logout
    client.end();
  }
};

