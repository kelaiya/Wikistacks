const express = require( 'express' );
const nunjucks = require( 'nunjucks' );
const app = express();
var bodyParser = require('body-parser');
const routes = require('./routes');
var morgan = require('morgan');
var models = require('./models');
var index = require('./routes/index.js');



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

models.db.sync({force: true})
.then(function () {
    // make sure to replace the name below with your express app
    app.listen(3000, function () {
        console.log('Server is listening on port 3001!');
    });
})
.catch(console.error);
