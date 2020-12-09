const express = require('express');
const app = express();
const Frog = require('./models/Frog')
app.use(express.json());
require('dotenv').config();


app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/frog', (req, res) => {
    Frog
     .find()
     .then(frog => res.send(frog))

});

app.get('/frog/:id', (req, res)  => {
    Frog
    .findById(req.params.id)
    .then((frog) => res.send(frog))
});


app.post('/frog', async(req, res) => {
    Frog
    .insert(req.body)
    .then(frog => res.send(frog));
});


app.put('/frog/:id', (req, res)  => {
    Frog
    .update(req.params.id, req.body)
    .then((frog) => res.send(frog))
});


app.delete('/frog/:id',(req, res) => {
    Frog
    .delete(req.params.id)
    .then((frog) => res.send(frog));
});

module.exports = app;


