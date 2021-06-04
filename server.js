const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const googleapi = require('./routes/api/google');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Passport middleware
app.use(passport.initialize());

// Passport Config

// Use Routes
app.use('/googleapi', googleapi);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));