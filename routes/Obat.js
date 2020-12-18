var express = require('express');
var router = express.Router();

var ObatUnch = require('../models/ObatUnch.js');


/**
 * Routing GET POST PUT DELETE NDORO
 * @henna_unch
 * @GET = Menampilkan Data
 * @POST = Menambahkan Data
 * @PUT = Mengubah Data
 * @DELETE = Mengahpus Data Hyungg
 */

 
router.get('/', function (req, res, next) {
    ObatUnch.findAll().then(data => {
        res.json({
            status: true,
            pesan: "Berhasil Tampil",
            data: data
        });
    }).catch(err => {
        res.json({
            status: false,
            pesan: "Gagal Tampil: " + err.message,
            data: []
        });
    });
});


router.post('/', function (req, res, next) {
    ObatUnch.create(req.body).then(data => {
            res.json({
                status: true,
                pesan: "Berhasil Tambah",
                data: data
            });
        })
        .catch(err => {
            res.json({
                status: false,
                pesan: "Gagal Tambah: " + err.message,
                data: []
            });
        });
});


router.put('/', function (req, res, next) {
    ObatUnch.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(() => {
            res.json({
                status: true,
                pesan: "Berhasil Ubah",
                data: []
            });
        })
        .catch(err => {
            res.json({
                status: false,
                pesan: "Gagal Ubah: " + err.message,
                data: []
            });
        });
});


router.delete('/', function (req, res, next) {
    ObatUnch.destroy({
            where: {
                id: req.body.id
            }
        }).then(() => {
            res.json({
                status: true,
                pesan: "Berhasil Hapus",
                data: []
            });
        })
        .catch(err => {
            res.json({
                status: false,
                pesan: "Gagal Hapus: " + err.message,
                data: []
            });
        });
});
module.exports = router;