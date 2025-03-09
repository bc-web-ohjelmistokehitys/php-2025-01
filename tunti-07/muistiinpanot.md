# Tunti 7

Jatkoimme edellisellä tunnilla aloittamamme nimitieto- / henkilötietosovelluksen tekemistä siitä mihin edellisen tunnin päätteeksi jäimme.

- [Omat koodini tältä päivältä](./suomioy/)

## Lisää VSCode-laajennuksia

Jotteivät VSCode-laajennukset loppuisi kesken, asensimme Tailwind- ja PostCSS-laajennukset. Ilman niitä Tailwindin tunkkaamisesta ei olisi ainakaan itselläni tullut yhtään mitään.

![Lisäosa](<Screenshot 2025-03-09 at 12.10.09.png>)

![Lisä](<Screenshot 2025-03-07 at 9.38.18.png>)

## Leiskaus

Leiskasimme sovellukselle "hienon" jaetun layoutin. Laravelin React starter-kit käyttää tyylitykseen [Tailwindiä](https://tailwindcss.com/), joten olin opetellut sitä viikolla. Totesin Tailwindillä tyylittelyn tuntuneen ihan mukavalta, mutta silti jotenkin vieraalta itselleni.

Kehotin kaikkia tutustumaan Tailwindin lisäksi muihinkin React-appiksen tyylitystapoihin, ja päättämään itse mikä tuntuu hyvältä. Tässä joitakin muita metodologioita / vaihtoehtoja, työelämässä törmäätte varmasti kaikkiin näihin ja moniin muihin.

- [CSS-modulit](https://github.com/css-modules/css-modules)
  - Tai [LESS](https://lesscss.org/) ja [SASS](https://sass-lang.com/) ja [PostCSS](https://postcss.org/) ja [LightningCSS](https://lightningcss.dev/) missä tahansa kontekstissa missä tyylitetään CSS:n kaltaisella CSS:llä.
- [Stylex](https://stylexjs.com/), [Vanilla Extract](https://vanilla-extract.style/), [PandaCSS](https://panda-css.com/) ja muut CSS-in-JS ratkaisut.

Tailwindin osalta leiskaus / tyylitys tapahtui latomalla Tailwindin tarjoamia utility-luokkia HTML:n sekaan, plop plop. Mitä luokkia latoa, sitä varten pitää tavata Tailwindin dokumentaatiota.

Responsiivisen suunnittelun, mobile-first periaatteella, toteutimme luonnollisesti [Tailwindin tapaan](https://tailwindcss.com/docs/responsive-design) hyödyntämällä sen breakpoint-spesifejä määreitä.

### Jaettu layout

Teimme layoutista [oman React-komponentin](./suomioy/resources/js/layouts/basic-layout.tsx), jotta voisimme jakaa leiskamme kaikkien tekemiemme sivujen käyttöön. Käytimme `children` proppia pääsisällön osalta, ja `aside` nimistä optionaalista proppia sivupalkille.

Laitoimme kaikki tähän asti tekemämme sivut käyttämään uutta hienoa layout-komponenttiamme!

## Linkkejä

Lisäsimme sivun välisiä linkkejä. Tätä varten meidän piti tietää, että meillä on käytössä [Ziggy](https://inertiajs.com/routing#generating-ur-ls) niminen himmeli, jolla voimme generoida urlit suoraan Laravelin route-konffia vasten, ja että meidän tulee käyttää [Inertian omaa Link-komponenttia](https://inertiajs.com/links) `<a>` tägin sijaan.

Miksi? Koska JS-frameworkit eivät yleensä (eivätkä nytkään) halua tehdä kokonaisia sivulatauksia, vaan käyttää omia sisäisiä taikuuksiaan.

## Henkilösivu

Toteutimme sukunimi-sivulle listan vanhimmista yhä elossaolevista kyseisen sukunimen omaavista henkilöistä. Tästä listasta klikkaamalla pääsee eteenpäin yksittäisille henkilösivuille, joilla näytetään kyseisen henkilön perustiedot.

Toteutimme yksinkertaisen [lomakkeen](https://inertiajs.com/forms), jonka avulla vielä eläville ihmisille voi ilmoittaa heidän kuolinpäivänsä.

Mietimme lomaketta sekä frontin (React / Inertia) että bäkkärin (Laravel) kannalta.

### Lomakkeen frontti

Reactissa lomakkeiden tekeminen ilman erillistä kunnon lomakepakettia on mälsää siksi, että käyttöliittymä piirretään tilasta, ja tarvitsemme tilaa voidaksemme toteuttaa toimivan lomakkeen. Se muuttuu aika nopeasti aika kankeaksi. Onneksi meillä oli vain yksi tila (kuolinpäivä), joten [saimme sen toteutettua aika helposti](./suomioy/resources/js/pages/person.tsx).

Erityishuomio kannattaa kiinnittää Inertian omaan lomakkeen postauslogiikkaan!

### Lomakkeen bäkkäri

Lomakkeen bäkkärikäsittelyä varten meidän piti toteuttaa [POST-verbiä kuunteleva reitti](./suomioy/routes/web.php).

Reitissä meidän piti muistaa _validoida_ käyttäjän syöte, koska emme saa koskaan tietoturvan vuoksi luottaa käyttäjän syötteisiin ilman että olemme tarkastaneet ne.

Muuten lomakkeen käsittely oli aika suoraviivaista. Päivitimme tietokantaan kuolinpäivän.
