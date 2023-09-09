const express = require('express');
const mainRouterApp = express.Router();
const nurseRouter = require('./nurseRoutes');
const patientRouter = require('./patientRoutes');
const urgencyRouter = require('./urgencyRoutes');

function mainRouter(app)
{
    app.use('/', mainRouterApp);
    mainRouterApp.use('/nurses', nurseRouter);
    mainRouterApp.use('/patients', patientRouter);
    mainRouterApp.use('/urgencies', urgencyRouter);
}

module.exports = mainRouter;