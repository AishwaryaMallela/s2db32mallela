var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var StudentRouter = require('./routes/Student');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var usersRouter = require('./routes/users');
var resourceRouter = require('./routes/resource');
var Student = require('./models/Student');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/Student', StudentRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
await Student.deleteMany();

let instance1 = new Student({student_name:"Gauthi", student_gender:'Male', student_id:"6378256"});
instance1.save( function(err,doc) {
if(err) return console.error(err);
console.log("First object saved")
});

let instance2 = new Student({student_name:"Srinu", student_gender:'Male', student_id:"1234098"});
  instance2.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("Second object saved")
  });


let instance3 = new Student({student_name:"Sandi", student_gender:'Female', student_id:"5678456"});
  instance3.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("Third object saved")
  });

}
let reseed = true;
if (reseed) { recreateDB();}



