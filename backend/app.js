// here we'll initialize express application

// note that order is important. example: app.use(routes) needs to follow cookieParser
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const { ValidationError } = require('sequelize');


const { environment } = require('./config');
const isProduction = environment === 'production';
// initialize express app:
const app = express();

// middleware for logging info about requests and responses:
app.use(morgan('dev'));


// parses cookies and JSON bodies of requests with Content-Type of 'application/json'
app.use(cookieParser());
app.use(express.json());

// security middlewares:
if (!isProduction) {
  // enable cors only in development:
  app.use(cors());
}

// helment helps set variety of headers to secure you app
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin"
  })
);

// Set the _csrf token and create req.csrfToken method
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true
    }
  })
);

app.use(routes) // connect all the routes

// Error Handling:

// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err); // if err is passed in, error handlers after this one will be invoked
})

// Process sequelize errors
app.use((err, _req, _res, next) => {
  // check if error is a sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
  }
  next(err);
});

// Error formatter
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack
  });
});



module.exports = app;
