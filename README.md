# A full-stack To-Do app with Spring Boot and React using the Hilla framework

This project is a full-stack example of a To-Do application using Spring Boot, React and the [Hilla framework](https://hilla.dev/).

## Requirements

To run the project, you need:

-   Java 17 or newer
-   Node 18.0 or newer

## Running the application

The project is a standard Maven project. To run it from the command line,
type `mvnw` (Windows), or `./mvnw` (Mac & Linux), then open
http://localhost:8080 in your browser.

You can also import the project to your IDE of choice as you would with any
Maven project.

## Deploying to Production

To create a production build, call `mvnw clean package -Pproduction` (Windows),
or `./mvnw clean package -Pproduction` (Mac & Linux).
This will build a JAR file with all the dependencies and front-end resources,
ready to be deployed. The file can be found in the `target` folder after the build completes.

Once the JAR file is built, you can run it using
`java -jar target/hilla-todo-1.0-SNAPSHOT.jar` (NOTE, replace
`hilla-todo-1.0-SNAPSHOT.jar` with the name of your jar).


## Useful links

- Read the documentation at [hilla.dev/docs](https://hilla.dev/docs/).
- Ask questions on [Stack Overflow](https://stackoverflow.com/questions/tagged/hilla) or join our [Discord channel](https://discord.gg/MYFq5RTbBn).
- Report issues, create pull requests in [GitHub](https://github.com/vaadin/hilla).
