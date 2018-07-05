const port = process.env.CONFIG_HTTP_PORT || 4000;

const express = require('express');
const app = express();

require('./routes')(app);

app.listen(port, () => {
  console.info(`${process.env.APPLICATION_NAME} listening on port: ${port}`);
});