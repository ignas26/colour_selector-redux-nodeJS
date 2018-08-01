const express = require('express');
const app = express();

const port = process.env.PORT || 9000;

app.use(express.static(`${__dirname}/public`));
app.use(express.static(__dirname + '/client/build'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.get('/', (req, res)=>{
//   res.send('kol kas tvarkoma')
// });

if(process.env.NODE_ENV==='production'){
  app.get('/*', (req, res)=>{
    res.sendFile(__dirname+'/client/build/index.html')
  })
}

app.listen(port, () => {

});