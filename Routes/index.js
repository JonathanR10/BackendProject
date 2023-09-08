const express = require('express');
const mainRouterApp = express.Router();
const customerRouter = require('./customerRoutes');

function mainRouter(app)
{
    app.use('/', mainRouterApp);
    mainRouterApp.use('/customers', customerRouter);
}

module.exports = mainRouter;