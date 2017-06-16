const express = require( 'express' );
const nunjucks = require( 'nunjucks' );
const app = express();
var bodyParser = require('body-parser');
const routes = require('./routes');
var morgan = require('morgan');




app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/', routes);





var env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

// nunjucks.render('index.html', locals, function (err, output) {
//   if (err) console.error(err);
//   console.log(output);
// });

app.listen(3000, function(){
  console.log('server listening');
});
