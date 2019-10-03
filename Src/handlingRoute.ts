
/*
Handling Different Routes
*/

import * as express from "express";
import * as http  from 'http';

const api = express();

api.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

api.use('/add-product', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>The "Add Product" Page</h1>');
});

api.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
  });

    

const server = http.createServer(api);
server.listen(5000);




