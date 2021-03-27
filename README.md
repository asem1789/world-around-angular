# WORLD AROUND PROJECT

**[DEMO LIVE](https://world-around-2.web.app/)**

<HR>

## OVERVIEW

- the project showing some information about all countries in the world using [REST Countries API](https://restcountries.eu/)

<HR>

## USER STORY

- See all countries from the API on the homepage
- Search for a country using an input field
- Filter countries by region
- Click on a country to see more detailed information
- Click through to the border countries on the detail page
- Click on Icon Mode to change into (dark, light) mode with save mode by localStorage

## INSTALL & SETUP UP LOCAL

- Make sure you have [nodejs](https://nodejs.org/en/download/), [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Angular CLI](https://cli.angular.io/) installed in your machine
- copy this link and past it in your terminal

  ```
  git clone https://github.com/asem1789/world-around-angular.git
  ```

- Then Open the project and install all packages this project:
  ```
  cd world-around-angular
  npm i
  ```
- Run the project by this command **ng serve -o**, will automatically open **_http://localhost:4200/_** in your default browser, if not. copy it and past in any favorite browser

<HR>

## RUN TESTS

Note: all below command after using npm i

### **1- UNIT TESTS: using jasmine & karma**

- run these tests using below command

```
ng test
```

### **2-INTEGRATION TESTS: using [cypress](https://docs.cypress.io/guides/overview/why-cypress)**

#### To run test in terminal: => using below command

```
npm run cy:run
or
./node_modules/.bin/cypress run
```

#### To open test by browser and show steps of process:=> using this command, then you can choose run only test or all with other respectively. Look at image

```
npm run cy:open
Or
./node_modules/.bin/cypress open
```


![integration tests11](https://user-images.githubusercontent.com/40121654/112723457-a16d8700-8f1f-11eb-96b0-57ac89c17c2f.jpg width="200" height="150")


<hr>

## Build WITH:

- using Angular to write html and js code
- css
- Angular materil
