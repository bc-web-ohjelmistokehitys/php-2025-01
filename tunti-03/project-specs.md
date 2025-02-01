# Case: Alfons

## Home page (the Alfons' assignment)

Old himapage is online:

- https://kirjallisuudenedistamiskeskus.fi/

New himapage is expected of us:

- Built with Wordpress
- Blocks, yes, unless you don't want to use them! Custom? Maybe. Plugins / block libraries? Why not!
- Responsive (mobile first)

We didn't get very good specs, but it's not unusual in real world. Customers might not know anything about nothing.

What we got are two PDF's (desktop view, mobile view) and a bunch of static image assets in a zip. You can get these from Itslearning, Laura uploaded them to the "resurssit" place in it's own folder.

### Questions

- Multilanguage (fi / sv) ?
  - There must be plugins?

## Grants System

In the himapage, there is a button "Apurahajärjestelmään", which currently goes to a custom SAAS grants system.

In our imaginary world, the SAAS provider has gone bankrupt, and the system will stop working in 6 months. So we have to replace it.

Luckily, the customer (Kiva) has a BILLION DOLLARS worth of Nvidia AI boom stonks, and they will grant so many grants to so many authors and build a grants system of their own.

This new grants system can either be

a) part / page(s) of the Wordpress home page application
b) a custom application built with custom tech of your choosing, utilizing the Wordpress app from 0% to 100% in any way you deem best for yourself and / or the customer.

Our course's topic is "PHP" but I'm going to give you free reign on the tech you choose. We'll discuss the personal gains and losses for your future for all the different possibilities we find. We _can_ and it might be beneficial for us to utilize PHP, and we'll try to do together about all the stuff we find, but I don't think it's totally necessary.

Grants system can be built alone or together with your colleagues. I don't mind, as long as it's THE BESTEST GRANTS SYSTEM EVER BUILT! (It might even be nice to build it with your friends, because then you learn pull requests and conflict resolvation).

- Must have similar look & feel to the wordpress home page, even if it's outside WP.

## Thoughts

- Simple form (plugin?) where author fills the application.
  - send
  - what happens when form is posted

### Wordpressin sisällä

- plugineita tarvitaan 100% varmuudella.
- blokkeja kenties
- kaikki mitä wordpressillä voidaan ja osataan tehdä.
- joudutaan tekemään käyttöliittymää PHP-templateilla Wordpressin sisällä. "Eläköön!"

### Headless CMS

### 100% external application

- "index.php-ratkaisu"
- Laravel + React / Vue etc
- 100% JS, Frontend: React, Backend: Node, Express

- Database: PostgreSQL (Firebase tai mikä muu)
- User management: Firebase
