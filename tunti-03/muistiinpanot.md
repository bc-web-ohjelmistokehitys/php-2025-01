# Tunti 3

Puhuimme Alfonsin toimittamasta Kide-projektista monelta eri kantilta.

## Kide-etusivu

Vanha kirjallisuuden edistämisen kotisivu on webissä.

- https://kirjallisuudenedistamiskeskus.fi/

Uudelta kotisivulta odotetaan seuraavaa:

- Rakennettu Wordpressillä
- Responsiivinen (mobile first on suositeltu lähestymistapa)
- Blokkeja.
- Omia blokkeja? Jos tarvitsette. Lopputulos ratkaisee.
- Plugareita? Jos tuntuu siltä. Yritämme tehdä oikeaa kotisivua, kokonaista toteutusta, sellaista minkä voisi laittaa oikeasti tuotantoon.

Speksit eivät ole kovin hyvät, mutta eivät ne aina oikeassakaan maailmassa ole. Meillä on, löydätte ne ItsLearningista:

- mobiilinäkymä PDF:nä
- desktop-näkymä PDF:nä
- staattiset assetit (kuvat) ZIP-tiedostona.

Design tokenit (välistykset, värit, koot, fontit, jne) löydämme salapoliisityönä tai asiakkaalta kysymällä.

### Itselleni heränneitä kysymyksiä

- Toteutetaanko monikielisyys?
- Löytyisikö tokeneita jossain järkevässä muodossa? PDF on aika lollero vuonna 2025.

## Kide, apurahajärjestelmä

Alfonsin toimittamissa materiaaleissa ei varsinaisesti ollut sellaista "tähän jotakin dynaamista kohtaa", jollaista siihen oli kaavailtu, joten sovellamme ja keksimme itse.

![Kide apurahajärjestelmä](<Screenshot 2025-01-29 at 8.54.41.png>)

Kuvitelkaamme, että [Kirjailijaliiton nykyinen apurahajärjestelmä](https://kirjailijaliitto.apurahat.net/) on tuntemattomasta, pakottavasta syystä (toimittajan konkurssi) menossa alas 6 kuukauden päästä. Meidän on siis pakko toimittaa uusi, (mutta onneksi potentiaalisesti vaatimattomampi), MVP-järjestelmä tilalle.

Apurahoja tullaan myöntämään TODELLA paljon. Kirjailijaliitto osti (kuvitteellisesti) Nvidian osakkeita miljoonalla eurolla 10 vuotta takaperin, ja nyt osakkeiden arvo on kolme triljoonaa euroa. Enemmän kuin Norjan öljyrahastolla. Kirjailijoille tullaan jakamaan rahaa lehtipuhaltimilla.

Rahaa ohjelmiston kehittämiseen on myös käytännössä määrättömästi. Sen kehittämisessä voidaan hyödyntää tekoälyä, joka nostaa osakkeiden arvoa.

Järjestelmässä on oltava ainakin kaksi toiminnallisuutta:

- Lähetä apurahahakemus (lomakkeella)
- Listaa kaikki myönnetyt apurahat
  - sivutus (x apurahaa per sivu)
  - perustiedot
- Yksittäisen myönnetyn apurahan oma sivu
  - enemmän tietoja kyseisestä apurahasta

Järjestelmässä VOI olla muitakin tietoja, mutta se on hyvin löyhästi määritelty, koska asiakas ei tiedä eikä osaa. Toimittajalla (me) on paljon vastuuta.

Järjestelmän täytyy noudatella uusien toteutettavien kotisivujen ilmettä.

### Vaihtoehtoja toteutukseen

#### Toteutetaan WordPressillä

Toteutamme apurahajärjestelmän Wordpressin sisällä.

- Uusia post-tyyppejä (apuraha? apurahahakemus?)
- Tarvitsemme varmasti plugineja. Nämä **omia** ajatuksiani ja testejäni aiheesta. Muitakin vaihtoehtoja varmasti on.
  - [Advanced Custom Fields](https://www.advancedcustomfields.com/) uusien custom tyyppien ja niiden tietojen rakentamisen
  - [Meta Field Block](https://wordpress.org/plugins/display-a-meta-field-as-block/) Tarvitsemme jotain joka osaa piirtää uusia ACF-kenttiämme ruudulle. Löysin ainakin tämän.
- Apurahasivut tehdään patterneilla / blokeilla / tyylittelemällä oman teemamme / plugareittemme sisällä.
- Jos teemme dynaamisia blokkeja, joudumme renderöimään HTML:ää PHP:llä, ja se on melko kamalaa.

##### Hyvää ja huonoa

Tämän ratkaisun hyvä puoli on se, että opimme varmasti paljon Wordpressin ekosysteemistä. Jos aiomme tehdä työksemme Wordpressiä ja / tai hakea työssäoppimaan sitä, tämä oppiminen on hyvä ja kaunis asia.

Tämän ratkaisun huono puoli on se, että opimme varmasti paljon Wordpressin ekosysteemistä. Jos haluamme tehdä custom-webbisovelluksia, Wordpressin ekosysteemi on mahdollisimman kaukana siitä, mitä ja miten haluamme tehdä. UI-komponenttien leiskaaminen ja tunkkaaminen ja interaktiiviseksi tekeminen PHP:llä ja Wordpressin tavoilla tuntui itselleni täysin mielipuoliselta.

#### Päätön (headless) Wordpress

[Päätön sisällönhallinta](https://en.wikipedia.org/wiki/Headless_content_management_system) tarkoittaa sitä, että sisällönhallintajärjestelmä (Wordpress, Drupal, Contentful, mitä vain) tarjoaa muokkausnäkymät ja tarjoaa **datan** rajapinnan välityksellä. Fronttikerros (mitä selaimelle piirretään loppukäyttäjän näkymässä) toteutetaan vapaavalintaisilla teknologiolla.

Wordpressin tapauksessa tämä tarkoittaa joko REST-rajapinnan tai GraphQL:n käyttämistä.

- https://developer.wordpress.org/rest-api/
- https://www.wpgraphql.com/

- [Advanced Custom Fields](https://www.advancedcustomfields.com/) on tässä lähestymistavassa yhtä hyödyllinen kuin edellisessä lähestymistavassa.
- [VIP Block Data API](https://github.com/Automattic/vip-block-data-api) osaa palauttaa **blokit** rakenteellisena JSONina HTML:n sijaan.

Frontin / frontin bäkkärin toteuttamiseen mikä tahansa teknologia kelpaa.

- [Laravel](https://laravel.com/) on erittäin paljon kehuttu järjestelmä, jos haluamme koodata PHP:tä. Se integroituu hyvin Reactiin ja moderneihin UI-kirjastoihin.
- [Next.js](https://nextjs.org/) tai mikä tahansa Reactin tai muun modernin UI-kirjaston päälle rakennettu metaframework ovat erittäin hyviä valintoja, jos haluamme koodata full stack JavaScriptiä.

##### Hyvää ja huonoa

Hyvää tässä ratkaisussa on se, että meidän ei ole pakko tunkata käyttöliittymää PHP:llä. Opimme edelleen Wordpressin ekosysteemiä, monelta osin, mutta opimme myös custom webbisovelluksia ja Reactia. Olemme varmasti monikäyttöisempiä työmarkinoille.

Huonoa ratkaisussa on se, että se on varmasti suuritöisempi toteuttaa. Meillä on enemmän tekkejä ja enemmän liikkuvia osia ja enemmän opeteltavaa.

#### 100% custom appis

Toteutamme kokonaan uuden sovelluksen kokonaan uuteen domainiin kokonaan erilleen Wordpressistä (kuten nykyinen apurahajärjestelmä). Voimme valita _kaikki_ teknologiat vapaasti.

- Oma tietokanta (PostgreSQL?)
- Oma bäkkäri- ja fronttikoodi (PHP + Laravel? Custom PHP tunkki? Next.js full stack? Pythonia bäkkärissä, Next.js frontissa? Ruby On Rails? Django?) Meillä on käytännössä loputtomasti vaihtoehtoja.
  - Mobiiliäppis (Flutter? React Native? PWA?)
- Jos haluamme _integroitua_ Wordpress-saittiin, se on varmasti mahdollista. Kaikki aikaisemmin mainitut headless-ratkaisut ovat tässäkin ratkaisussa käytettävissämme.

## WP-env ja WP-scripts

Tutkailimme WP:n kehitystyökaluja. Ne ovt varmasti / voivat olla hyödyksi.

- @wordpress/create-block
- @wordpress/env

Löysin paljon muitakin kehityskaluja WordPressin dokkareista. Kannattaa päntätä.

## Mitä seuraavaksi?

Perustaisin uuden WordPress-saitin / sovelluksen jollakin osaamallani ja hyväksi toteamallani tavalla, puskisin sen Gittiin, ja lähtisin toteuttamaan Kide-saittia (ja mahdollisesti apurahasovellusta) tällä hetkellä tiedettyjen speksien perusteella parhaan tietomme mukaan. Jos / kun speksit tarkentuvat ja tietomme kasvaa, adaptoidumme siihen.

- Oma lapsiteema (child theme) tai oma kokonainen teema copy-pastella twentytwentyfivestä tai jostain muusta hyvästä aloitusteemasta jonka löydätte.
  - Tyylien ja kaiken muun kustomointi. Miten?
- Oma plugin missä tehdä plugin-juttuja jos tarvitaan. Luin, että jos ominaisuuksia lähtee toteuttamaan teeman puitteissa, niin
- Etusivun mallausta blokeilla. Jos valmiit riittävät, käytä niitä, jos ei, opettele omien blokkien tekemistä.
  - Koita sisäistää, mitä "dynaaminen" vs "staattinen" blokki tarkoittaa. Tai mitä blokki ylipäätään tarkoittaa. Miten blokeista tulee patterneja ja templateja ja niin edespäin.
- Etsi sopivia / tarpeellisia plugareita. Tutki aiemmin mainitsemiani plugareita.
- Opettele PHP:tä Wordpressin syövereissä. Lue tutoriaaleja, lue koodia, hakkaa päätä seinään.

Kood, kood, tiivistettynä.

Alan tekemään saittia itsekin, omien oppieni mukaisesti. [Omat tekeleeni löytyvät Githubista](https://github.com/pekkis/php-teaching-kide). Minulla on paljon opittavaa ja ymmärrettävää tässä itsellänikin.

Yritän kirjoittaa ja dokumentoida sellaisia committeja, että [voitte seurata niitä hakiessanne inspiraatiota](https://github.com/pekkis/php-teaching-kide/commits/main/).
