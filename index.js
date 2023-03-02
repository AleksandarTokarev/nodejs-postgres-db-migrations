const PgMigrate = require('@urbica/pg-migrate');
const pgMigrate = new PgMigrate({
  database: 'postgres',
  migrationsDir: './migrations',
  user: 'postgres',
  password: 'admin',
});


async function migrate() {
  await pgMigrate.connect();
  await pgMigrate.migrate();
  await pgMigrate.end();
}

migrate();