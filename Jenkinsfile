pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        JEST_JUNIT_OUTPUT_NAME = 'junit.xml'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/pemayangkid/pemayd_dsoa1.git'
            }
        }

        stage('Install') {
            steps {
                bat 'npm install'
                bat 'cd backend && npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
            post {
                always {
                    junit 'backend/junit.xml'
                }
            }
        }

    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the logs above.'
        }
    }
}