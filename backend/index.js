const express = require('express');
const app = express();

//solve cors issue
const cors = require("cors");

app.use(cors());

const port = 5000;
const Pool = require('pg').Pool;

  //Entering Postgres database details
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'enterprise',
    password: '123',
    dialect: 'postgres',
    port: 5432
});
  
  //Database connection 
pool.connect((err, client, release) => {
    if (err) {
        return console.error(
            'Error acquiring client', err.stack)
    }
    client.query('SELECT NOW()', (err) => {
        release()
        if (err) {
            return console.error(
                'Error executing query', err.stack)
        }
        console.log("Connected to Database !")
    })
})
  
app.get('/customers', (req, res) => {
    console.log("TEST DATA :");
    const pib = req.query.pib;
    pool.query('SELECT * FROM customers WHERE pib = $1',[pib])
        .then(testData => {
            console.log(testData);
            res.send(testData.rows);
        })
})




/*const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://postgres:123@localhost:5432/enterprise'
});
client.connect();

app.get('/customers', async (req, res) => {
  try {
    const pib = req.query.pib;
    const result = await client.query('SELECT * FROM customers WHERE pib = $1',[pib]);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.json({ message: 'An error occurred' });
  }
}); */

app.listen(port, () => {
  console.log(`Horror jassa app is running on port ${port}.`);
});