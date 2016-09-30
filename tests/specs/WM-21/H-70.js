const auth = require('../../../custom_commands/auth.js');
module.exports = {
  'H-70 test': function (client) {
        auth.login(client,'default')
        auth.logout(client);
        client.end();
  }
};

