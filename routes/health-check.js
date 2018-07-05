const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.info('[GET] health-check');
  res.json({
    service: process.env.APPLICATION_NAME,
    serviceStatus: 'up and running'    
  });
});

module.exports = router;