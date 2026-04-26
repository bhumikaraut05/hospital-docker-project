pipeline {
    agent any

    environment {
        IMAGE_NAME = "hospital-app"
        CONTAINER_NAME = "hospital-container"
        PORT = "8080"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                bat "docker build -t %IMAGE_NAME% ."
            }
        }

        stage('Stop Old Container') {
            steps {
                bat """
                docker stop %CONTAINER_NAME% || exit 0
                docker rm %CONTAINER_NAME% || exit 0
                """
            }
        }

        stage('Run Container') {
            steps {
                bat "docker run -d -p %PORT%:8080 --name %CONTAINER_NAME% %IMAGE_NAME%"
            }
        }
    }
}
