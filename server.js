const express = require('express');
// import express from 'express';
const bodyParser = require('body-parser');

const { PORT: port = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('./routes'));

app.listen(port, '0.0.0.0', () => console.log(`Express server listening on port ${port}`));