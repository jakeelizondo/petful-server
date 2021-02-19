const express = require('express');
const cors = require('cors');
const { CLIENT_ORIGIN } = require('../../config');

const app = express();

app.use(cors());

//route below
app.use('/api/people', require('../people/people.router'));
app.use('/api/pets', require('../pets/pets.router'));
app.use('/api/dog', require('../dog/dog.router'));
app.use('/api/cat', require('../cat/cat.router'));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

module.exports = app;
