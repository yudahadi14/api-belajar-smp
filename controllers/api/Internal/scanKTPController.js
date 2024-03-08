const models = require("../../../models");
const { Op } = require("sequelize");
const { success, error } = require("../../../helpers/utility/response");
const moment = require("moment");
const { sequelize } = require("../../../models");
const { default: axios } = require("axios");
const { pagination } = require("../../../helpers/utility/common");
const { funcSendFcm } = require("../Firebase/cloudMessagingController");
const { globalLogger } = require("../../../helpers/utility/logger");
const fs = require("fs");

exports.cariPendaftaran = (req, res) => {
  const { nik } = req.query;
  return models.pasienonline
    .findOne({
      where: {
        regpsonline_id_jns_id_nomor: nik,
      },
      order: [["regpsonline_id_reg", "DESC"]],
    })
    .then((pendaftaran) => {
      if (!pendaftaran) {
        throw new Error(`Data ${nik} tidak ditemukan`);
      }
      return success(req, res, pendaftaran, "Berhasil Cari.");
    })
    .catch((err) => {
      return error(req, res, {}, "Gagal Cari", 500, err);
    });
};

exports.scanKTP = (req, res) => {
  const {
    responseCode,
    nik,
    namaLengkap,
    jenisKelamin,
    tanggalLahir,
    tempatLahir,
    statusKawin,
    alamat,
    namaProvinsi,
    namaKabupaten,
    namaKecamatan,
    namaKelurahan,
    nomorRt,
    nomorRw,
    kodePos,
    foto,
    serialNumber,
    fpImage,
    agama,
  } = req.body;
  console.log("MULAI INTI SMART READER");
  console.log(req.body);

  return models.pasienonline
    .create({
      regpsonline_id_jns_id: "1",
      regpsonline_id_jns_id_nomor: nik,
      regpsonline_namalengkap: namaLengkap,
      regpsonline_namapanggilan: namaLengkap,
      regpsonline_tmptlahir: tempatLahir,
      regpsonline_tgllahir: moment(tanggalLahir, "DD-MM-YYYY").format(
        "YYYY-MM-DD"
      ),
      regpsonline_jnskelamin: jenisKelamin === "LAKI-LAKI" ? "1" : "2",
      regpsonline_alamat: alamat,
      regpsonline_rtrw: nomorRt + "/" + nomorRw,
      regpsonline_kelurahan: namaKelurahan,
      regpsonline_kecamatan: namaKecamatan,
      regpsonline_kotadati: namaKabupaten,
      regpsonline_kdpos: kodePos,
      regpsonline_propinsi: namaProvinsi,
      regpsonline_notelpon: "-",
      regpsonline_agama: agama === "ISLAM" ? 1 : null,
      regpsonline_nilaiyakin: 0,
      // regpsonline_textnilaiyakin: textNilaiYakin || null,
      regpsonline_stsnikah: statusKawin === "BELUM KAWIN" ? 1 : 2,
      regpsonline_stswarganegara: "1",
      regpsonline_infoibu: "-",
      regpsonline_infoayah: "-",
      // regpsonline_infoistrisuami: infoIstriSuami || "-",
      // regpsonline_nopenjamin: noPenjamin || null,
      regpsonline_nmwalidarurat: "-",
      regpsonline_telponwalidarurat: "-",
      regpsonline_fileupload: req.fileName || "-",
      regpsonline_filephoto: req.fileName || "-",
      regpsonline_flig_flag: false,
      // regpasienonline_notelpon2: noTelpon2 || null,
      regpsonline_alamat_domisili: `${alamat} RT.${nomorRt} RW.${nomorRw}`,
      // regpsonline_stspendidikan: statusPendidikan || null,
      // regpsonline_penjamin: penjamin || null,
      // regpsonline_bahasa: bahasa || null,
      // regpsonline_infokerja: infoKerja || null,
      // regpsonline_infokerja_lainnya: infoKerjaLainnya || null,
    })
    .then((pasien) => {
      if (pasien) {
        return success(req, res, pasien, "Pasien berhasil terdaftar.");
      }
      return error(req, res, {}, "Gagal mendaftar", 400);
    })
    .catch((err) => {
      return error(req, res, {}, "Gagal mendaftar", 500, err);
    });

  // return models.mst_iot_devices
  //   .findOne({
  //     where: {
  //       iot_dvc_type: "inti_smart_reader",
  //       iot_dvc_code: serialNumber,
  //     },
  //   })
  //   .then((dvc) => {
  //     if (!dvc) {
  //       throw new Error("Device not found");
  //     }
  //     return funcSendFcm({
  //       title: "KTP READER",
  //       body: "Membaca KTP anda",
  //       to: dvc.fcm_token,
  //       data: {
  //         nik,
  //         namaLengkap,
  //         jenisKelamin,
  //         tanggalLahir,
  //         tempatLahir,
  //         statusKawin,
  //         alamat,
  //         namaProvinsi,
  //         namaKabupaten,
  //         namaKecamatan,
  //         namaKelurahan,
  //         nomorRt,
  //         nomorRw,
  //         kodePos,
  //         foto,
  //         // ttd,
  //       },
  //     });
  //   })
  //   .then(() => {
  //     return res.json("Berhasil");
  //   });
};
