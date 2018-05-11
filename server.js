const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/apiRoute');
const animeRouter =  require('./routes/animeRoute');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/animes', animeRouter);
app.use('/api', apiRouter);

app.listen(PORT, () =>{
    console.log(`running on port${PORT}`);
})