const express = require('express');
const app = express();
const mainRouter = require('./Routes');
const config = require('./config');

app.get('/', (req, res) =>
{
    res.status(200).json(
    {
        notification: "Server is running =)"
    });
});

app.use(express.json());

mainRouter(app);

app.listen(config.port, () =>
{
    console.log('Server listening on port = ', config.port);
})