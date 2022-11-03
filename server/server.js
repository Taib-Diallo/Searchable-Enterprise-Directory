const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

// routes included
const directoryRouter = require('./routes/directory.router');
const loginRouter = require('./routes/login.router');

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/directory', directoryRouter);
app.use('/login', loginRouter);

// serve static files
app.use(express.static('build'));

// app set
const PORT = process.env.PORT || 5001;

// listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
