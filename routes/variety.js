'use strict';

const express = require('express');
const router = express.Router();

const Variety = require('../models').Variety;

const RECORD_NOT_FOUND = 'Record not Found';

router.get('/:id', async (req, res) => {
  try {
    console.log('[GET] /variety', req.params.id);
    const response = await Variety.findById(req.params.id);
    res
      .status(200)
      .send(response || RECORD_NOT_FOUND)
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

router.put('/:id', async (req, res) => {
  try {
    console.log(`[PUT] /variety/${req.params.id || ''}`, JSON.stringify(req.body));  
    const updateFields = [
      'year', 
      'overtonNumber', 
      'rarity', 
      'notes', 
      'updatedAt'
    ]; 
    const variety = await Variety.findById(req.params.id); 
    const response = variety ? await variety.update({ ...req.body, updatedAt: new Date() }, 
      { fields: updateFields }) : RECORD_NOT_FOUND;
    res
      .status(200)
      .send(response)
      .end();
  } catch (error) {
    console.error(`[PUT] /variety/${req.params.id || ''} Error:`, JSON.stringify(error));
    res.status(500).send(error.message || {});    
  }
});

router.delete('/:id', async (req, res) => {
  try {
    console.log(`[DELETE] /variety/${req.params.id || ''}`);
    const variety = await Variety.findById(req.params.id); 
    const response = variety ? await variety.destroy() : RECORD_NOT_FOUND;
    res 
      .status(200)
      .send(response)
      .end();
  } catch (error) {
    console.error(`[DELETE] /variety/${req.params.id || ''} Error:`, JSON.stringify(error));
    res.status(500).send(error.message || {});        
  }
});

module.exports = router