'use strict';

const express = require('express');
const router = express.Router();

const Variety = require('../models').Variety;
const Measure = require('../models').Measure;
const sequelize = require('../models').sequelize;

router.post('/', async (req, res) => {  
  try {
    console.log('[POST] /coin', JSON.stringify(req.body));    
    const { year, overtonNumber, rarity, notes, measures } = req.body;

    Variety.hasMany(Measure)
    Measure.belongsTo(Variety);

    await sequelize.sync();

    const coin = await Variety.create({
      year: year,
      overtonNumber: overtonNumber,
      rarity: rarity,
      notes: notes,
      measures: measures         
    }, {
      include: [ Measure ]
    });

    res
      .status(200)
      .send(coin)
      .end();     
  } catch (error) {
    console.error('[POST] /coin Error:', JSON.stringify(error));
    res.status(500).send(error.message || {});
  }
});

router.get('/:id', async (req, res) => {
  try {
    console.log('[GET] /coin', JSON.stringify(req.params.id) || '');
    Variety.hasMany(Measure)
    Measure.belongsTo(Variety);

    await sequelize.sync();
    const coin = await Variety.findAll({ 
      where: { id: req.params.id },
      include: [ Measure ]
    });

    res
      .status(200)
      .send(coin)
      .end();
  } catch (error) {
    console.error('[GET] /coin Error:', JSON.stringify(error.message));
    res.status(500).send(error.message || {});
  }
});

module.exports = router