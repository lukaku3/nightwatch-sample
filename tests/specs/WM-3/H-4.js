const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-4 test': function (client) {
    auth
        .login(client);
    utils
        .opendir1(client); // test対象Directoryを開く
    client
        .source(function (result){
            const $ = cheerio.load(result.value);
            $('#g3 > ul > li').each( function(){ // check exists PublishOFF before edit mode.
                if ( $(this).prop('data-publishstatus') == 'OFF') {
                    client.assert.equal('OFF', $(this).prop('data-publishstatus'));
                }
            });
            client.moveToElement('#g3 > span.loadB', 10, 10).mouseButtonClick('right')
            utils.edit_directory(client); // push down btn "edit directory"
            client.pause(1000);
        })
        .source(function (result){
            const $ = cheerio.load(result.value);
            $('#g3 > ul > li').each( function(){ // check exists PublishOFF with edit mode.
                if ( $(this).prop('data-publishstatus') == 'OFF' && $(this).css('display') == 'list-item') {
                    client.assert.equal( $(this).css('display'), 'list-item' );
                }
            });

        })
        .pause(1000);
    auth.logout(client); // logout
    client.end();
  }
};

