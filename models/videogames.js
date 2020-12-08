const pool = require('../utils/pool.js');

module.exports = class Games {
    id;
    name;
    type;
    difficulty;
    recommend;


    contructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.type = row.type;
        this.difficulty = row.difficulty;
        this.recommend = row.recommend;

    }
};