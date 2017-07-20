var express = require('express');
var passport = require('passport');
//var expressVue = require('express-vue');
var session = require('express-session');
//var graphQLHTTP = require('express-graphql');
//var schema = require('./graphql/schema/schema.js');
var config = require('./config.js');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser');

// Configure view engine to render pug templates.

//app.use('/graphql',cors(), graphQLHTTP({
//	schema,
//	graphiql:true,	
//}));


app.set('view engine', 'pug');
app.set('views', __dirname +  '/views');


// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(session({ secret: 'keyboard cat', 
                  resave: true, 
                  saveUninitialized: true
}));

// Create a new Express application.
app.use(passport.initialize());
app.use(passport.session());
app.use(cors())
app.use(bodyParser.json()); 

// Register all the passport authentication routes
config.authProviders.forEach((provider) => {
  var routes = require('./passport/' + provider + '.js');
  app.use(routes);
});

var routes = require('./routes.js');
app.use(routes);

app.get('/', function (req, res) {
   res.render('/home');
})

app.listen(config.app.port);
console.log('Listening on port ' + config.app.port + '...');
