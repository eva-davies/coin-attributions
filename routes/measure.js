'use strict';

const express = require('express');
const router = express.Router();

const Variety = require('../models').Variety;
const Measure = require('../models').Measure;
const sequelize = require('../models').sequelize;

const RECORD_NOT_FOUND = 'Record not Found';

router.get('/distance/', async (req, res) => {
  console.log(`[GET] /measure/distance year: ${req.query.variety.year || ''} 
    overtonNumber: ${req.query.variety.overtonNumber || ''} 
    type: ${req.query.type || ''}`);
  try {
    Variety.hasMany(Measure)
    Measure.belongsTo(Variety);

    await sequelize.sync();

    const response = await Measure.findAll({ 
      attributes: ['distance'],
      where: { type: req.query.type },
      order: [['measureNumber', 'ASC']],
      include: [{ 
        model: Variety,
        attributes: [],
        where: { 
          year: req.query.variety.year,
          overtonNumber: req.query.variety.overtonNumber 
        }
      }]
    });

    res
      .status(200)
      .send(response)
      .end();
  } catch (error) {
    console.error('[GET] /measure Error:', JSON.stringify(error));
    res.status(500).send(error.message || {});
  }
});

router.get('/:id', async (req, res) => {
  try {
    console.log(`[GET] /measure/${req.params.id || ''}`);
    const response = await Measure.findById(req.params.id);
    res
      .status(200)
      .send(response || RECORD_NOT_FOUND)
      .end();    
  } catch (error) {
    console.error(`[GET] /measure/${req.params.id || ''} Error:`, JSON.stringify(error));
    res.status(500).send(error.message || {});
  }
});

router.post('/:varietyId', async (req, res) => {  
  try {
    console.log(`[POST] /measure/${req.params.varietyId || ''}`, JSON.stringify(req.body));
    const payload = {...req.body, varietyId: req.params.varietyId};    
    const response = await Measure.create(payload);
    res
      .status(200)
      .send(response)
      .end();     
  } catch (error) {
    console.error(`[POST] /measure/${req.params.varietyId || ''} Error:`, JSON.stringify(error));
    res.status(500).send(error.message || {});
  }
});

router.put('/:id', async (req, res) => {
  try {
    console.log(`[PUT] /measure/${req.params.id || ''}`, JSON.stringify(req.body));  
    const updateFields = [
      'isObverse', 
      'type', 
      'measureNumber', 
      'distance', 
      'angle',
      'updatedAt'
    ]; 
    const measure = await Measure.findById(req.params.id); 
    const response =  measure ? await measure.update({ ...req.body, updatedAt: new Date() }, 
      { fields: updateFields }) : RECORD_NOT_FOUND;
    res
      .status(200)
      .send(response)
      .end();
  } catch (error) {
    console.error(`[PUT] /measure/${req.params.id || ''} Error:`, JSON.stringify(error));
    res.status(500).send(error.message || {});    
  }
});

router.delete('/:id', async (req, res) => {
  try {
    console.log(`[DELETE] /measure/${req.params.id || ''}`);
    const measure = await Measure.findById(req.params.id); 
    const response = measure ? await measure.destroy() : RECORD_NOT_FOUND;
    res 
      .status(200)
      .send(response)
      .end();
  } catch (error) {
    console.error(`[DELETE] /measure/${req.params.id || ''} Error:`, JSON.stringify(error));
    res.status(500).send(error.message || {});        
  }
});

module.exports = router