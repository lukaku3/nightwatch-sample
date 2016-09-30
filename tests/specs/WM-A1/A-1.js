const auth = require('../../../custom_commands/auth.js');
module.exports = {
  'A-1 test': function (client) {
        auth.login(client,'default')
        client
            .waitForElementPresent("span.loadB.selectedFolder", 19000)
            .expect.element('span.loadB.selectedFolder').text.to.equal('Site');
        client
            .assert.attributeContains('#g0 >span:nth-child(1) > img', 'src', '/webmeister/images/opened.png')
        client
            .pause(1000)
        auth.logout(client);
        client.end();
  }
};

