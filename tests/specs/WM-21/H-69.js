const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-69 test': function (client) {
        auth
            .login(client);
        utils.open_mng(client)

        client
            .click('#layOutB > img') // click B-area
            .getAttribute(".wm-areaB", 'style', function(result) {
                this.assert.equal(result.value, 'height: 100%;');
            })
            .getAttribute('.wm-areaC', 'style', function(result){
                //console.log(result);
                //this.assert.equal(result.value, 'top: 773px;');
            })
        auth.logout(client); // logout
        client.end();
  }
};

