pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        JEST_JUNIT_OUTPUT_NAME = 'junit.xml'
        DOCKER_IMAGE = 'YOUR_DOCKERHUB_USERNAME/todo-app'
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

        stage('Deploy') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-creds') {
                        def image = docker.build("${DOCKER_IMAGE}:latest", './backend')
                        image.push()
                    }
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