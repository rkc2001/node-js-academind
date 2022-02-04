const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

// Routes can have same location IF method described on it is different
router.post('/add-product', (req, res) => {
  // extracting the body of our incoming request
  console.log(req.body);
  res.redirect('/');
});

router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

module.exports = router;
