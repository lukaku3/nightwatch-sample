const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-26 test 1num': function (client) {
    auth
        .login(client);
    utils.open_mng(client)
    utils.open_img(client)
    utils.open_img_dir(client)
    utils.open_mkdir(client)
    utils.open_rmdir(client)
    client.click('#closeImageMaterialButton')
    auth.logout(client); // logout
    client.end();
  }
};

