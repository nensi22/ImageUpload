const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

app.use(bodyParser.urlencoded({ extends: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'image')));

app.use('/admin', require('./routes/admin'));
app.use('/', require('./routes/shop'));

app.listen(process.env.PORT, () => {
    console.log(`server listening PORT: ${process.env.PORT}`);
})