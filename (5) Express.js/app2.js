const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// To serve files statically
app.use(express.static(path.join(__dirname, 'public')));

/*
app.post('/product', (req, res) => {
  // extracting the body of our incoming request
  console.log(req.body);
  res.redirect('/');
});

app.use('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});
*/
// Say all admin paths start for /admin, so we can filter paths here to match only those starting with /admin
app.use('/admin', adminRoutes);

/*
app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express !</h1>');
});
*/
app.use(shopRoutes);

// For no matching routes, control comes here and we send back 404 error page
app.use((req, res, next) => {
  // res.status(404).send('<h1>Page not found !</h1>');
  res.status(404).sendFile(path.join(__dirname, 'views', '404-error.html'));
});

app.listen(3000);

/**
 * app.use('/admin', adminRoutes);
 *
 * This filtering mechanism allows us to put a common starting segment for our path which all routes in a given
 *  file use to outsource that into app.js, so that we dont have to repeat it for all routes in admin.js
 *
 */
