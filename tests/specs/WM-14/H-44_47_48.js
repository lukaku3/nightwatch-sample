
const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-44 test': function (client) {
    auth
        .login(client);
    utils.open_mng(client)
    utils.open_user(client)
    utils.open_user_check_limit(client)
    utils.open_user_add(client)
    client.click('.wm-btnCancel.modalDClose')
    auth.logout(client); // logout
    client.end();
  },
  'H-45 test': function (client) {
    auth
        .login(client);
    utils.open_mng(client)
    utils.open_user(client)
    utils.open_user_edit(client)
    utils.open_user_edit_default(client)

    auth.logout(client); // logout
    client.end();
  },
  'H-45-1 test': function (client) {
    auth
        .login(client, "add");
    client.pause(3000)
    client.expect.element('.loadB.selectedFolder').text.to.equal('WM-14');

    auth.logout(client); // logout
    client.end();
  },
  'H-47 test': function (client) {
    auth
        .login(client);
    utils.open_mng(client)
    utils.open_user(client)
    utils.open_user_edit(client)
    // check value
    client.expect.element('#loginId').to.have.value.that.equals( client.globals.values.users.add.loginId );
    // close dialog
    client
        .pause(1000)
        .click('#UpdateUserForm > div > ul > li:nth-child(3)')
        .pause(1000)
        .click('.wm-btnCancel.modalDClose') // close user manager
    auth.logout(client); // logout
    client.end();
  },
  'H-48 test': function (client) {
    auth
        .login(client);
    utils.open_mng(client)
    utils.open_user(client)
    utils.open_user_edit(client)
    // check value
    client.expect.element('#loginId').to.have.value.that.equals( client.globals.values.users.add.loginId );
    // push delete btn
    client
        .pause(1000)
        .click('#deleteUserButton') // push delete btn down
        .accept_alert()
        .pause(3000)

    client
        .useXpath()
        .expect.element('//*[@id="list-user"]/table/tbody/tr/td/span[text()="' + client.globals.values.users.add.lastName + '"]').to.not.be.present
    client
        .useCss()
        .click('.wm-btnCancel.modalDClose') // close user manager
    auth.logout(client); // logout
    client.end();
  }
};

