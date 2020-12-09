const pool = require('../utils/pool.js');

module.exports = class Bots {
    id;
    name;
    sign;
    sweet;
    sassy;

    contructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.sign = row.sign;
        this.sweet = row.sweet;
        this.sassy = row.sassy;

    }
};