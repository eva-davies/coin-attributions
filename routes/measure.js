'use strict';

const express = require('express');
const router = express.Router();

const variety = require('../models').variety;
const measure = require('../models').measure;

router.get('/:id', async (req, res) => {
  try {
    console.log('[GET] /measure', req.params.id);
    const response = await measure.findById(req.params.id);
    res
      .status(200)
      .send(response)
      .end();    
  } catch (error) {
    console.error('[GET] /measure Error:', JSON.stringify(error));
    res.status(500).send(error || {});
  }
});

router.post('/:variertyId', async (req, res) => {  
  try {
    console.log('[POST] /measure', `variertyId: ${req.params.variertyId}`, JSON.stringify(req.body));
    const payload = Object.assign({}, req.body, { varietyId: req.params.variertyId});    
    const response = await measure.create(payload);
    res
      .status(200)
      .send(response)
      .end();     
  } catch (error) {
    console.error('[POST] /measure Error:', JSON.stringify(error));
    res.status(500).send(error || {});
  }

});

module.exports = router