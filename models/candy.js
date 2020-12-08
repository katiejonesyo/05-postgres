const pool = require('../utils/pool.js');

module.exports = class Candy {
    id;
    candy;
    sour;
    sweet;

    contructor(row) {
        this.id = row.id;
        this.candy = row.candy;
        this.sour = row.sour;
        this.sweet = row.sweet;
    }
};