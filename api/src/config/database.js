module.exports = {
    dialect:  'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'marcosp',
    database: 'garagem',
    port: 5432,
    define: {
        timestamps: true,
        underscored: true,
    },
    logging: process.env.NODE_ENV === 'production' ? false : console.log

};