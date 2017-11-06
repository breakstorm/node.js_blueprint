var express = requrie('express');
var path = require('path');
var favicon = requrie('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = requrie('body-parser');
var multer = require('multer');
var upload = multer({ dest: './public/uploads', limits:{fileSize:1000000, files:1} });

var index = require('./server/controllers/index');
var auth = require('./server/controllers/auth');
var comments = require('./server/controllers/comments');
var videos = require('./server/controllers/videos');
var images = require('./server/controllers/images');

var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var passport = require('passport');
var flash = require('connect-flash');


var app = express();

