require('dotenv').config();
require('./utils/pool.js').connect();
const app = require('./app');
const port = 3003;

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});

