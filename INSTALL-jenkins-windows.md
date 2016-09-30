# Jenkins 取得
    https://jenkins.io/content/thank-you-downloading-windows-installer/#stable

# Required
    http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
    上記からarchに合ったjdkを取得しインストール

# INSTALL
    jenkins,oracle-jdkそれぞれをインストール

# Jenkins port setting
    インストールディレクトリ配下の jenkins.xml の「--httpPort=8080」を変更
    Jenkins起動後「Jenkinsの管理」->「システムの設定」->「Jenkinsの位置」のポート部分を変更したポートに変更
    管理ツール -> サービス でJenkinsを再起動


# ブラウザからログイン
    http://localhost:8080
