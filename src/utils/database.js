const express = require('express');
const app = express();

const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://postgres:@localhost:5432/enterprise'
});
client.connect();

app.get('/customers', async (req, res) => {
  try {
    const pib = req.query.pib;
    const result = await client.query(
      'SELECT * FROM customers WHERE pib = $1',
      [pib]
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.json({ message: 'An error occurred' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});