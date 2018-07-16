'use strict';

const express = require('express');
const router = express.Router();

const Variety = require('../models').Variety;

router.get('/:id', async (req, res) => {
  try {
    console.log('[GET] /variety', req.params.id);
    const response = await Variety.findById(req.params.id);
    res
      .status(200)
      .send(response)
      .end();    
  } catch (error) {
    console.error('[GET] /variety Error:', JSON.stringify(error));
    res.status(500).send(error || {});
  }
});

router.post('/', async (req, res) => {  
  try {
    console.log('[POST] /variety', JSON.stringify(req.body));
    const response = await Variety.create(req.body);
    res
      .status(200)
      .send(response)
      .end();     
  } catch (error) {
    console.error('[POST] /variety Error:', JSON.stringify(error));
    res.status(500).send(error || {});
  }
});

module.exports = router