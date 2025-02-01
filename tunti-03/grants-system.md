# Building the grants system

How we do it, technically.

## 100% inside wordpress

- Wordpress as a wholesome platform
  - We're going to need a lot of new plugins
    - Advanced Content Fields
    - Meta Blocks plugin
  - Own custom blockendahlers? Static blocks? Dynamic blocks?
  - We're going to do PHP UX / UI coding inside the Wordpress.
    - HELP ME! WHAT IF I DON'T WANT TO! I WANT TO USE REACT, FOR THE SAKE THAT'S GOOD IN THE WORLD?!?!

## Headless wordpress

- Wordpress as a database
  - Wordpress Rest API
  - Wordpress GraphQL
- Frontend stack of our choosing
  - Laravel or other PHP solution
  - TypeScript / JavaScript solution
  - Something else (Ruby On Rails, Python, JS / TS)

## Custom application

- Own database
  - PostgreSQL?
  - MariaDB?
- Wordpress integrations?
  - login?
  - page data?
- Custom tech of our choosing
  - PHP solution: index.php hand crafted from scratch?
  - PHP solution: Laravel or some other nice framework that is NOT wordpress
  - Something else (Ruby On Rails, Python, JS / TS)
