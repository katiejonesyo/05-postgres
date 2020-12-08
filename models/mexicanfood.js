const pool = require('../utils/pool.js');

module.exports = class Mexicanfood {
    id;
    food;
    spicy;
    burrito;
    tacos;

    contructor(row) {
        this.id = row.id;
        this.food = row.food;
        this.spicy = row.spicy;
        this.burrito = row.burrito;
        this.taco = row.taco;
    }
};