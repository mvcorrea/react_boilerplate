# react_boilerplate
## Simple react scripts to begin a new application with git/docker integration

### !!! React Boilerplate

    > export PRJ="client"
    > mkdir $PRJ && cd $_
    > echo node_modules\\n.DS_Store\\nbuild > .gitignore
    > yarn init -y && git init
    > mkdir public src src/components
    > touch public/index.html src/index.js
    > yarn add react react-dom
    > yarn add --dev webpack webpack-cli webpack-dev-server html-webpack-plugin html-loader
    > yarn add --dev @babel/core @babel/preset-react @babel/preset-env babel-loader style-loader css-loader
    > touch webpack.config.js .babelrc
    ! see content in "webpack.config.js"
    ! see content in ".babelrc"
    > yarn start | yarn build

### !!! Git

    > git remote add origin https://github.com/mvcorrea/react_boilerplate.git
    ! I git pull origin master to merge the previously created README.md
    > git pull origin master --allow-unrelated-histories
    > git add –-all
    > git commit -m "first commit"
    > git push origin master 
    ! the on other computer
    > git clone https://github.com/mvcorrea/react_boilerplate.git

### !!! Docker

    > touch Dockerfile .dockerignore
    ! see content in Dockerfile
    ! see content in .dockerignore
    > docker build -t react_app_sample .
    ! list images
    > docker images
    ! list containers         
    > docker ps -as
    ! stop  containter
    > docker stop <container id>
    ! remove container
    > docker rm <container id>
    ! remove image
    > docker rmi <image id>
    ! run container 
    > docker run -d -p 5000:5000 --name react_app_sample react_app_sample
    ! get into the container
    > docker exec -it react_app_sample /bin/sh

