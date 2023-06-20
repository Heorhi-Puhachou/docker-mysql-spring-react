FROM amazoncorretto:17
ARG JAR_FILE=target/*.jar
COPY ./target/docker-spring-api.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
EXPOSE 8080