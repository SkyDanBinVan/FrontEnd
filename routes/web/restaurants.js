const express = require('express');
const Router = express.Router();
const fetch = require('node-fetch');
const config = require('../../config');
const url = `${config.url.restaurants}`; // http://localhost:3001/api/restaurants

// POST /restaurants
Router.post('/', async (req, res, next) => {
  try {
    await fetch(url, {
      method: 'post',
      body: JSON.stringify(req.body),
      headers: { 'Content-Type': 'application/json' },
    });
    res.redirect('/restaurants');
  } catch (error) {
    return next(error);
  }
})
.post('/:id/menus', async (req, res, next) => {
  try {
    await fetch(`${url}/${req.params.id}/menus`, {
      method: 'post',
      body: JSON.stringify(req.body),
      headers: { 'Content-Type': 'application/json' },
    });
    res.redirect(`/restaurants/${req.params.id}`);
  } catch (error) {
    return next(error);
  }
})

  .get('/new', (req, res, next) => {
    // render the new restaurant form
    res.render('newRestaurant');
  })

  .get('/', async (req, res, next) => {
    try {
      const response = await fetch(url);
      const restaurants = await response.json();
      res.render('restaurants', { restaurants });
    } catch (error) {
      return next(error);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const response = await fetch(`${url}/${req.params.id}`);
      const restaurant = await response.json();
      const response2 = await fetch(`${url}/${req.params.id}/menus`);
      const menus = await response2.json();
      res.render('restaurant', { restaurant, menus });
    } catch (error) {
      return next(error);
    }
  })
  
  .get('/:id/edit', async (req, res, next) => {
    try {
      const response = await fetch(`${url}/${req.params.id}`);
      const restaurant = await response.json();
      res.render('editRestaurant', { restaurant });
    } catch (error) {
      return next(error);
    }
  })
  .get('/:id/menus/new', async (req, res, next) => {
    try {
      const response = await fetch(`${url}/${req.params.id}`);
      const restaurant = await response.json();
      res.render('newMenu', { restaurant });
    } catch (error) {
      return next(error);
    }
  })
  
module.exports = Router;
