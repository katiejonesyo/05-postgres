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

     // Crud Methods

     static async insert({ frog, cuteness, size }) {
        const { rows } = await pool.query(
          'INSERT INTO frog (frog, cuteness, size) VALUES ($1, $2, $3) RETURNING *',
          [frog, cuteness, size]
        );
    
        return new frog(rows[0]);
      };



    static async find() {
        const { rows } = await pool.query('SELECT * FROM frog')
            return rows.map(row => new frog(row));
    }

    static async frindById(id) {
        const { rows } = await pool.query('SELECT * FROM frog WHERE id=$1', [id]);

        if(!rows[0]) throw new Error(`No frog with id ${id}`);
        return new frog(rows[0]);
    }

    static async update(id, { frog, cuteness, size }) {
        const { rows } = await pool.query(
            `UPDATE frog
            SET frog=$1
                cuteness=$2
                size=$3
            WHERE id=$4
            RETURNING *
            `,
            [frog, cuteness, size, id]
        );

        return new frog(rows[0]);
    }

    static async delete(id) {
        const { rows } = await pool.query('DELETE FROM frog WHERE id=$1 RETURNING *', [id]);
        return new frog(rows[0]);
    }


};



