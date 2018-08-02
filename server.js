const express = require('express');
const app = express();
const adminRoutes = require('./routes/adminRoutes');
const bodyParser = require ('body-parser');
require('dotenv').config();
require('./database/connectTo')();

const port = process.env.PORT || 9000;

app.use(express.static(`${__dirname}/public`));
app.use(express.static(__dirname + '/client/build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', adminRoutes);

if(process.env.NODE_ENV==='production'){
  app.get('/*', (req, res)=>{
    res.sendFile(__dirname+'/client/build/index.html')
  })
}

app.listen(port, () => {

});