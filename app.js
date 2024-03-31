require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const bookManagerRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');


const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/bookManager', bookManagerRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running on ${port}`));

module.exports = app