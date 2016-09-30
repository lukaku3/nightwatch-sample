const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-3 test': function (client) {

    auth
        .login(client);
    utils
        .opendir0(client); // test対象Directoryを開く
    client
        .source(function (result){
            const $ = cheerio.load(result.value);
            bf_num = $('#areaBTable > tbody').children().length;
            const bf_tr = $('tr');
            // console.log( bf_tr.length );
        })
        .pause(1000);
      utils.open_edit(client);
      client
        .click("#CreateNewPageLink")
        .pause(1000)
        .setValue('#edit-file-form > table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type="text"]', client.globals.messages.link_page.title) //title
        .setValue('#edit-file-form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type="text"]', client.globals.messages.link_page.linkDesURL)
        .source(function (result){
            var dt = new Date();
            var dt_start = [dt.getFullYear(),dt.getMonth()+1,dt.getDate()].join('/');
            var dt_period = [dt.getFullYear(),dt.getMonth()+1,dt.getDate()+1].join('/');
            this.setValue('#newsDisplayDateId > ul > li > input', utils.date_add() );//日付表示
            this.setValue('#periodFromDateId > ul > li > input', utils.date_add() ); //期間表示左
            this.setValue('#periodToDateId > ul > li > input', utils.date_add(1) );  //期間表示右
        })
        .pause(3000)
        .click('#edit-file-form > table > tbody > tr:nth-child(9) > td.displayMenuTitle > label:nth-child(1)')
        .click('#saveFileEditor')
        .pause(3000)
        .waitForElementNotPresent('.progress-image > img', 10000) // wait unless loading image
        .useCss()
    utils.delete_tr(client);
    auth.logout(client); // logout
    client.end();
  }
};

