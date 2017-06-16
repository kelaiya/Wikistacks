const express = require('express');
const router = express.Router();
const wikiRouter = require('./wiki');
const userRouter = require('./users');
console.log("hi",typeof(wikiRouter));
router.use('/wiki', wikiRouter);
//router.use('/wiki', require('./wiki'));

module.exports = router;