const Sequelize = require('sequelize');

// Load Sequelize Library

var UnchDB = {
    database: 'heena',
    username: 'root',
    password: '',
    host: 'localhost',
    port: '3306'
}

/**
 * Configurasi Database Happy Land Unch
 * @Heena_Unch
 * 18 Desember 2020
 */


const koneksi = new Sequelize(UnchDB.database, UnchDB.username, UnchDB.password, {
    host: UnchDB.host,
    port: UnchDB.port,
    dialect: 'mariadb',
    dialectOptions: {
        useUTC: false,
        timezone: "Etc/GMT+7"
    }
});

koneksi.authenticate().then(() => {

    console.log('Berhasil Konek');

}).catch(err => {

    console.error('Gagal Konek:', err.message);

});


module.exports = koneksi;
