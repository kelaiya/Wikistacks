const express = require('express');
const router = express.Router();
var models = require('../models');
var Page = models.Page; 
var User = models.User; 


router.get('/', function(req, res, next) {
  res.render('wikipage');
});


router.post('/', function(req, res, next) {
	// client.query('INSERT INTO Page (title,content) VALUES ($1) RETURNING*',[req.body.title,req.body.content], function(err, result){
	// 	if(err) next(err);
	// 	var user = result.row[0];
		//client.query('INSERT INTO Users (content) VALUES ($1) RETURNING*',[req.body.content], function(err, result){
	//});

	 var page = Page.build({
    title: req.body.title,
    content: req.body.content
  });
  //res.json(req.body);
  console.log("helppp");
  page.save();
  res.render('addpage');
});

router.get('/add', function(req, res) {
  res.render('addpage');
});

// router.get('/add', function(req, res, next) {
//   res.send('got to GET /wiki/add');
// });



module.exports = router;
