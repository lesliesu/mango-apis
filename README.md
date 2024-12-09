<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

The API has been deployed to AWS, You can try it by accessing the following endpoint:

`https://g85kxwtey6.execute-api.ap-southeast-2.amazonaws.com/customers`

Alternatively, you can run the app locally as a NestJS app or AWS lambda functions as mentioned in steps below, then try it on your local endpoint:

`http://localhost:3000/customers`

## Installation

```bash
$ npm install
```

## Running as a NestJS app

(a known issue was found: you have to run `npm offline` once before the following commands can run successfully on this option, this is to be resolved. Probably run with lambda functions locally instead for now)

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running as AWS Lambda functions locally

```bash
$ npm run offline
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
