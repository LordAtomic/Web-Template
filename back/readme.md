# Back office - Template 

## Docs

 - Add Api-Platform on Symfony project see : [symfony-4-api-platform-application](https://www.nielsvandermolen.com/symfony-4-api-platform-application/)

## Install

In `back`

Copy `.env.dist` to `.env`

```bash 
composer install
php bin/console doctrine:database:create
php bin/console doctrine:schema:update -f
php bin/console doctrine:fixtures:load
```

Generate private and public key for JWT authentication
```bash 
openssl genrsa -out config/jwt/private.pem -aes256 4096
openssl rsa -pubout -in config/jwt/private.pem -out config/jwt/public.pem
```

Change `JWT_PASSPHRASE` in .env

Run the Web server
```bash
php bin/console server:start *:8081
```

```bash 
curl -X POST http://localhost:8081/register -d _username=antoine -d _password=antoine
```

```bash 
curl -X POST -H "Content-Type: application/json" http://localhost:8081/login_check -d '{"username":"antoine","password":"antoine"}'
```
