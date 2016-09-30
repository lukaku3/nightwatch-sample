# 参考
    http://qiita.com/yukimunet/items/28c89370fccc86077dd2

# Required
    http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
    上記からarchに合ったjdkを取得しインストールする
    yum localinstall jdk-8u101-linux-x64.rpm

# INSTALL
    cd /etc/yum.repos.d
    curl -O http://pkg.jenkins-ci.org/redhat/jenkins.repo
    rpm --import http://pkg.jenkins-ci.org/redhat/jenkins-ci.org.key
    yum install --enablerepo=jenkins jenkins

# Jenkins port setting
    vim /etc/sysconfig/jenkins #書きの箇所を変更
    JENKINS_PORT="8010"

# Launch
    chkconfig jenkins on
    systemctl jenkins start

# ブラウザからログイン
    http://localhost:8080
    初回だけパスワードを求められるので下記をrootにて実施し内容を入れる
    cat /var/lib/jenkins/secret.key
