import { Pool } from 'pg';

require('dotenv').config();

let { DB_USERNAME, DB_PASSWORD, DB_SERVER } = process.env;

const pool = new Pool({
  host: DB_SERVER,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export default pool;
