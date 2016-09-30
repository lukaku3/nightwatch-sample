
const auth = require('../../../custom_commands/auth.js');
module.exports = {
  'A-2 test': function (client) {
        auth.login(client,'default')
        client
            .waitForElementPresent("span.loadB.selectedFolder", 19000)
            .expect.element('span.loadB.selectedFolder').text.to.equal('Site');
        client
            .assert.attributeContains('#g0 >span:nth-child(1) > img', 'src', '/webmeister/images/opened.png')
        client
            .pause(1000)

        client
            .click('#g1 > span.close > span') // click /jp.cube.com
            .expect.element('#g2 > span.loadB').text.to.equal( 'NULL' )
        client
            .click('#g97 > span.close > span') // click /www.cube.com
            .expect.element('#g176 > span.loadB').text.to.equal( 'NULL' )

        auth.logout(client);
        client.end();
  }
};

