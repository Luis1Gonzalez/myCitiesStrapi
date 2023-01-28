module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ces17l4gqg4dp7o6r7hg-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'mycities'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'czObhZ4HCU3vAjSzljRIu35H3Tz66r6w'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
