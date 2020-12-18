/**
 * Loading Library Dan Koneksi Unch 
 * @Heena_Unch
 * Happy Land 
 */


const Koneksi = require('../KoneksiUnch');
const Sequelize = require('sequelize');

const ObatUnch = Koneksi.define('obat', 
    {

        nama: {
            type: Sequelize.STRING,
            allowNull: false
        },
        stok: {
            type: Sequelize.STRING,
            allowNull: false
        },
        harga: {
            type: Sequelize.STRING,
            allowNull: false
        },

    }, {
        timestamps: true //AKTIF createdAt, updatedAt
    }
);
module.exports = ObatUnch;