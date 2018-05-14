const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const registerRoute = require('./routes/registerRoute');
const animeRouter =  require('./routes/animeRoute');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/', animeRouter)
app.use('/animes', animeRouter);
app.use('/anime/:id', animeRouter)
app.use('/register', registerRoute);


app.listen(PORT, () =>{
    console.log(`running on port${PORT}`);
})