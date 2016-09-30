const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-28 test file rename': function (client) {
    auth
        .login(client);
    utils.open_mng(client)
    utils.open_img(client)
    utils.open_img_dir(client)
    // /Images/selenium/354.jpg を用意しておく必要がある
    utils.open_rename_file(client)
    client.click('#closeImageMaterialButton')
    auth.logout(client); // logout
    client.end();
  }
};

