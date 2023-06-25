const bodyParser = require('body-parser');
const express    = require('express');
const app        = express();

const admimRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({ extended: false }));

//now only routes staring with /admin will go into adin routes file
app.use('/admin' ,admimRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
 res.status(404).send('<h1>Page Not Found!</h1>')
});

app.listen(3000);