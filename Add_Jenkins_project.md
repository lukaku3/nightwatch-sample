# jenkins のworkspaceへnightwatchを配置する
## Linux
    /var/lib/jenkins/workspace へchekoutする。
    checkout後にnightwatch以下をjenkins権限とする
    chown -R jenkins. nightwatch
## Windows
    cd %WORKSPACE%
    ここへcheckout。
    リポジトリ情報はREADME.mdにあるCheckout from Subversion(共通)を参照


- ログイン
- New Item
- Enter an item name(半角英字
- Freestyle project
- OK
- 定期実行させる場合
-- Build Triggers > Build periodically
    毎時0分0秒に実施の場合
    H * * * *
- Build
-- Windows
--- Execute Windows batch command
-- Linux
--- Execute shell

# ここまで登録し、Saveして左のメニューよりBuildを実行し正常終了したら下記を実施

- Dash Boardにてプロジェクトのリストから作成したプリロジェクトを開く
-- Configure
--- Post-build Actions(上のタブをクリックでも良い
---- Post-Build Actions
    Add post-build actionよりPublish JUinit test result reportを選択
    Test report XMLs へ「reprots/spec/*/*.xml」を入力しSave

