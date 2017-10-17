var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');
<<<<<<< HEAD

var index = require('./server/routes/index');
var users = require('./server/routes/users');

var comments = require('./server/controllers/comments');

// middleware
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var passport = require('passport');
var flash = require('connect-flash');
=======
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(session);
var comments = require('./server/controllers/comments');

var index = require('./server/routes/index');
var users = require('./server/routes/users');
>>>>>>> develop

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'server/views/pages'));
app.set('view engine', 'ejs');

<<<<<<< HEAD
// database sestup
var config = require('./server/config/config.js');
mongoose.connect(config.url);
mongoose.connection.on('error', function(){
  console.error('MongoDB Connection Error. Make sure MongoDB is running');
});

// passport setup
=======
var config = require('./server/config/config.js');
mongoose.connect(config.url);
mongoose.connection.on('open', function() {
  console.log("MongoDB Start");
})
mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Error. Make sure MongoDB is running.');
})
>>>>>>> develop
require('./server/config/passport')(passport);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
<<<<<<< HEAD
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  outputStyle: 'compressed',
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// passport setting
app.use(session({
  secret: 'sometextgohere',
=======
  src: path.join(__dirname, 'public/stylesheets'),
  dest: path.join(__dirname, 'publics/tylesheets'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'something',
>>>>>>> develop
  saveUninitialized: true,
  resave: true,
  store: new MongoStore({
    url: config.url,
    collection: 'sessions'
  })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
<<<<<<< HEAD
app.use('/', index);
app.use('/users', users);

=======


app.use('/', index);
app.use('/users', users);
>>>>>>> develop
app.get('/comments', comments.hasAuthorization, comments.list);
app.post('/comments', comments.hasAuthorization, comments.create);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
<<<<<<< HEAD
=======
  console.log("is here?")
>>>>>>> develop
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

<<<<<<< HEAD
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


// 
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function(){
  console.log('Express server listening on port' + server.address().port);
});
=======
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        console.log("yes you are!!!")
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function(){
  console.log('Express server listeninig on port ' + server.address() + server.address().port);
})

module.exports = app;
>>>>>>> develop
