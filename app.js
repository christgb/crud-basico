const express = require('express')
const {engine} = require('express-handlebars')
const path = require('path');
const methodOverride = require('method-override')

const app = express()
app.use(express.json());

app.listen(3000, () => {
  console.log(`Server Running at 3000`);
})

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// put 
app.use(methodOverride('_method'));

// req body middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Routes 
app.use('/', require('./routes/index'));