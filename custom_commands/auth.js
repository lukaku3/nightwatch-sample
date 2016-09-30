module.exports.login = function (client, unam) {
    var loginId;
    var password;
    var customerCd;

    unam = (unam) ? unam : 'default';
    if( unam == "add") {
        loginId    = client.globals.values.users.add.loginId;
        password   = client.globals.values.users.add.password;
    }else{
        loginId    = client.globals.users[unam].loginId;
        password   = client.globals.users[unam].password;
    }
    customerCd = client.globals.users.default.customerCd;

    client
      .url(client.launch_url)
      .assert.title(client.globals.title)
      .setValue('input[name="loginId"]', loginId)
      .pause(1000)
      .setValue('input[type="password"]', password)
      .click('input[type="submit"]')
      .waitForElementPresent("title", 15000)
      .waitForElementPresent("#customerCd", 15000)
      .assert.title(client.globals.title)
      .assert.value("#customerCd", customerCd)
};
module.exports.logout = function(client){
    client
      .useCss()
      .click('html body div.wm-head header.wm-header p.wm-btnLogout a')
      .pause(1000);
};
