const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.CONFIG_HTTP_PORT || 4000;

app.use(bodyParser.json({ limit: '50mb' }));

require('./routes')(app);

app.listen(port, () => {
  console.info(`${process.env.APPLICATION_NAME} listening on port: ${port}`);
});