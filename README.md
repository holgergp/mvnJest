# mvnjest

[![Build Status Travis](https://travis-ci.org/holgergp/mvnJest.svg?branch=master)](https://travis-ci.org/holgergp/mvnJest)


mvnjest serves as an example how to use Jest in an Spring-Boot/Maven environment.

The idea is to manage all client side artifacts by npm/webpack and to reference them in the Spring-Boot app via web-jars.

## Installation

- If you just want to see the app just run `mvn spring-boot:run`
  - This will do a client build and you are good to go.

### Details
If you want to have some more control:
- `npm install` to get all client side libs.
- `npm start` to build the web-jar.
- `mvn clean install` to build the server part

## Running

- Run the Spring Boot app via `mvn spring-boot:run` or via IDE (I run it via IntelliJ Spring-Boot-Dashboard)

Looking at http://localhost:8080 will show the simple webapp.

## Testing

- `npm test` will run the jest tests

