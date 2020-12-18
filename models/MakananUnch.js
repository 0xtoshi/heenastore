/**
 * Loading Library Dan Koneksi Unch 
 * @Heena_Unch
 * Happy Land 
 */


const Koneksi = require('../KoneksiUnch'); 
const Sequelize = require('sequelize');

const MakananUnch = Koneksi.define('makanan', 
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
        timestamps: true 
    }
);
module.exports = MakananUnch;