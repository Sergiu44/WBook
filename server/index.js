const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const PORT = 6969;

app.use(bodyParser.urlencoded({extended: true}))
// Setting the EJS for template rendering
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client/views'));
app.use(express.static(path.join(__dirname, '../client/public')));

// Importing the routes
require('./routes/login')(app);
require('./routes/posts')(app);
require('./routes/main')(app);

// Creating the rest of the routes
app.get('/', (_req, res) => {
    res.render('mainPage', { message: 'Error message' });
})
app.get('/search', (_req, res) => {
    res.render('searchPage');
})


app.listen(PORT, () => {
    console.log("Server running");
})