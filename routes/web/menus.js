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