
const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'A-5 test': function (client) {
    var rmenu = {};
    auth
        .login(client);
    utils
        .opendir1(client); // test対象Directoryを開く
    var rmenu1 = {};
    var rmenu2 = {};
    rmenu1 = utils.get_rmenu_txt(client)
    console.log(rmenu1);
    /*
    client
        .click('#g399 > span.close > span') // open directory WM-A1
        .click('#g399 > span.loadB')        // click WM-A1
        .moveToElement('#g399 > span.loadB', 1, 1).mouseButtonClick('right') // open context menu
    utils.edit_directory(client);
    rmenu2 = utils.get_rmenu_txt(client);
    console.log(rmenu2);
*/

    /*
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
    */
    auth.logout(client); // logout
    client.end();
  }
};

