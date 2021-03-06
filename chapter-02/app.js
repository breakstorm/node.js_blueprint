var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//add hwigyum
var swig = require('swig');

// var index = require('./routes/index');
// var users = require('./routes/users');
// hwigyum add 
var index = require('./controllers/index');
var bands = require('./controllers/band');
var users = require('./controllers/user');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// add hwigyum : template engine set
var swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.use('/users', users);

// hwigyum add
app.get('/', index.show);
app.get('/bands', bands.list);
app.get('/bands/:id', bands.byId);
app.post('/bands', bands.create);
app.put('/bands/:id', bands.update);
app.delete('/bands/:id', bands.delete);
app.get('/users', users.list);
app.post('/users', users.create);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
