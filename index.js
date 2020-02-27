const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const authRoute = require('./routes/auth');

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}, 
() => console.log('database in mongodb running...'));

app.use(express.json());
app.use('/api/user', authRoute);


app.listen(5000, () => console.log('server running...'));