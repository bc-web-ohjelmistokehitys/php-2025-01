# My First Docker PHP project!

## Develop

Docker is required.

- `docker compose up` to start. Keep this running in one terminal.
- `psql postgres://postgres:example@localhost:5433/postgres < data.sql` in another shell to create DB schema and insert data. This needs only to be run once or when `db` is removed.
- Open `http://localhost:8080` to see it in action.
- `ctrl + c` to end the docker compose in that shell
- `docker compose down` to remove containers.
