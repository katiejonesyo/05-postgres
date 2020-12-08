const pool = require('../utils/pool.js');

module.exports = class Frog {
    id;
    frog;
    cuteness;
   

    contructor(row) {
        this.id = row.id;
        this.frog = row.frog;
        this.cuteness = row.cuteness;
       
    }

     // Crud Methods

     static async insert({ frog, cuteness}) {
        const { rows } = await pool.query(
          'INSERT INTO frog (frog, cuteness) VALUES ($1, $2) RETURNING *',
          [frog, cuteness]
        );
    
        return new Frog(rows[0]);
      };



    static async find() {
        const { rows } = await pool.query('SELECT * FROM frog')
            return rows.map(row => new Frog(row));
    }

    static async frindById(id) {
        const { rows } = await pool.query('SELECT * FROM frog WHERE id=$1', [id]);

        if(!rows[0]) throw new Error(`No frog with id ${id}`);
        return new Frog(rows[0]);
    }

    static async update(id, { frog, cuteness }) {
        const { rows } = await pool.query(
            `UPDATE frog
            SET frog=$1
                cuteness=$2
            
            WHERE id=$4
            RETURNING *
            `,
            [frog, cuteness,  id]
        );

        return new Frog(rows[0]);
    }

    static async delete(id) {
        const { rows } = await pool.query('DELETE FROM frog WHERE id=$1 RETURNING *', [id]);
        return new Frog(rows[0]);
    }


};



