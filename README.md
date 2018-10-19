## Build Setup

``` bash
# install dependencies
yarn

# serve in dev mode, with hot reload at localhost:8080
yarn dev

# build for production
yarn build

# serve in production mode
yarn start
```


## Generate cert
```bash
sudo certbot certonly --webroot --agree-tos --email jonkofee@icloud.com -w /opt/profile/docker/nginx/cert -d jonkofee.ru -d www.jonkofee.ru --config-dir /opt/profile/docker/nginx/cert/ --webroot-path /opt/profile/docker/nginx/cert/
```

```bash
location /.well-known {
    root /srv/www/cert;
}
```