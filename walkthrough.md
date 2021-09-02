# How to Build an Amazon Clone in React

## Download node and npm

- [sudo apt install nodejs]()
- [sudo apt install npm]()

## Create React App

- [npx create-react-app 'app-name']()
- [npm start]()
  - app can be found at localhost:3000

## Create firebase app/app config

- walk through instructions on firebase
- [sudo npm install -g firebase-tools]()
- Create firebase.js in src folder
  - Copy config from firebase settings into firebase.js
- Delete additional files
  - logo.svg
  - app.test.js
  - setupTests.js

## Header

- [rfce]() -> auto populates "import React from 'react';"
- add div className='header'
  - div className='header\_\_logo'
    -Amazon logo
  - div className='header\_\_search'
    - input field className='header\_\_searchInput'
    - type='text'
  - div className='header\_\_nav'
- add header css
- [npm install @material-ui/core]()
- [npm install @material-ui/icons]()

## Home component

- Add image from Amazon
- Add Home.css and add linear-gradient to home\_\_image

## Product component

- Add component props
  - [function Product({ title, image, price, rating })]()
  - for star rating:
    - [{Array(rating).fill().map((\_, i) => (
      \<span className='produce\_\_star'>
      \<starRateIcon />
      \</span>
      ))}]()
- Populate listings

## Checkout page

### For functionality

- Install react router
  - [npm install react-router-dom]()
  - [import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';]()
  - wrap entire app in App.js in a Router
  - remove <'Header /> from <'Switch /> to avoid Header duplication and make life easier

## Subtotal page

- import [npm i react-currency-format]()

## StateProvider.js

- add StateProvider.js to create data layer functionality
- add StateProvider to index.js. Wrap around <'App />
- Write reducer.js and import reducer, stateprovider, initialstate.
- add onCllick addToCart to Product.js

### Selector - for cart count functionality

- `export const getCartTotal = (cart) => cart?.reduce((amount, item) => item.price + amount, 0);`
