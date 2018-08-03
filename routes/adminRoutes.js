const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/api/login', (req, res)=>{
  const name='admin';
  const password='admin';
  if(req.body.name===name && req.body.password===password){
    const token = jwt.sign({ name: 'admin', shop:'restaurant' }, 'shhhhh');
    res.status(200).send({name:'admin', message:'welcome', token})
  }else{
    res.status(401).send({error:'invalid credentials'})
  }
});


module.exports = router;