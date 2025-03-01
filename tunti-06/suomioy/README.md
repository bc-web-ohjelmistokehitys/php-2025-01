# Suomioy Laravel App

## Requirements

- PHP, composer, the usual.
- Docker

- https://laravel.com/docs/12.x

You can install all the required with a one-liner from Laravel's docs.

## Develop

- `composer install`
- `npm install`
- `cp .env.example .env`
- `php artisan key:generate`
- `./vendor/bin/sail up` in one terminal
- `npm run dev` in another terminal
- `./vendor/bin/sail artisan migrate` in a third, command-running terminal

### Database

We also need the big person data from the previous DB course!

If you don't have it, you can get one from the hunajapurkki server. Password is shared in our Discord server!

This command copies the file to your current directory, so mind where you are.

- `scp -C hakkeri@hunajapurkki.pekkis.eu:~/suomioy-2025-02-28.sql .`

Then, we just read the SQL file into our dockerized database. The hosts and passwords et al must of course match with your own settings, these are the defaults from .env.example.

- `psql postgres://sail:password@localhost/laravel < ./suomioy-2025-02-28.sql`

Finally, just surf to http://localhost
