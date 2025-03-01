const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app =  express();
const connectoDB = require('./database/db');
const userRoutes = require('./routes/user.route');

connectoDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/users', userRoutes);

module.exports = app;