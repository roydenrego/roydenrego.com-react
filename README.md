# roydenrego.com in React
> Personal Portfolio website built in React using the Stimulus Template.
> 
> Migrated Node.js Application - [https://github.com/roydenrego/roydenrego.com](https://github.com/roydenrego/roydenrego.com)


[![License](https://img.shields.io/github/license/roydenrego/roydenrego.com.svg)](https://github.com/roydenrego/roydenrego.com-react/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/roydenrego/roydenrego.com-react.svg?branch=master)](https://travis-ci.org/roydenrego/roydenrego.com-react) 

## Table of Contents
- [roydenrego.com in React](#roydenregocom-in-react)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
      - [Installing & Local Development](#installing--local-development)
  - [Built With](#built-with)
  - [Changelog](#changelog)
      - [V 1.0.0](#v-100)
      - [V 2.0.0](#v-200)
  - [Authors](#authors)
  - [License](#license)
  
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
### Prerequisites

In order to run this site on your local machine all what you need to do is to have the prerequisites stated below installed on your machine and follow the installation steps down below.

  - Node.js
  - Yarn or NPM
  - Git
  
#### Installing & Local Development
Start by typing the following commands in your terminal in order to get `create-react-app` full package on your machine and starting a local development server with live reload feature.

```
> git clone https://github.com/roydenrego/roydenrego.com-react.git roydenrego
> cd roydenrego
> npm install
```

Create a .env file in the root of the project whose contents should be as below:

```
REACT_APP_BASE_URL="API_URL"
REACT_APP_AUTH_USERNAME="API_BASIC_AUTH_USERNAME"
REACT_APP_AUTH_PASSWORD="API_BASIC_AUTH_PASSWORD"
```

The base URL variable is for holding the URL of your REST API Endpoints. This has been deployed in AWS Lambda. 

See the micro-service repository for details and code for deploying the related endpoints: [https://github.com/roydenrego/rego-service](https://github.com/roydenrego/rego-service)

The Basic Authentication username and password must also be specified in the env file as per the deployed API Endpoints.

Once the .env file is setup, you can run the website by executing the following command:
```
> npm start
```

## Built With
- Stimulus Template: [http://www.templatemo.com/tm-498-stimulus](http://www.templatemo.com/tm-498-stimulus)
- News Cards: [https://codepen.io/choogoor/pen/YWBxAg](https://codepen.io/choogoor/pen/YWBxAg)
- SRTdash: [https://github.com/puikinsh/srtdash-admin-dashboard](https://github.com/puikinsh/srtdash-admin-dashboard)
- Create React App: [https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)

## Changelog
#### V 1.0.0
Initial Nodejs Release

#### V 2.0.0
Code rewritten in React

## Authors
[Royden Rego](https://roydenrego.com)

## License

roydenrego.com is licensed under The MIT License (MIT). Which means that you can use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the final products. But you always need to state that Royden Rego is the original author of this template. See ``LICENSE`` for more information.
