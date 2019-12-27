pipeline {
    agent any 
    stages {
        stage('Deploy') {
            steps {
                sh '''
                    scp ../drummer/drummer.tar.gz root@li2041-12.members.linode.com:/var/www/html
                    cat jenkins/remote_script.sh | ssh root@li2041-12.members.linode.com
                '''
            }
        }
    }
}