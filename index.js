const express = require('express');
const restaurantRouter = require('./routes/restaurant');
const indexRouter = require('./routes/index');
const hbs = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 3080;

//creater server
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')));
app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');

//Use Router
app.use('/api',restaurantRouter);
app.use('/',indexRouter);


app.listen(
    PORT,
    () => {
      console.log(`Listening to port ${PORT}`);
    }
  );