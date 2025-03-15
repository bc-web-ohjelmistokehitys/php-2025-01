# Tunti 8

## Ohjelmistoprojektin ylläpito

Aloitin toteamalla, että tänään emme tee mitään lisää, vaan keskitymme **refaktoroimaan** olemassaolevaa ja ylläpitämään sovellustamme. Puhuin myös **teknisestä velasta**, mihin refaktorointi usein liittyy.

- https://docs.google.com/presentation/d/12s3m-4G2zUmu1aSXi7dNIXb8ZZFvNbXLvc6Pk9g2MoM/edit#slide=id.p
- https://en.wikipedia.org/wiki/Technical_debt
- https://en.wikipedia.org/wiki/Code_refactoring

Koodissa on se hauska puoli, että se _mätänee_ aina. Se mätänee, jos siihen koskee, ja se mätänee, jos siihen EI koske! Sen takia koodin ylläpitoon ja kestävään kehitykseen pitäisi aina panostaa riittävästi, mikä on helpommin sanottu kuin tehty.

### Pakettien päivitys

Riippuvuuksien / pakettien päivitys on tärkeä osa ylläpitoa. Paketteja ylläpidetään ja hallinnoidaan kunkin ohjelmointikielen hyväksi katsomilla välineillä. PHP:llä on Composer, JavaScriptillä on npm (tai pnpm, tai yarn).

**Interaktiiviset** työkalut ovat omia suosikkejani, koska ne ovat ymmärrettäviä.

- `composer upgrade --interactive`
- `pnpm upgrade --interactive`

Versiohallinta on ystävämme, koska päivittämällä paketteja sovellus on helppo rikkoa.

Patch-versiot (1.1.x) ovat yleisesti käytössä olevan **semanttisen versioinnin** mukaan turvallisia, koska ne ovat aina bugikorjauksia.

Patch-versiot (1.x.0) ovat myös turvallisia, koska _rajapinnat_ pysyvät semanttisen versioinnin mukaan samoina.

Major-versiot (x.0.0) voivat rikkoa mitä tahansa, joten niiden kanssa pitää olla erityisen tarkkana!

Yleisesti ottaen pakettien päivitys on vaikeaa, mutta palkitsevaa. Siihen kannattaa mielestäni perehtyä. Harjoitus tekee mestarin!

## Refaktorointi

Harjoitimme refaktorointia sovelluksellemme.

### Koodin siirto reittitiedostosta controllereihin

Jos koodaisimme kaiken suoraan [reitteihin](./suomioy/routes/web), tämä tiedosto paisuisi ennen pitkää täysin hallitsemattomaksi.

- https://laravel.com/docs/12.x/controllers

Kontrollerit ovat oiva tapa organisoida koodia. Teimme henkilöön liittyvälle koodille [oman kontrollerin](./suomioy/app/Http/Controllers/PersonController.php) Laravelin artisaanikomennolla.

- `php artisan make:controller PersonController`

Samanlainen uudelleenorganisointi olisi paikallaan myös sukunimille! Jätimme sen itsenäiseksi harjoitteluksi!

#### Olio-ohjelmoinnista ja paradigmoista

Käytin tilaisuuden hyväkseni lausuakseni ohjelmointiparadigmoista ja Laravelin harjoittamasta olio-ohjelmoinnista.

Totesin, että funktionaalinen ohjelmointi on viime vuosina vallannut alaa, kiitos Reactin ja JavaScriptin maailmanvalloituksen. Itse olen sen fani, mutta en mikään puristi. Käytännössä elämä on aina yhdistelmä eri paradigmoja.

- https://en.wikipedia.org/wiki/Object-oriented_programming
- https://en.wikipedia.org/wiki/Functional_programming
- https://en.wikipedia.org/wiki/Imperative_programming

- [js-koodia](./suomioy/temp/test.ts)
- [php-koodia](./suomioy/temp/test.php)
- [oliokoodia](./suomioy/temp/animals.php)

### Parempi validointi

Paransimme samalla kuolinpäivän syötön validointia niin, ettei se voi olla tulevaisuudessa. Asiakas valitti tästä huonosti toimivasta lomakkeesta!

### Lomakkeen parantelu

[Henkilötietolomakkeen näkymä](./suomioy/resources/js/pages/person.tsx) kaipasi myös parannusta.

Otimme käyttöön [Inertian lomake-hookin](https://inertiajs.com/forms), joka hoiti kaiken, minkä olimme aiemmin tehneet huonommin itse, ja enemmänkin. Toteutimme virheviestin näyttämisen!

### Mallit

Jos emme halua työskennellä tietokannan kanssa taulu- ja kyselygeneroinnin tasolla, voimme aina [mennä syvemmälle ORM-maailmaan](https://laravel.com/docs/12.x/eloquent).

- `php artisan make:model Person`

Teimme [henkilölle model-luokan](./suomioy/app/Models/Person.php), ja refaktoroimme controllerin koodia käyttämään tätä.

Eloquent on sitä mieltä, että jokaisella taululla pitää olla created_at ja updated_at - metatietokentät, joten tarvitsimme [migraation](https://laravel.com/docs/12.x/migrations#main-content). [Teimme sellaisen](./suomioy/database/migrations/2025_03_14_112107_add_person_timestamps.php).

- `php artisan make:migration`

Puhuimme samalla, taas kerran, tietokantamigraatioiden jännittävästä maailmasta! Jos meinaa tietokantojen kanssa tehdä töitä, aiheeseen kannattaa perehtyä. Metodologia on aina suunnilleen sama, vaikka ohjelmointikielet / kirjastot vaihtuvat!

- https://en.wikipedia.org/wiki/Schema_migration

Keskimäärin, jos tietokantamuutokset eivät ole taaksepäin yhteensopivia (ja niin usein tapahtuu), muutosten ajaksi saitit on turvallisinta laittaa **huoltokatkolle**.

## Valmista tuli!

Näiden jälkeen minulla ei enää ollut opetettavaa. Juttelimme niitä näitä kaikesta, mikä voisi olla teille hyödyllistä / mikä teidän tulisi osata!

Kuten:

- Tietoturva
  - [CSRF-suojaus by Laravel (automaattinen)](https://en.wikipedia.org/wiki/Cross-site_request_forgery)
  - [Owasp top 10](https://owasp.org/www-project-top-ten/)
- [Autentikaatio vs autorisaatio](https://www.fortinet.com/resources/cyberglossary/authentication-vs-authorization)
- Testaus
  - Manuaalinen testaus (ihminen kliksuttelee)
  - Automaattinen testaus
    - Yksikkötestaus
    - End to end-testaus
    - Kliksuttelutestaus
    - mockaus

Jos unohdin jotain, huikatkaa!

Jos en, parasta mahdollista onnea jatkoon. Numerot on annettu! Minut saa kiinni Discordissa, kanava ei ole menossa kiinni. Saa kysyä jos voin olla jotenkin avuksi!
