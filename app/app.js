const express = require('express');
const path = require('path');
const pathRoutes = require('./routes/apiRoutes');
const bodyParser = require('body-parser');
const dbConnection = require('./model/dbConnection')

const app = express();

app.use(dbConnection)
   .use(bodyParser.urlencoded({extended: true}))     
   .use('/', pathRoutes)
   .set('port', 3000 )
   .set('view engine', 'ejs')
   .set('views', path.join(__dirname, '..', 'src', 'views'))
   .listen(app.get('port'), () => { console.log(`Server running localhost:${app.get('port')}`);
});




