'use strict';

const express = require('express');
const router = express.Router();

const variety = require('../models').variety;

router.get('/:id', async (req, res) => {
  try {
    console.log('[GET] /variety', req.params.id);
    const response = await variety.findById(req.params.id);
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
    const response = await variety.create(req.body);
    res
      .status(200)
      .send(response)
      .end();     
  } catch (error) {
    console.error('[POST] /variety Error:', JSON.stringify(error));
  }

});

module.exports = router