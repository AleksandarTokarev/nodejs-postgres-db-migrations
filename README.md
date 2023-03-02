https://github.com/urbica/pg-migrate

# USAGE
`npm install -g @urbica/pg-migrate` 

`pg-migrate --db=postgres --user=postgres --password=admin new <name-of-migration>`  
`pg-migrate --db=postgres --user=postgres --password=admin migrate`  
`pg-migrate --db=postgres --user=postgres --password=admin rollback 1`  

# NodeJS API
You can use `index.js` and use API to create own logic for migration/rollback


# How to start local Postgres?
Start Docker Desktop, navigate to `docker` directory and run (up or down to start or bring down docker images)
```
docker-compose -f docker-compose.yml up
docker-compose -f docker-compose.yml down
```
(docker-compose has different containers - postgres, redis, kafka, etc)

Redis UI - Commander  
http://localhost:8081/  
Kafka UI  
http://localhost:8080/

Postgres username/password are postgres/admin