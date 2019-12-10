const router = require('express').Router();
const { appController } = require('../controllers');

module.exports = router
  .get('/insults', appController.insults)
  .get('/motivation', appController.motivation)
  .get('/inspired', appController.motivation)
  .get('/oneLinerJoke', appController.motivation);