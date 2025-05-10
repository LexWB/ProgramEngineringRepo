const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.send(`Сервер працює. Поточний час: ${result.rows[0].now}`);
});

app.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`);
});
