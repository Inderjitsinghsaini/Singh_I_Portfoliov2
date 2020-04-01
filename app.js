const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const hbs = require('hbs');
const nodemailer = require('nodemailer');

// set the port
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', require('./routes/index'));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())




app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    err.customMessage = "Hey you have done something wrong"

    next(err);
})

app.use((err, req, res, next) => {
    res.render('error', {data: err, layout: 'errorPage' })
})






app.listen(port, () => {
    console.log(`app is running on ${port}`);
})

