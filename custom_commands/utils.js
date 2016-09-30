const moment = require('moment');

// this script need "Site > jp.vcube.com > NULL > dir > dir".
module.exports.opendir0 = function (client) {
    client
      .waitForElementPresent("#g1 > span.close", 5000)
      .click('#g1 > span.close')
      .pause(1000)
      .click('#g2 > span.close')
      .pause(1000)
      .click('#g3 > span.close')
      .pause(1000)
      .click('#g375 > span.close')
      .pause(1000)
      .click('#g375 > span.loadB')
      .pause(1000)
};

// this script need "Site > jp.vcube.com > NULL > dir ".
module.exports.opendir1 = function (client) {
    client
      .waitForElementPresent("#g1 > span.close", 5000)
      .click('#g1 > span.close')
      .pause(1000)
      .click('#g2 > span.close')
      .pause(1000)
      .click('#g3 > span.close')
      .pause(1000)
      .click('#g375 > span.close')
      .pause(1000)
};
// Bエリア削除押下
module.exports.delete_tr = function (client){
    client
        .moveToElement('#bTrTemplate > td:nth-child(3)', 10, 10).mouseButtonClick('right')
        .waitForElementPresent(".rightMenu", 5000)
        .pause(1000)
        .useXpath()
        .pause(1000)
        .click('//a[text()="削除"]')
        .pause(1000)
        .useCss()
};
// ディレクトリ編集押下
module.exports.edit_directory = function (client){
    client
        .useXpath()
        .click('//a[text()="ディレクトリ編集"]')
        .pause(1000)
        .useCss()
};
// loadingが消えるまで
module.exports.waitForElementNotPresent = function (num){
    num = (+num) ? Math.ceil(num) : 1000;
    this.waitForElementNotPresent('.progress-image > img', num)
};
// 当日取得(+ diff)
module.exports.date_add = function (diff){
    diff = (+diff) ? Math.ceil(diff) : 0;
    return moment().add('days', diff).format("YYYY-MM-DD");
};
// 編集リストを開く
module.exports.open_edit = function (client){
    client.click("#editPulldown")
};
// 管理リストを開く
module.exports.open_mng = function (client){
    client
        .pause(2000)
//        .waitForElementPresent('#adminPulldown"', 10000)
        .click("#adminPulldown")
};
// 管理リストの検索を開く
module.exports.open_mng_search = function (client){
    client
        .pause(1000)
        .click("#ListBySearchPageForm")
        .waitForElementPresent(".modal-content", 9000)
};
// 検索ダイアログの公開期間開始日
module.exports.open_mng_start_date = function (client, dt){
    client
        .pause(1000)
        .click('#startPublishDate > ul > li > input')
        .pause(1000)
        .setValue('#startPublishDate > ul > li > input', dt)
};
// 検索ダイアログの公開期間終了日
module.exports.open_mng_expired_date = function (client, dt){
    client
        .pause(1000)
        .click('#endPublishDate > ul > li > input')
        .clearValue('#endPublishDate > ul > li > input')
        .pause(2000)
        .setValue('#endPublishDate > ul > li > input', dt)
};
// 検索ダイアログの編集者をクリック
module.exports.open_mng_edit_user = function (client, val){
    val = (val) ? val : "somebody";
    try{
        client
            .pause(1000)
            .useXpath()
            .click('//*[@id="listSearchUser"]/option[.="' + val + '"]')
            .useCss()
    }catch(e){
        client
            .pause(1000)
            .useXpath()
            .assert.elementPresent('//*[@id="listSearchUser"]/option[.="' + val + '"]')
            .useCss()
            // TBD
    }finally{

    }
    client.pause(1000)
};
// 検索ダイアログ　編集状態
module.exports.open_mng_page_status = function (client, val){
    client
        .pause(1000)
        .click('#search-process-form > div.wm-subScroll > div.wm-inner > table > tbody > tr:nth-child(3) > td > span > select')
        .useXpath()
        .pause(1000)
        .click('//*[@id="search-process-form"]/div[1]/div[1]/table/tbody/tr[3]/td/span/select/option[.="'+val+'"]')
        .useCss()
        .pause(1000)
};
// 検索ダイアログの編集者グループをクリック
module.exports.open_mng_edit_group = function (client, val){
    try{
        client
            .pause(1000)
            .useXpath()
            .click('//*[@id="listSearchGroup"]/option[.="'+val+'"]')
            .useCss()
            .keys(client.Keys.ESCAPE)
    }catch(e){
        client
            .pause(1000)
            .useXpath()
            .assert.elementPresent('//*[@id="listSearchGroup"]/option[.="'+val+'"]')
            .useCss()
            .keys(client.Keys.ESCAPE)
    }finally{

    }
    client.pause(5000)
};
// 検索ダイアログの検索をクリック
module.exports.click_dialog_search = function (client){
    client
        .pause(1000)
        .click('#listSearchButton')
        .pause(1000)
};
// 別窓へ切り替え
module.exports.get_next_window_id = function (client){
    var id = undefined;
    client
        .window_handles(function(result){
             if(result.value.length == 1){
                 return false;
             }
             id = result.value[1];
        })
    return id;
};
// 管理リストの作業進行を開く
module.exports.open_proc = function (client){
    client
        .pause(1000)
        .click("#ListBySearchProcessForm")
        .waitForElementPresent(".modal-content", 19000)
};
// 作業進行の最終更新者グループを開く
module.exports.open_proc_edit_group = function (client, nam){
    nam = (nam) ? nam : 'xyz';
    client
        .pause(1000)
        .click('#listSearchGroup')
        .pause(1000)
        .useXpath()
        .click('//option[text()="' + nam + '"]')
        .useCss()
        .keys(client.Keys.ESCAPE)
};
// 作業進行の最終更新者を開く
module.exports.open_proc_edit_user = function (client, nam){
    nam = (nam) ? nam : 'selenium0 rows';
    client
        .pause(1000)
        .click('#listSearchUser')
        .pause(1000)
        .useXpath()
        .click('//*[@id="listSearchUser"]/option[text()="' + nam + '"]')
        .useCss()
        .keys(client.Keys.ESCAPE)
};
// 作業進行の期間のselect
module.exports.open_proc_select_span = function (client, nam){
    nam = (nam) ? nam : '最終編集日';
    client
        .click('#spanKind')
        .pause(1000)
        .useXpath()
        .click('//*[@id="spanKind"]/option[.="' + nam + '"]')
        .useCss()
        .pause(1000)
        .click('#spanKind')
//        .keys(client.Keys.ESCAPE)
        .pause(1000)
};
// 作業進行の公開状態を選択
module.exports.open_proc_select_pgstat = function (client, nam){
    nam = (nam) ? nam : '（公開状態）';
    client
        .click('#searchProcessForm')
        .useXpath()
        .click('//*[@id="search-process-form"]/div[1]/div[1]/table/tbody/tr[3]/td/span[1]/select/option[.="' + nam + '"]')
        .useCss()
};
// 作業進行の承認状態
module.exports.open_proc_select_approv = function (client, nam){
    nam = (nam) ? nam : '1次承認待ち';
    client
        .click('#searchProcessForm')
        .useXpath()
        .click('//*[@id="search-process-form"]/div[1]/div[1]/table/tbody/tr[3]/td/span[2]/select/option[.="' + nam + '"]')
        .useCss()
};
// 作業進行の優先度
module.exports.open_proc_select_priority = function (client, nam){
    nam = (nam) ? nam : '緊急';
    client
        .click('#searchProcessForm')
        .useXpath()
        .click('//*[@id="search-process-form"]/div[1]/div[1]/table/tbody/tr[3]/td/span[3]/select/option[.="' + nam + '"]')
        .useCss()

};
// 管理リストの画像・素材を開く
module.exports.open_img = function (client){
    client
        .pause(1000)
        .click("#ImageMaterial")
        .waitForElementPresent(".modal-content", 19000)
};
// 管理リストの画像・素材/Images/seleniumを開く
module.exports.open_img_dir = function (client){
    client
        .useXpath()
        .click('//li[@class="aTree"]/span[@class="close"]/span[.="Images"]')
        .waitForElementNotPresent('.progress-image > img', 20000)
        .waitForElementPresent('//li[@class="aTree"]/ul/li[@class="aTree"]/span/span[.="selenium"]', 20000)
        .useXpath()
        .click('//li[@class="aTree"]/ul/li[@class="aTree"]/span/span[.="selenium"]')
        .useCss()
        .pause(1000)
};
// 管理リストの画像・素材をアップロード
module.exports.open_img_upfile = function (client){
    console.log( __dirname );
    client
//        .click('#submitUploadMaterialButton')
        .pause(1000)
        .setValue('input[type="file"]', '354.jpg')
//        .setValue('input[type="file"]', 'http://localhost/354.jpg')
        .sendKeys('input[type="file"]', '354.jpg')
//        .waitForElementNotPresent('.progress-image > img', 20000)
//        .keys(client.Keys.ENTER)
};
// 管理リストのフォルダ作成(under nam of dir)
module.exports.open_mkdir = function (client, nam){
    nam = (nam) ? nam : "selenium";
    client
        .useXpath()
        .moveToElement('//li[@class="aTree"]/ul/li[@class="aTree"]/span/span[.="' + nam + '"]', 1, 1).mouseButtonClick('right')
        .useXpath()
        .click('//*[@class="rightMenu"]/li/a[text()="フォルダの新規作成"]')
        .pause(3000)
        .useXpath()
        .expect.element('//*[@id="imageMaterialTable"]/tbody/tr[1]/td[1]/span[text()="New_folder"]').to.be.present
    client.useCss()
};
// 管理リストのフォルダ削除
module.exports.open_rmdir = function (client, nam){
    nam = (nam) ? nam : "New_folder";
    client
        .useXpath()
        .expect.element('//*[@id="imageMaterialTable"]/tbody/tr[1]/td[1]/span[text()="New_folder"]').to.be.present
    client
        .useXpath()
        .moveToElement('//*[@id="imageMaterialTable"]/tbody/tr[1]/td[1]/span[text()="' + nam + '"]', 1, 1).mouseButtonClick('right')
        .pause(1000)
        .useXpath()
        .click('//*[@class="rightMenu"]/li/a[text()="削除"]')
        .pause(1000)
        .useXpath()
        .expect.element('//*[@id="imageMaterialTable"]/tbody/tr[1]/td[1]/span[text()="New_folder"]').to.not.be.present
    client.useCss()
};
// 管理リストのファイルをリネーム
module.exports.open_rename_file = function (client, bf, af){
    bf = (bf) ? bf : '354.jpg';
    af = (af) ? af : '_' + bf;

    client
        .expect.element('.showImage[title="' + bf + '"]').to.be.present
    client
        .moveToElement('.showImage[title="' + bf + '"]', 1, 1).mouseButtonClick('right')
        .pause(1000)
        .useXpath()
        .click('//*[@class="rightMenu"]/li/a[text()="名前の変更"]')
        .useCss()
        .expect.element('#renameMaterial').to.be.present
    client
        .expect.element('#renameMaterial').to.have.value.that.equals( bf )
    client
        .clearValue('#renameMaterial')
        .setValue('#renameMaterial', af)
    client
        .click('#materialRenameButton')
        .accept_alert()
        .pause(2000)

        .moveToElement('.showImage[title="' + af + '"]', 1, 1).mouseButtonClick('right')
        .pause(1000)
        .useXpath()
        .click('//*[@class="rightMenu"]/li/a[text()="名前の変更"]')
        .useCss()
        .clearValue('#renameMaterial')
        .setValue('#renameMaterial', bf)

        .click('#materialRenameButton')
        .accept_alert()
        .pause(2000)
        .expect.element('.showImage[title="' + bf + '"]').to.be.present
};
// 管理リストの公開ログを開く
module.exports.open_publog = function (client){
    client
        .pause(1000)
        .click("#PublishLog")
        .waitForElementPresent(".modal-content", 19000)
};
// 管理リストの公開ログ検索
module.exports.open_publog_search = function (client, dt_start, dt_expired){
    dt_start   = (dt_start)   ? dt_start   : '2016/09/21';
    dt_expired = (dt_expired) ? dt_expired : '2016/09/23';
    client
        .click('#startDate > ul > li > input')
        .pause(1000)
        .clearValue('#startDate > ul > li > input')
        .pause(1000)
        .setValue('#startDate > ul > li > input', dt_start)
        .pause(1000)

        .click('#endDate > ul > li > input')
        .pause(1000)
        .clearValue('#endDate > ul > li > input')
        .pause(1000)
        .setValue('#endDate > ul > li > input', dt_expired)
        .pause(1000)
        .click('#publishLogTitle')
        .click('#publishLogDaySearch')
        .waitForElementNotPresent('.progress-image > img', 10000)
};
// 管理リストの公開ログをダウンロード
module.exports.open_publog_dl = function (client){
    client
        .click('#publishLogDayDownload')
        .waitForElementNotPresent('.progress-image > img', 10000)
        .pause(1000)
};
// 管理リストのユーザ開く
module.exports.open_user = function (client, nam){
    nam = (nam) ? nam : 'selenium0 rows';
    client
        .pause(1000)
        .click("#ListUser")
        .waitForElementPresent(".modal-content", 19000)
        .useXpath()
        .expect.element('//*[@class="modal-content"]/div[1]/div[1]').text.to.equal('ユーザー管理')
    client
        .useCss()
};
// 管理リストのユーザ数確認
module.exports.open_user_check_limit = function (client, limit){
    limit = (+limit) ? limit : client.globals.values.application.config.user_limit;
    client
        .source( function(result){
            const cheerio = require('cheerio');
            const $ = cheerio.load(result.value);
            var len = $('.wm-subScroll > .wm-dataList > tbody > tr').length;
            client.assert.notEqual(len, client.globals.values.application.config.user_limit); // user limit == 50
        })
};
// 管理リストのユーザ追加
module.exports.open_user_add = function (client, loginId, password, lastName, firstname, email){
    loginId   = (loginId)   ? loginId  : client.globals.values.users.add.loginId;
    password  = (password)  ? password : client.globals.values.users.add.password;
    passwordConfirmation  = password;
    lastName  = (lastName)  ? lastName  : client.globals.values.users.add.lastName;
    firstname = (firstname) ? firstname : client.globals.values.users.add.firstname;
    email     = (email)     ? email     : client.globals.values.users.add.email;

    // input[type="email"]

    client
        .useXpath()
        .expect.element('//*[@id="list-user"]/table/tbody/tr/td/span[text()="' + lastName + '"]').to.not.be.present
    client
        .useCss()
        .click('#listUserRegister') // 追加窓を開く
        .pause(1000)
        .click('#AddUserFormSubmit') // 未入力クリック

        .expect.element('#loginId-error').to.be.present
    client.expect.element('#password-error').to.be.present
    client.expect.element('#passwordConfirmation-error').to.be.present
    client.expect.element('#lastName-error').to.be.present
    client.expect.element('#firstname-error').to.be.present
    client.expect.element('#email-error').to.be.present
    // INPUT
    client
        .pause(500)
        .clearValue('#loginId')
        .setValue('#loginId', loginId)
        .pause(500)
        .clearValue('#password')
        .setValue('#password', password)
        .pause(500)
        .clearValue('input[name="passwordConfirmation"]')
        .setValue('input[name="passwordConfirmation"]', password)
        .pause(500)
        .clearValue('#lastName')
        .setValue('#lastName', lastName)
        .pause(500)
        .clearValue('#firstname')
        .setValue('#firstname', firstname)
        .pause(500)
        .clearValue('input[type="email"]')
        .setValue('input[type="email"]', email)
        .pause(500)
    client
        .click('#AddUserFormSubmit')
        .accept_alert()
        .waitForElementNotPresent('.progress-image > img', 19000)

        .useXpath()
        .expect.element('//*[@id="list-user"]/table/tbody/tr/td/span[text()="' + lastName + '"]').to.be.present
    client.useCss()
};
// 管理リストのユーザ編集を開く
module.exports.open_user_edit = function (client, nam){
    nam = (nam) ? nam : client.globals.values.users.add.lastName;
    client
        .useXpath()
        .click('//span[text()="' + nam + '"]/parent::*/parent::*/td/button')
        .pause(1000)    // IE11だけ妙なアラートが上がるので一時対応
        .accept_alert() // IE11だけ妙なアラートが上がるので一時対応
        .useCss()
};
// 管理リストのユーザ編集を開く
module.exports.open_user_edit_default = function (client, nam){
    nam = (nam) ? nam : client.globals.values.users.add.lastName;
    client
        .pause(500)
        .click('#UpdateUserFormDefaultSelect')

//    client.expect.element('#pageSelectionTree > li').to.have.attribute('data-path', "/jp.vcube.com");
    // /jp.vcube.com/NULL/selenium/WM-14を開く
    client
        .pause(500)
        .click('#pageSelectionTree > li[data-path="/jp.vcube.com"] > span > img')
        .pause(500)
        .click('#pageSelectionTree > li[data-path="/jp.vcube.com"]  > ul > li > span > img')
        .pause(500)
        .click('#pageSelectionTree > li[data-path="/jp.vcube.com"]  > ul > li > ul  > li[data-path="/jp.vcube.com/NULL/selenium"] > span > img')
        .pause(500)
        .click('#pageSelectionTree > li[data-path="/jp.vcube.com"]  > ul > li > ul  > li[data-path="/jp.vcube.com/NULL/selenium"] > ul > li[data-path="/jp.vcube.com/NULL/selenium/WM-14"] > span > img')
        .useXpath()
        .click('//span[text()="WM-14"]')
        .useCss()
        .pause(500)
        .click('#selectPathButton') // push down ok btn
        .pause(500)
        .useXpath()
        .expect.element('//tr/th[@id="UpdateUserFormDefault"]/parent::*/td/span').text.to.equal('/jp.vcube.com/NULL/selenium/WM-14');
    client
        .useCss()
        .pause(1000)
        .waitForElementNotPresent('.progress-image > img', 19000)
        .click('#UpdateUserFormSubmit')     // push down update btn
        .pause(2000)
        .accept_alert()
        .pause(1000)
        .click('.wm-btnCancel.modalDClose') // push down cancel btn

};
// 管理リストのユーザ削除する
// open_user_edit　→　.click('#deleteUserButton')

// 管理リストのグループリストを開く
module.exports.open_group = function (client){
    client
        .pause(1000)
        .click("#ListGroup")
        .waitForElementPresent(".modal-content", 19000)
};
// 管理リストのグループリストの追加ボタン
module.exports.open_group_add_btn = function (client, nam){
    nam = (nam) ? nam : client.globals.values.groups.add.name;
    client
        .click('#openAddGroupFormButton') // add new group
        .waitForElementPresent(".modal-content", 19000)
        .pause(1000)
        .useXpath()
        .expect.element('//*[@id="groupListBody"]/tr/td[text()="' + nam + '"]').to.not.be.present
    client.useCss()
}
// 管理リストのグループリストの新規入力
module.exports.open_group_add_new = function (client, grp_name, grp_scope, grp_acc){
    grp_name  = (grp_name)  ? grp_name  : 'used_by_selenium';
    grp_scope = (grp_scope == 1 )  ? 'scopeAll'       : 'scopeLimited'; // 限定は未実装
    grp_acc  = (grp_acc  == 1 )  ? 'accessScopeAll' : 'accessScopeLimited'; // 限定は未実装

    client
        .pause(1000)
        .useXpath()
        .expect.element('//*[@id="groupListBody"]/tr/td[text()="' + grp_name + '"]').to.not.be.present
    client
        .useCss()
        .pause(1000)
        .click('#openAddGroupFormButton')
        .pause(1000)
        .waitForElementPresent('.modal-content', 19000)

        .setValue('.wm-dataForm > tbody > tr > td > input', grp_name)
    if ( grp_scope != 'scopeAll'){}
    if ( grp_scope != 'accessScopeAll'){}

    client
        .click('#updateGroupButton')
        .accept_alert()
        .waitForElementPresent('.modal-content', 19000)
//        .expect.element('//*[@id="groupListBody"]/tr/td[text()="' + grp_name + '"]').to.be.present

};
// 管理リストのグループ削除
module.exports.open_group_del = function (client, grp_name){
    grp_name  = (grp_name)  ? grp_name  : 'used_by_selenium';

    client
        .useXpath()
        .expect.element('//*[@id="groupListBody"]/tr/td[text()="selenium0"]').to.be.present
    client
        .useCss()
        .pause(1000)
        .source( function(result){
            const cheerio = require('cheerio');
            const $ = cheerio.load(result.value);
            $('.wm-subScroll > .wm-dataList > tbody > tr').each( function(i){
                if( $(this).find('tr > td:nth-child(1)').text() == grp_name ){
                    client.click('#groupListBody > tr:nth-child(' + (i + 1) + ') > button')
                }
            })
        })
        .expect.element('#deleteGroupButton').to.be.present
    client
        .click('#deleteGroupButton')
        .pause(1000)
        .accept_alert()
        .pause(3000)
        .waitForElementPresent('.modal-content', 19000)
    client
        .useXpath()
        .expect.element('//*[@id="groupListBody"]/tr/td[text()="selenium0"]').to.be.present
    client
        .useCss()
};
// 管理リストのワークフローを開く
module.exports.open_flow = function (client){
    client
        .pause(1000)
        .click("#ListApprovalFlow")
        .pause(1000)
//        .waitForElementPresent(".modal-content", 19000)
};
// 管理リストのワークフローにて新規追加をクリック
module.exports.open_flow_add_btn = function (client,nam){
    nam = (nam) ? nam : 'selenium_test';
    client
        .pause(1000)
        .click("#workflowSubmit")
//        .waitForElementPresent(".modal-content", 19000)
    client
        .useXpath()
        .expect.element('//span[text()="' + nam + '"]').to.not.be.present
    client
        .useCss()
};
// 管理リストのワークフローにて新規入力
module.exports.open_flow_select = function (client, nam, btn_nam){
    nam = (nam) ? nam : '省略';
    btn_nam = (btn_nam > 0 && btn_nam < 4) ? btn_nam : 1;
    if (btn_nam > 1){
        client
            .useXpath()
            .click('//*[@id="Form"]/div[1]/div/table/thead/tr/th/select/option[contains(text(),"IR")]')
            .pause(1000)
//            .waitForElementPresent(".modal-content", 19000)
    }
    client
        .useXpath()
        .click('//*[@id="Form"]/div[1]/div/table/thead/tr/th/select/option[.="権限テストグループ"]')
        .pause(1000)
        .click('//*[@id="Form"]/div[1]/div/table/tbody/tr[1]/td[5]/select/option[contains(text(),"' + nam + '")]') //後方一致
        .pause(1000)
        .clearValue('//*[@id="Form"]/div[1]/div/table/tbody/tr[1]/td[5]/select/option[contains(text(),"' + nam + '")]') //後方一致
        .useCss()
        .click('#Form > div.wm-subScroll > div > table > tbody > tr:nth-child(' + btn_nam + ') > td:nth-child(4) > button:nth-child(1)')
};
// 管理リストのワークフローの範囲設定(/jp.vcube.com/NULL/test_demoを利用)
module.exports.open_flow_select2 = function (client, nam){
    nam = (nam) ? nam : client.globals.values.work_flow.range.default;
    client
        .useXpath()
        .click('//*[@id="EditScopeForm"]/div[1]/div/table/tbody/tr/td[.="' + nam + '"]/parent::*/td/input')
        .useCss()
        .pause(1000)
};
// 管理リストのワークフローの名づけ
module.exports.open_flow_set_nam = function (client, nam){
    nam = (nam) ? nam : 'selenium_test';
    client
        .setValue('#UpdateApprovalFlowForm > div.wm-subScroll > div > table > tbody > tr:nth-child(1) > td > input[type="text"]', nam)
        .pause(1000)
};
// 管理リストのワークフローリストから対象を探し編集
module.exports.open_flow_edit = function (client, nam){
    nam = (nam) ? nam : 'selenium_test';
    client
        .useXpath()
        .expect.element('//span[text()="' + nam + '"]').to.be.present
    client
        .useCss()
    client
        .source( function(result){
            const cheerio = require('cheerio');
            const $ = cheerio.load(result.value);
            $('.wm-dataList.workflow-list > tbody > tr').each( function(i){
                if( $(this).find('tr > td:nth-child(2) > span:nth-child(1)').text() == nam ) {
                    client.click('.wm-dataList.workflow-list > tbody > tr:nth-child(' + (i + 1) + ') > td.wm-btnList > ul > li.workflowEdit')
                }
            })
        })
};
// 管理リストのワークフローリストから対象を探しアラートメールbtnを押す
module.exports.open_flow_email = function (client, nam){
    nam = (nam) ? nam : 'selenium_test';
    client
        .source( function(result){
            const cheerio = require('cheerio');
            const $ = cheerio.load(result.value);
            $('.wm-dataList.workflow-list > tbody > tr').each( function(i){
                if( $(this).find('tr > td:nth-child(2) > span:nth-child(1)').text() == nam ) {
                    client.click('.wm-dataList.workflow-list > tbody > tr:nth-child(' + (i + 1) + ') > td.wm-btnList > ul > li.workflowEmail')
                   return false;
                }
            })
        })
};
// 管理リストのワークフローリストから対象を探し削除
module.exports.open_flow_del = function (client, nam){
    nam = (nam) ? nam : 'selenium_test';
    client
        .source( function(result){
            const cheerio = require('cheerio');
            const $ = cheerio.load(result.value);
            $('.wm-dataList.workflow-list > tbody > tr').each( function(i){
                if( $(this).find('tr > td:nth-child(2) > span:nth-child(1)').text() == nam ) {
                    client.click('.wm-dataList.workflow-list > tbody > tr:nth-child(' + (i + 1) + ') > td.wm-btnList > ul > li.workflowDelete')
                }
            })
        })
    .accept_alert()
};
// 管理リストのワークフローの名前を入力
module.exports.open_flow_set_name = function (client, nam, dsc){
    nam = (nam) ? nam : 'selenium_test';
    client.expect.element('#UpdateApprovalFlowForm > div.wm-subScroll > div > table > tbody > tr:nth-child(1) > td > input[type="text"]').to.be.present;
    client.expect.element('#UpdateApprovalFlowForm > div.wm-subScroll > div > table > tbody > tr:nth-child(1) > td > input[type="text"]').to.be.present;
    client
        .setValue('#UpdateApprovalFlowForm > div.wm-subScroll > div > table > tbody > tr:nth-child(1) > td > input[type="text"]', nam)
};
// リストの範囲に入力しようとしている値が存在しているかの確認
module.exports.open_flow_reg_or_back = function (client, nam, css_path){
    nam = (nam) ? nam : 'selenium_test';
    css_path = (css_path) ? css_path : 'body > .modal-content > div > table > tbody > tr  > td:nth-child(2) > span:nth-child(1)';
    client
        .source( function(result){
            const cheerio = require('cheerio');
            const $ = cheerio.load(result.value);
            var chk = 0;
            $( css_path ).each( function(i){
                if ( $(this).text() == nam ){
                    chk = 1;
                    return false;
                }
            })
            if (chk == 1){
                console.log('Aleady Exists: ' + nam);
                // 重複登録させないので戻る
                client
                        .click("#updateApprv3Back")
                        .click("#updateApprv2Back")
                        .click("#updateApprvBack")
                        .pause(1500)
                        .click(".wm-btnCancel.modalDClose")
            }else{
                client
                        .click('#updateFlowCompleteButton')
                        .pause(1500)
                        .click(".wm-btnCancel.modalDClose")
            }
        })
};
// 管理リストの環境設定
module.exports.open_config = function (client, id){
    id = (id) ? id : 'UpdatePassword';
    client
        .pause(1000)
        .moveToElement("#Config",1, 1)
        .click('#' + id)
//        .waitForElementPresent(".modal-content", 19000)
};
// Aエリアの右クリックメニューのタグを取得
module.exports.get_rmenu_txt = function (client){
    var rmenu = {};
    client.expect.element('.rightMenu').to.be.present
    client
        .click('#g399 > span.close > span') // open directory WM-A1
        .click('#g399 > span.loadB')        // click WM-A1
        .moveToElement('#g399 > span.loadB', 1, 1).mouseButtonClick('right') // open context menu

        .source( function(result){
            const cheerio = require('cheerio');
            const $ = cheerio.load(result.value);
            $('.rightMenu > li').each( function(i){
                //if ( $(this).html.toString().match(/^\<a/) ){
                if ( $(this).find('li > a').text() ){
                    rmenu[i] = {"a" : $(this).text() };
                } else if( $(this).find('li > span').text() ) {
                    rmenu[i] = {"span" : $(this).text() };
                }
            })
        })
    return rmenu;
};
