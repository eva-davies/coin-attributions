'use strict';

const express = require('express');
const router = express.Router();

const Variety = require('../models').Variety;
const Measure = require('../models').Measure;
const sequelize = require('../models').sequelize;

router.get('/distance/', async (req, res) => {
  console.log(`[GET] /measure/distance year: ${req.query.variety.year || ''} overtonNumber: ${req.query.variety.overtonNumber || ''} measureType: ${req.query.measureType || ''}`);
  try {
    Variety.hasMany(Measure)
    Measure.belongsTo(Variety);

    await sequelize.sync();

    const response = await Measure.findAll({ 
      attributes: ['distance'],
      where: { measureType: req.query.measureType },
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
      .send(response)
      .end();    
  } catch (error) {
    console.error(`[GET] /measure/${req.params.id || ''} Error:`, JSON.stringify(error));
    res.status(500).send(error.message || {});
  }
});

router.post('/:variertyId', async (req, res) => {  
  try {
    console.log('[POST] /measure', `variertyId: ${req.params.variertyId}`, JSON.stringify(req.body));
    const payload = Object.assign({}, req.body, { varietyId: req.params.variertyId });    
    const response = await Measure.create(payload);
    res
      .status(200)
      .send(response)
      .end();     
  } catch (error) {
    console.error('[POST] /measure Error:', JSON.stringify(error));
    res.status(500).send(error.message || {});
  }

});

module.exports = router