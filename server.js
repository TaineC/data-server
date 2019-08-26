var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');
// var fileUpload = require('express-fileupload'); -- for images

var Type = require('./type-model');
var User = require('./user-model');
var Product = require('./product-model');
var Review = require('./review-model');

//blabla12345

//setup database connection
var connectionString = 'mongodb://school_user:blabla12345@cluster0-shard-00-00-mguqn.mongodb.net:27017,cluster0-shard-00-01-mguqn.mongodb.net:27017,cluster0-shard-00-02-mguqn.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(connectionString,{ useNewUrlParser: true });
var  db = mongoose.connection;
db.once('open', () => console.log('Database connected'));
db.on('error', () => console.log('Database error'));


//setup express server
var app = express();
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(logger('dev'));


app.use(express.static('public'))

//setup routes
var router = express.Router();

router.get('/testing', (req, res) => {
  res.send('<h1>Testing is working</h1>')
})


app.use('/api', router);

// launch our backend into a port
const apiPort = 3001;
app.listen(apiPort, () => console.log('Listening on port '+apiPort));