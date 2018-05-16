const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const animeRouter =  require('./routes/animeRoute');
const registerRoute = require('./routes/registerRoute');
const authRoute = require('./routes/authRoute');
const reviewRoute = require('./routes/reviewsRoute');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(logger('dev'));
app.use(bodyParser.json());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

app.use('/animes', animeRouter);
app.use('/register', registerRoute);
app.use('/api', authRoute);
app.use('/reviews', reviewRoute);

app.listen(PORT, () =>{
    console.log(`running on port${PORT}`);
})