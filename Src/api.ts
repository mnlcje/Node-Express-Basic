import * as express from "express";
import * as http  from 'http';

const api = express();

api.use((req, res, next) => {

    console.log('In the middleware!');
   
    // Allows the request to continue to the next middleware in line
    next();
});

api.use((req, res, next) => {
    
    console.log('In another middleware!');

    res.send('<h1>Hello from Express!</h1>');
});

const server = http.createServer(api);
server.listen(5000);



