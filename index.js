const express = require('express');
const app = express();
const Frog = require('./models/frog.js')
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/frog', (req, res) => {
    Frog
     .find()
     .then(frogs => res.send(frogs))

});


app.post('/frog', async(req, res) => {
    const frog = await Frog.insert(req.body);
    res.send(frog)
});



app.listen('3002', () => {
    console.log(`Listening on port 3002`);
});
module.exports = { app };


