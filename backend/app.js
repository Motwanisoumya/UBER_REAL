const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app =  express();
const cookieParser = require('cookie-parser');
const connectoDB = require('./database/db');
const userRoutes = require('./routes/user.route');
const captainRoutes = require('./routes/captain.route');


connectoDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/users', userRoutes);
app.use('/api/captains', captainRoutes);


module.exports = app;