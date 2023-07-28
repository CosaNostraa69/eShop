# eShop

# How to install

Copy paste the following commands to setup correctly the project:

```
git clone git@github.com:OrhanMA/eShop.git
cd eShop
```

Then go to the Symfony folder and rename the `.env.dist` to `.env`:

```
cd symfony
mv .env.dist .env
```

Setup your login credentials for you database URL in the .env

<br/>

Now you should edit the .env as you want (you should start by changing the database credentials).

Then install the dependencies for Symfony:

```
cd symfony
composer install
composer require easycorp/easyadmin-bundle
```

Use the following commands to setup your database:

```
php/bin console doctrine:database:create
php/bin console make:mig
php/bin console d:m:m
php bin/console doctrine:fixtures:load
```

And for Next:

```
cd next
npm install
```

Split your terminal in 2 windows/tabs and execute the following commands:

### Terminal 1

```
cd symfony
symfony serve
```

### Terminal 2

If you are not in production:

```
cd next
npm run dev
```

If your project is setup correclty, you should see:

- Api plateform on [http:localhost:8000/api/docs](http:localhost:8000/api/docs)
- Easy admin on [http:localhost:8000/admin](http:localhost:8000/admin)
- The next front-end on [http:localhost:3000/](http:localhost:8000/admin)
