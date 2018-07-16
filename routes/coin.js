'use strict';

const express = require('express');
const router = express.Router();

const Variety = require('../models').Variety;
const Measure = require('../models').Measure;

router.post('/', async (req, res) => {  
  try {
    console.log('[POST] /coin', JSON.stringify(req.body));    
    const { year, overtonNumber, rarity, notes, measures } = req.body;
    const variety = await Variety.create({
      year: year,
      overtonNumber: overtonNumber,
      rarity: rarity,
      notes: notes    
    });
    
    let measuresResponse = [];
    measuresResponse = await Promise.all(
      measures.map(async data => {
        const payload = Object.assign({}, data, { varietyId: variety.id });
        return await Measure.create(payload);                
      })
    );

    res
      .status(200)
      .send({
        variety: variety,
        measures: measuresResponse
      })
      .end();     
  } catch (error) {
    console.error('[POST] /coin Error:', JSON.stringify(error));
    res.status(500).send(error.message || {});
  }
});

router.get('/:id', async (req, res) => {
  try {
    console.log('[GET] /coin', JSON.stringify(req.params.id) || '');
    const coin = await Variety.findById(req.params.id);
    const measures = await Measure.findAll({ where: { varietyId: coin.id}});
    
    const response = await Variety.findAll({
      include: [{ 
        model: Measure
      }]
    });
    console.log(`COIN ${JSON.stringify(coin)}`);
    
    res
      .status(200)
      .send({
        coin,
        measures
      })
      .end();
  } catch (error) {
    console.error('[GET] /coin Error:', JSON.stringify(error.message));
    res.status(500).send(error.message || {});
  }
});

module.exports = router