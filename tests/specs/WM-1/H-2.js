const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
  'H-2 test': function (client) {
    var bf_num = 0;
    var af_num = 0;
    auth
      .login(client);
    utils
      .opendir0(client); // test対象Directoryを開く
    client
      .source(function (result){
          const $ = cheerio.load(result.value);
          bf_num = $('#areaBTable > tbody').children().length;
          const bf_tr = $('tr'); // 作る前のリスト
          // console.log( bf_tr.length );
      })
      .pause(1000);
    utils.open_edit(client);
    client
      .click('#CreateNewPage')
      .waitForElementNotPresent('.progress-image > img', 15000) // wait unless loading img
      .waitForElementPresent('#bAreaSort', 5000)
      .pause(5000)
      .source(function (result){
          const $ = cheerio.load(result.value);
          af_num  = $('#areaBTable > tbody').children().length;
          const af_tr = $('tr');
          // console.log( af_tr.length );
          this.assert.equal( (bf_num + 1), af_num ); // 作る前後でtrの数値比較
      });

    // 一番上のtrを削除
    utils
      .delete_tr(client)
    // logout
    auth
      .logout(client);
    client
      .end();
  }
};

