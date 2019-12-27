pipeline {
    agent any 
    stages {
        stage('Deploy') {
            steps {
                sh '''
                    curl -O http://localhost:8443/job/drummer/lastSuccessfulBuild/artifact/drummer.tar.gz
                    scp drummer.tar.gz root@li2041-12.members.linode.com:/var/www/html
                    ssh root@li2041-12.members.linode.com "cd /var/www/html && tar -xvf drummer.tar.gz && rm -vf drummer.tar.gz"
                '''
            }
        }
    }
}