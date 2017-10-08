var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');

var index = require('./server/routes/index');
var users = require('./server/routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public/stylesheets'),
  dest: path.join(__dirname, 'publics/tylesheets'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'something',
  saveUninitialized: true,
  resave: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


app.use('/', index);
app.use('/users', users);

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

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function(){
  console.log('Express server listeninig on port ' + server.address() + server.address().port);
})

module.exports = app;
