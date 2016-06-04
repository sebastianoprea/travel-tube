// Main starting point
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.static(__dirname + "/public"));

// DB Setup
mongoose.connect('mongodb://sebseb:comedie11@ds013881.mlab.com:13881/traveltube');

// App Setup
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
router(app);

// Server Setup
const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port);
