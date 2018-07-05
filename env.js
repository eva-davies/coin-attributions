const dotenv = require('dotenv').config({ path:__dirname + '/.env', silent:true });

if (dotenv.error) {
  console.error(dotenv.error);
}