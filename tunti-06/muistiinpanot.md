# Tunti 6

Aloimme tehdä tietokantakurssin henkilötietokannasta hienoa mahtisaittia Laravel-ohjelmistokehyksellä.

https://laravel.com/

- [Omat aikaansaannokseni päivän ajalta](./suomioy/)
- [README](./suomioy/README.md)

## VSCode-plugarit

Asensin nämä PHP / Laravel - plugarit VSCodeen. Tuntuvat toimivan ihan OK.

![alt text](<Screenshot 2025-02-25 at 14.37.09.png>)
![alt text](<Screenshot 2025-02-25 at 14.37.05.png>)

## Uuden saitin luonti

Teimme tyhjän kansion, menimme sinne.

`/bin/bash -c "$(curl -fsSL https://php.new/install/mac/8.4)"`

Ajoimme varmuudeksi skriptin, joka päivittää Laravelin asennusskriptit, PHP:n ja Composerin. Laravelista on juuri, viikko pari sitten, ilmestynyt major-versio numero 12, ja haluamme sen käyttöön edellisen version sijasta.

- `laravel new`

Valitsime defaultit, paitsi valitsimme `React`-starter kitin. Se käyttää Inertia-nimistä hilavitkutinta kytkeäkseen PHP:llä tehdyn Laravel-bäkkärin TypeScriptillä tehtyyn React-fronttiin. Lisäksi meillä on sitä kautta TypeScript, Tailwind ja shadcn/ui esiasennettuna ja -viritettynä.

Kuulostaa hyvältä. Tiedän tosi vähän Tailwindistä, mutta se on asia jota kannattaa opetella, minunkin pitäisi!

- https://inertiajs.com/
- https://www.typescriptlang.org/
- https://tailwindcss.com/
- https://ui.shadcn.com/

### Docker

Halusimme käyttää docker-pohjaista kehitysympäristöä, joten asensimme Laravelin `sail`-nimisen esituotetun docker-kilkkeen.

- `php artisan sail:install`

Muistimme vaihtaa mysql:n postgresql:ksi.

- `php artisan sail:up`

käynnistää docker-kontit.

### Kehitysympäristön pystytys

Viritimme kehitysympäristön kasaan askel askeleelta.

[Tässä dokumentoidut asennusohjeet](suomioy/README.md)

## Laravel-hankkeen rakenne

Ihmettelimme projektin kansiorakennetta. Tutkimuksien kannattaa ottaa:

- [index.php](./suomioy/public/index.php) Kaikki lähtee liikkeelle tästä.
- [reititys](./suomioy/routes/web.php) Reititys löytyy täältä.

## Sukunimitilasto

Rakensimme ominaisuuden, joka näyttää 50 suosituinta sukunimeä. Opimme, miten

- lisätään reitti (`/surnames`)
- lisätään React-komponentti reitille
- tyypitetään komponentin propsit
  - interface vai type? tässä kohtaa kumpikin on ainakin lähes yhtä oikein, mielipiteet aiheesta eroavat.
- haetaan tietokannasta dataa Laravelin tietokantakirjastolla / kyselygeneraattorilla
  - https://laravel.com/docs/12.x/queries
- passataan React-komponentille propseja
  - php:n array toimii sekä listana että häshmäppinä, vastaten sekä js:n [] että {}.
  - https://www.php.net/manual/en/language.types.array.php

## Sukunimitiedot

Lähdimme rakentamaan ominaisuutta, joka näyttää YKSITTÄISEN sukunimen tietoja.

- lisätään reitti (`/surnames/{name}`)
- Toistetaan samat operaatiot edellisestä vähän eri tavalla.

## Kotitehtävät

Kehotin jatkamaan tutkimustyötä tästä, ja totesin, että jatkamme ensi viikolla. Lupasin itse selvittää samoja kysymyksiä!

- Mitä tietoja yksittäisestä sukunimestä voisi näyttää (suosituimmat etunimet sukunimissä? naiset? miehet? vanhin / uusin sukuniminen ihminen?) ja miten se haettaisiin tietokannasta?
- Miten sivua saisi tyylitettyä / leiskoitettua tailwindillä vähän siistimmän näköiseksi.
