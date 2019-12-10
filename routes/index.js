const router = require('express').Router();
const api = require('express').Router();

const appRouter = require('./app.route');

router.use(appRouter);

module.exports = api.use('/api', router);