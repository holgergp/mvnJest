#mvnjest

mvnjest serves as an example how to use Jest in an Spring-Boot/Maven environment.

The idea is to manage all client side artifacts by npm/webpack and to reference them in the Spring-Boot app via web-jars.

##Installation

- `npm install` to get all client side libs.
- `npm start` to build the web-jar.
- `mvn clean install` to build the server part

##Running

- Run the Spring Boot app via `mvn spring-boot:run` or via IDE (I run it via IntelliJ Spring-Boot-Dashboard)

Looking at http://localhost:8080 will show the simple webapp.

##Testing

- `npm test` will run the jest tests

##TODO
- Make the build process more streamlined