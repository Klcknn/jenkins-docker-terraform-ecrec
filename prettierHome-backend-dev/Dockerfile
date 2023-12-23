#FROM maven:3.8.1-openjdk-11-slim AS build
FROM maven:4.0.0-openjdk-17-slim AS build
RUN mkdir -p workspace
WORKDIR /workspace
COPY pom.xml /workspace/
COPY src /workspace/src
RUN mvn clean package -DskipTests

FROM adoptopenjdk:17-jre-hotspot
COPY --from=build /workspace/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]