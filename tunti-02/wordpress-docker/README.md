# My First Docker PHP project!

## Bibbidi

Bobbidi buu!

# Lollero

Pallero!

## Develop

Docker is required.

- `docker compose up` to start. Keep this running in one terminal.
- `psql postgres://postgres:example@localhost:5433/postgres < data.sql` in another shell to create DB schema and insert data. This needs only to be run once or when `db` is removed.
- Open `http://localhost:8080` to see it in action.
- `ctrl + c` to end the docker compose in that shell
- `docker compose down` to remove containers.

## git commit

- komentorivi
- git
- tekstieditori (vim, pico, nano, emacs, jne)

- git commit
  - git commit -m "viesti" antaa viestin lennossa heittämällä ad hoc
    - tämä ei yleensä hyvä syistä, jotka selitän kohta.
  - git commit ilman ämmää käynnistää tekstieditorin
  - tekstieditori, jota git käyttää, määräytyy EDITOR nimisen **env-muuttujan** perusteella
    - jos tätä ei ole erikseen määrittänyt, vim aktivoituu usein
    - vimiä pitää osata käyttää tai sieltä täytyy osata paeta
      - :q!
    - se, miten EDITOR konffataan niin, että kone sen myöhemmin muistaa, riippuu shellistä (bash, sh, zsh, jne)
      - zsh-shellin profiili asuu `~/.zshrc` tiedostossa
    - shellin alla asuu terminaaliemulaattori (ghostty, perus terminaali, iterm 2)
    -
