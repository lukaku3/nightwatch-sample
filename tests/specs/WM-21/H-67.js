const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-67 test': function (client) {
        auth
            .login(client);
        utils.open_mng(client)

        client
            .click('#layOutB > img') // click B-area
            .click('#layOutD > img') // click B-area
            .getElementSize(".wm-areaB", function(result) {
                //console.log(result);
                this.assert.equal(result.value.height, 250);
            })
            .getAttribute('.wm-areaC', 'style', function(result){
                //console.log(result);
                //this.assert.equal(result.value, 'top: 250px;');
            })
        auth.logout(client); // logout
        client.end();
  }
};

