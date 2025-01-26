# Tunti 2

## Alfons-projekti

Puhuimme Alfonsin projektista. Opiskelijat olivat käyneet Alfonsilla, ja kuulleet, mitä tuleman pitää.

Itse en ollut vielä nähnyt materiaaleja, mutta tätä kirjoittaessani olen. Materiaaleissa (yksi toteutettava näkymä mobiili- ja deskari) ei tarjoa PHP-kurssimme kontekstia ajatellen juuri mitään, joten keksimme jotakin uutta ja omaa.

Alkuperäinen lupaukseni siitä, että perehdyn materiaaliin sen nähtyäni ja koodailen, pätee yhä. Ensi perjantaina olemme viisaampia, kun olen itse näkemäni perusteella ehtinyt miettiä asiaa ja koodailla vähän.

## Wordpress-kehitysympäristö

[Local](https://localwp.com/) on varmasti erittäin hyvä kehitysympäristö wordpressille (en tunne wordpress-sceneä kovin hyvin kun en tee sitä), mutta jälleen - erittäin painokkaalla äänellä - kehotan oppimaan ja ymmärtämään Localin tekemät asiat, palat josta se koostuu, tasoa tai kahta syvemmällä.

**Ihan itse tekeminen(tm)** on aina paras vaihtoehto, joten rakennamme Dockerilla kehitysympäristön nollasta. Tavalla tai toisella Local virtualisoi about samat asiat, jotka me teemme itse. Palaset ovat samat.

Viime tunnilla tekemämme Docker-ympäristö soveltuu pohjaksi oikein hyvin. Tarvitsemme seuraavat palaset:

- HTTP-palvelin (Nginx toimii oikein hyvin, meidän pitää vain vähän muokata sen konffia)
- PHP (tätä ei ehkä tarvitse edes muuttaa!)
- MySQL (MariaDB, ei Oraclen pahaa MySQL:ää, kiitos!).
  - Meidän täytyy korvata edellisen kontituksen possukka myskylällä!

### Wordpressin lataus

Latasimme wordpressin ensi hätää zippinä ja purimme projektikansioomme. Tämä ei ole optimaalista, mutta palaamme siihen myöhemmin!

### HTTP-palvelinkonffin säätö

[default.conf](./wordpress-docker/default.conf) kaipasi pientä säätöä, jotta Wordpress hyrskähtää ympäristössämme oikealla tavalla eloon.

```diff
server {
    index index.php index.html;
    server_name phpfpm.local;
    root /var/www/html/public;

+    location / {
+        try_files $uri $uri/ /index.php?$args;
+    }
```

Tässä lisäyksessä on kyse siitä, että kaikki URLit päätyvät lopulta wordpressin `index.php` tiedostolle, jos niitä ei muuten kyetä palvelemaan. Tällä tavalla esimerkiksi kaikki kauniit urlit (/sivu/alasivu), joita ei "oikeasti" ole olemassa, päätyvät wordpressille. Wordpress tulkitsee urlin perusteella mitä on tapahtumassa, ja tekee mitä tykkää.

- Onko oikea tiedosto olemassa?
  - On! Palauta se sellaisenaan!
  - Ei ole.
    - Löytyykö tämän niminen kansio?
      - Löytyy! Mene kansioon ja palvele kansio. Palaa lähtöruutuun kansiossa, sama rumba uudelleen.
      - Ei löydy.
        - Palvele /index.php. Wordpress suorittaa.

### Wordpress-kansion siirto konttiin

Muokkasimme [compose.yml](./wordpress-docker/compose.yml) tiedostoa niin, että `wordpress`-kansio kopioidaan mestoille, ei `public`-kansiota, jonka teimme viime tunnilla.

Kahden edellisen operaation jälkeen, ja konttien käyttämisen alhaalla / buildaamisen jälkeen (muista, näitä voi ja pitää aina rynkytellä),

- `docker compose down`
- `docker compose build`
- `docker compose up`

Wordpress heräsi heti eloon!

![Wordpress kitisee](<Screenshot 2025-01-26 at 11.39.43.png>)

### Mysqli-extensio

Mutta ah ja voi, Wordpressin asennus kitisi meille heti puuttuvasta mysqli-PHP-extensiosta.

Onneksi ratkaisu on helppo. PHP:n [Dockerfile](./wordpress-docker/configs/php-fpm/Dockerfile) se vain kaipailee vähän säätöä. Possukkalaajenokset pois, mysqli tilalle. Helppoa kuin heinänteko.

![Dockerfilen konffausta](<Screenshot 2025-01-26 at 11.51.03.png>)

Ja taas kontit alas ylös buildaukseen, hip hurraa.

![Wordpress nousee](<Screenshot 2025-01-26 at 11.53.34.png>)

Voitto!

### Possukkaisesta myskyläiseen

Poistamme `db` kansion kokonaan, docker luo sen meille uudestaan hetken päästä. Nykyisessä db-kansiossa asuu PostgreSQL-tietokanta, ja sen datasta uusi myskylämme ei ymmärrä mitään.

Wordpress jo kovasti kyselee kieltä, mutta tiedämme, että se ei _voi_ toimia ennen kuin saa Mysql:n. Ja meille ei ole vielä sitä. [compose.yml](./wordpress-docker/compose.yml) kaipaa kovaa säätöä, `possukka` kohdan vaihtamisen `myskylainen` kohdaksi.

Nimeämiseni oli tosi huonoa, joten nimeämme tietokanta-servicen samalla rehdisti `db`:ksi.

Konffaamisen osalta saamme tukea [MariaDB:n virallisen kontin dokumentaatiosta](https://hub.docker.com/_/mariadb). Muutenhan emme lainkaan tietäisi, mitä olemme tekemässä.

![konffausta compose.ymlissä](<Screenshot 2025-01-26 at 11.56.19.png>)

Muistamme myös konffata uuden MariaDB-kontin asumaan samassa verkossa muiden kanssa, koska muuten emme saa siihen yhteyttä.

Kontit alas, kontit ylös!

### Wordpressin asennus

Huh! Nyt voimme tehdä Wordpressin asennuksen loppuun. Käyttäjän, salasanan ja hostin täytyy täsmätä siihen, mitä konffasimme. `host` täsmää servicen nimeen (minulla `db`).

![wordpressin asennus, nämä pitää tietää](<Screenshot 2025-01-26 at 12.03.25.png>)

![ja mehän tiedämme ne](<Screenshot 2025-01-26 at 12.04.11.png>)

Lopulta jatkamme "normaalin" asennusprosessin loppuun kunnes pääsemme admin-paneeliin.

## Git

Puhuimme gitistä aika laajalti ja harjoittelimme sen käyttöä. Sivusimme montaa aihetta.

- komentorivi
  - kuten monesti todettua, komentorivi on elämä
- git
  - OK-tason git-taidot ovat välttämättömät työelämässä
- tekstieditori (vi, vim, pico, **nano**, emacs, jne)
  - "oikeat" koodarit osaavat vimin, minä osaan 20+ vuotta myöhemmin ainoastaan paeta vimistä ja käytän nanoa.
    - https://www.vim.org/ (vim on forkki vi:stä)
    - https://www.nano-editor.org/ (nano on forkki picosta)
- git commit
  - git commit -m "viesti" antaa viestin lennossa heittämällä ad hoc
    - tämä ei yleensä hyvä, koska tekstieditoria käytetään monessa muussakin komennossa kuin commitissa, ja silloin ad hoc ei vain riitä.
  - git commit ilman ämmää käynnistää **tekstieditorin**
  - tekstieditori, jota git käyttää, määräytyy EDITOR nimisen **env-muuttujan** perusteella
    - jos tätä ei ole erikseen määrittänyt, vim aktivoituu usein
    - vimiä pitää osata käyttää tai sieltä täytyy osata paeta
      - :q!
    - `export EDITOR=nano` editorin voi aina konffata lennossa.
    - se, miten EDITOR konffataan niin, että kone sen myöhemmin muistaa, riippuu shellistä (bash, sh, zsh, jne)
      - zsh-shellin profiili asuu `~/.zshrc` tiedostossa
    - shellin alla asuu terminaaliemulaattori (ghostty, perus terminaali, iterm 2)

### Elintärkeät Git-taidot

Näitä ei opi kuuntelemalla, nämä oppii tekemällä, yksin ja ryhmässä. Koodaamaan, siis!

- commitit
  - perus commitointi ja koodin puskeminen originille (github / gitlab / jne)
- diffailu
  - `git diff`
  - diff-syntaksi ylipäätään
- bränchäys
  - `git checkout -B bränchylä`
- mergetys
  - `git merge`
- rebasetus
  - `git rebase`
  - https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase
- pullarit
- konfliktien resolvaus
  - tätä on vaikea oppia ilman että tekee yhdessä muiden kanssa samaa projektia. sitten kun sen on kerran oppinut, se ei ole mahdottoman vaikeaa.
  - diffailun osaaminen on tässä edellytys

## PHP:n pakettien hallinta

Ehdimme lopuksi hitusen sivuta PHP:n paketinhallintaa. `packagist` on paikka, jossa paketit (defaultisti) asuvat, `composer` on ohjelma, jolla paketteja hallitaan.

- https://packagist.org/
- https://getcomposer.org/

Asensimme PHP:n ja composerin omalle koneellemme [Laravelin ohjeiden mukaan](https://laravel.com/docs/11.x#installing-php)

Ajoimme initialisointikomennon (`composer init`) menestyksekkäästi läpi projektikansiossamme. Siitä syntyi lähes tyhjä [composer.json](./wordpress-docker/composer.json) tiedosto.

Sitten aikamme loppui, ja sanoin: "jatkamme tästä ensi kerralla".

Ja niin teemme!

## Kotiin vietäväksi

Koska koodausta oppii koodaamalla, dockerointia dockeroimalla, ja gitin käyttöä käyttämällä gitiä, kehotan teitä käyttämään alkuviikon näiden asioiden parissa.

Jos haluatte teho-oppia gittiä, suosittelen vahvasti, että lähdette tekemään jotain proggista parityönä / ryhmässä. Silloin opitte luonnollisen tekemisen myötä vääjäämättä ja nopeasti kaikki aiemmin tässä dokkarissa mainitsemani elintärkeät perustaidot!
