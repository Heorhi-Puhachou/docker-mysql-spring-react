Prepopulated mysql container
============================

Based on https://github.com/iamdvr/prepopulated-mysql-container-example

Build image
```
docker build --tag prepopulated-db-image .
```

Start container from image
```
docker compose up
```
or without console blocking
```
docker compose up -d
```

Check data in DB
```
docker run -it --rm --network custom-network --link prepopulated-db-container mysql:latest mysql -hprepopulated-db-container -uroot -proot myexample -e "select * from game;"
```

You can connect to inner console and work with data
```
docker exec -it prepopulated-db-container bash
```

Here you must specify password (root) after executing:
```
mysql -u root -p
```

Select DB
```
use myexample
```

Execute query
```
SELECT * FROM game;
```
