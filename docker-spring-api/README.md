Spring API container
============================

Build image
```
docker build --tag spring-api-image .
```

Start container from image
```
docker compose up -d
```

Try to execute POST  http://localhost:8080/users/ with body
```
{
"firstName":"FN",
"lastName": "LN"
}
```

Try to execute GET  http://localhost:8080/users
