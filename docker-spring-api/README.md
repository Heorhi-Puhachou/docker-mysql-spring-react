Spring API container
============================

Build jar
```
clean install -DskipTests
```

Build image
```
docker build --tag spring-api-image .
```

Start container from image
```
docker compose up
```

Try to execute POST  http://localhost:8080/users/ with body
{
"firstName":"FN",
"lastName": "LN"
}

Try to execute GET  http://localhost:8080/users
