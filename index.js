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
     .then(frogs => res.send(frogs))

});


app.post('/frog', async(req, res) => {
    Frog
    .insert(req.body)
    .then(frogs => res.send(frogs));
});


app.put('/frog/:id', (req, res)  => {
    Frog
    .update(req.params.id, req.body)
    .then((frog) => res.send(frog))
});


app.delete('/frog/:id',(req, res) => {
    Frog
    .delete(req.params.id, req.body)
    .then((frog) => res.send(frog));
});

app.listen('3003', () => {
    console.log(`Listening on port 3002`);
});
module.exports = app;


