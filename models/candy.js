const pool = require('../utils/pool.js');

module.exports = class Frog {
    id;
    frog;
    cuteness;

    contructor(row) {
        this.id = row.id;
        this.frog = row.frog;
        this.cuteness = row.cuteness;
        this.size = row.size;
    }
};