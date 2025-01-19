# Tunti 1

## PHP

- https://www.php.net/
- https://en.wikipedia.org/wiki/PHP

Kerroin lyhyesti PHP:n historiasta, ja siitä, miten nykytilanteeseen on päädytty.

PHP on _tosi outo_ ja "parempien" koodareiden helposti väheksymä kieli (jos pysytte PHP:ssä, tottukaa tähän väheksyntään). Tässä väheksynnässä on ja ei ole totuuden siementä; yleensä pahimmat väheksyjät eivät itse ole koskaan koodanneet PHP:llä, mutta kuten todettua, PHP _on_ tosi outo.

Se on outo siksi, että kielen keksijä [Rasmus Lerdorf](https://en.wikipedia.org/wiki/Rasmus_Lerdorf) ei ollut akateeminen, eikä hän yrittänyt tehdä uutta ohjelmointikieltä. Lerdorf koodasi 1990-luvun alussa itselleen apuvälineitä veppisivujen tekemiseen, koska mitään ei vielä ollut olemassa. Näin syntyi **Personal Home Page**-himmeli, PHP:n varhaisin ilmentymismuoto.

PHP kasvoi orgaanisesti, ja kasvava ja kehittyvä webbi sai siitä ja [MySQL](https://en.wikipedia.org/wiki/MySQL):stä oivan kaksikon, jolla **harrastelijoiden** / **aloittelijoiden** oli helppo päästä liikkeelle. Itsekin aloitin oman tunkkailuni juuri näillä kahdella teknologialla. [LAMP](<https://en.wikipedia.org/wiki/LAMP_(software_bundle)>) oli akronyymi THE pinolle, jolla kaltaiseni alkoivat webbiä koodata.

[Wordpress](https://wordpress.org/), [Drupal](https://new.drupal.org/home), Wikipedian taustalla piilevä [Mediawiki](https://www.mediawiki.org/wiki/MediaWiki) ja monet muut ohjelmistot saivat alkunsa PHP:n kulta-aikana 2000-luvun ensimmäisellä vuosikymmenellä. Niinpä, vaikka JavaScriptin ja muiden vaihtoehtoisten ratkaisujen rakettimainen nousu katkaisi PHP:n ilmiömäisen menestyksen 2010-luvulle tultaessa, PHP on vieläkin tosi käytetty jos ei enää suosittu tai mielestäni suositeltavin kieli vasta-alkajille.

Nykypäivän PHP-scenessä valmisohjelmistojen ja julkaisujärjestelmien ulkopuolella [Laravel](https://laravel.com/) on iso asia. Olen kuullut siitä paljon hyvää. Kymmenisen vuotta sitten, kun itse exitoiduin PHP:n syvimmästä sisäpiiristä, [Symfony](https://symfony.com/) oli vielä coolein juttu.

## Vscode

Asensimme VSCode-laajennukset sekä Dockerille että PHP:lle.

- ![PHP-lisäosa](<Screenshot 2025-01-19 at 13.33.40.png>)
- ![Docker-lisäosa](<Screenshot 2025-01-19 at 13.33.50.png>)-

## Docker

- https://www.docker.com/
- https://en.wikipedia.org/wiki/Docker_(software)

Docker on virtualisointiohjelmisto, jolla ohjelmistot ja koodit paketoidaan _kontteihin_. Kontit virtualisoivat vähemmän kuin kokonaiset virtuaalikoneet, joten ne ovat kevyempiä.

Dockeria käytetään sekä kehitys- että tuotantoympäristöissä. Kummassakin on vähän erilaiset lainalaisuudet, ja me keskitymme tässä kohtaa kehitysympäristöön.

## Vauvan ensimmäinen Docker-PHP-sovellus (Docker ja PHP 101)

Teemme ensimmäisen PHP-sovelluksmme "vanhan maailman" PHP:llä, jossa PHP:tä koodataan suoraan HTML:n sekaan. Tämä oli PHP:n alkuperäinen koukku: staattisesta hötskästä pääsemme dynaamiseen PHP-maailmaan vaihtamalla tiedoston nimen.php:ksi ja parsimalla sen PHP-tulkilla.

Käytämme tähän tarkoitukseen dockeroitua ympäristöä, jonka rakennamme itse ihan alusta asti.

[Lopputuloksen lähdekoodeja](./my-first-php-project/) selaamalla ymmärtää enemmän. Kiinnitä huomiota README:hen. Kuinka helppoa uuden kehittäjän on mielestäsi käynnistää tämä sovellus omalla koneellaan sen jälkeen, kun hän on kloonannut itselleen repon?

### Docker Desktop

Mac-koneissa tarvitsemme ensin [Docker Desktop](https://www.docker.com/products/docker-desktop/)-ohjelmiston. Asensimme sen, ja loimme tilit / kirjauduimme sisään. Muutamia hassuja poikkeuksia lukuunottamatta tämä meni yllättävän kivuttomasti. Alla kuva tavoitellusta lopputulemasta.

![Menestyksekkäästi asennettu Docker Desktop](<Screenshot 2025-01-19 at 13.10.25.png>)

### Docker komentorivillä

Varsinainen Docker-työskentely tapahtuu komentoriviltä. Itse käyn aika harvoin graafisessa käyttöliittymässä.

Kotiin kannattaa viedä lyhyt ja ytimekäs opetukseni: dockeroimaan oppii dockeroimalla. Ja voidakseen dockeroida menestyksekkäästi täytyy ymmärtää, mistä komponenteista toteutettava palvelu (meidän tapauksessamma yksinkertainen PHP-ohjelma) koostuu. Ja sen ymmärtääkseen pitää koodata, ja koodaamaan oppii... koodaamalla. Harjoitus tekee mestarin, tuhansia toistoja.

- HTTP-palvelin
  - mikä tahansa webbiohjelmisto tarvitsee aina HTTP-palvelimen
  - [Nginx](https://nginx.org/en/) on suosittu ja hyvä HTTP-palvelinohjelmisto, käytämme siis sitä.
  - Yksinkertainen PHP-sovelluksemme haluaa ottaa yhteyden PostgreSQL-tietokantaan.
- PHP-tulkki
  - Koodataksemme PHP:llä meidän pitää asentaa PHP
  - Nginx keskustelee PHP:n kanssa [FastCGI-protokollalla](https://www.php.net/manual/en/install.fpm.php)
- PostgreSQL
  - Tietokanta

### Docker Compose

Mikään ei estä meitä rakentamasta konttia, josta löytyy kaikki edellämainitut teknologiat, mutta useimmiten on parempi ja helpompaa `kompositoida` sovellus kasaan useasta pienemmästä kontista. Tämä onnistuu [Docker Compose](https://docs.docker.com/compose/):lla.

Composea on perinteisesti käytetty kehitysympäristöjen kanssa, mutta ilmeisesti sillä voi nykyään runtata kamaa tuotantoonkin. Siitä tiedän hyvin vähän, mutta kehitysympäristöjen kanssa compose on hirmu kätevä. Ohjelmiston tarvitsema infrastruktuuri on määritetty koodina, kaikki asentuu `docker compose up` käskyllä.

`compose.yml` tiedosto hankkeen juuressa on kaiken ydin. Toteutimme kolme palastamme (HTTP-palvelin, tietokanta, PHP) yksi kerrallaan muokkaamalla tätä tiedostoa.

Kontteja rakennetaan kerroksittain aina jonkun olemassaolevan kontin päälle. Meidän tapauksessamme hyödynsimme "virallisia" kontteja kaikille kolmelle teknologiallemme.

- https://hub.docker.com/_/postgres
- https://hub.docker.com/_/php
- https://hub.docker.com/_/nginx

PostgreSQL:n ja Nginxin osalta meidän ei tarvinnut edes muokata valmiita ratkaisuja, mutta PHP:n osalta jouduimme [työstämään konttia hitusen](./my-first-php-project/configs/php-fpm/Dockerfile).

Lopulta, monenlaisen debuggailun ja tuntien taistelun jälkeen, pääsimme maaliin, ja lähdimme kotiin.

### Dockerfile

Havaitsimme, että vakio-PHP-kontista puuttuu laajennus, jolla saamme yhteyden tietokantaan. Se, miten PHP-ekstensioita hallitaan, pitää vain "tietää". Itse tiesin sen, koska olin harjoitellut ja googlettanut edellisenä päivänä.

Yksittäisten docker-konttien konfigurointi tapahtuu `Dockerfile`-tiedostossa. Jokaisella kontilla voi olla omansa.

- https://docs.docker.com/reference/dockerfile/

PHP-kontille räätälöimässämme tiedostossa kerromme, mistä "pohjakontista" lähdemme liikkeelle, ja millaisia komentoja ajamme. Asennamme kontin Debian-linux-distroon kirjaston, ja käännämme PHP-tulkille uuden laajennoksen. Kuinka hauskaa ja helppoa! Tuntui, kuin olisin palannut kotiin (tein näitä juttuja paljon 2000-luvun alkuvuosina).

Linkittääksemme host-koneen (oma mäccimme) ja konttien tiedostojärjestelmät käytämme [voluumeja](https://docs.docker.com/engine/storage/volumes/). Mikä niiden suhteen on "oikein" ja mikä "väärin" on itsellenikin mysteeri. En todellakaan ole suurin Docker-guru maailmassa.

### PHP-scripta

Laitoin [koodaamaani PHP-scribaleeseen](./my-first-php-project/public/index.php) linkkejä PHP:n manuskaan. Kannattaa käydä ihmettelemässä.

### Kotiin vietäväksi

- Tutkaile Nginxiä ja HTTP-palvelimia
- Lue Dockerin manuskoja, koita ymmärtää Dockeria.
- Lue PHP:n manuskoja, koita ymmärtää PHP:tä.
- Lue Wordpressin PHP-koodia sen index.php:stä alkaen.
- Mainitsin sanan "regex" kun [konffasimme Nginxiä](./my-first-php-project/default.conf). [Lue siitä](https://en.wikipedia.org/wiki/Regular_expression) ja googleta lisää. Regexit ovat tärkeitä!
- Koodaa tunti/päiväkausia jotain omaa kaikilla näillä ihanuuksilla!
