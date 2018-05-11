const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const animeRouter =  require('./routes/animeRoute');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(logger('dev'));
app.use(bodyParser.json());


app.use('/anime', animeRouter);


app.listen(PORT, () =>{
    console.log(`running on port${PORT}`);
})