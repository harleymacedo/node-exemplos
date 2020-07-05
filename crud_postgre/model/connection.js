const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgres://harleymacedo:@localhost:5432/harleymacedo'
});

module.exports = pool;