const express = require('express');
const Router = express.Router();
const fetch = require('node-fetch');
const config = require('../../config');
const url = `${config.url.menus}`; // http://localhost:3001/api/restaurants

// POST /menus
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
.get('/menus/:id/new', async (req, res, next) => {
  try {
    await fetch(`/`);
    res.render('/restaurants');
  } catch (error) {
    return next(error);
  }
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