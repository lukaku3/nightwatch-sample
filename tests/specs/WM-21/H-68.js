const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-68 test': function (client) {
        auth
            .login(client);
        utils.open_mng(client)

        client
            .click('#layOutC > img') // click B-area
            .getAttribute(".wm-areaB", 'style', function(result) {
                this.assert.equal(result.value, 'height: 0px;');
            })
            .getAttribute('.wm-areaC', 'style', function(result){
                this.assert.equal(result.value, 'top: 0px;');
            })
        auth.logout(client); // logout
        client.end();
  }
};

