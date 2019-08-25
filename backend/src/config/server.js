const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const allowCors = require('./cors');
const port = 3050;


server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());
server.use(allowCors);

// server.get('/', function(req, res){
//     res.send('Homepage');
// });

// server.get('/about', function(req, res){
//     res.send('About');
// });

// server.post('/form', (req, res) => {
//     res.send('post');
// });

// server.use(function(req, res, next){
//     res.status(404);
//     res.send('404 - page not found');
//     next();
// });

server.listen(port, function(){
    console.log(`Backend listening on port ${port}`)
});

module.exports = server;