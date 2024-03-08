const models = require("../../../models");
const { QueryTypes, Op } = require("sequelize");
const { success, error } = require("../../../helpers/utility/response");
const moment = require("moment");
const { sequelize } = require("../../../models");
const { default: axios } = require("axios");
const { pagination } = require("../../../helpers/utility/common");
const { funcSendFcm } = require("../Firebase/cloudMessagingController");
const { globalLogger } = require("../../../helpers/utility/logger");
const axiosBPJS = require("../BPJS/Helpers/axios");
const multer = require('multer');
var bodyParser = require('body-parser');
// const { QueryTypes } = require("sequelize");
const fs = require("fs");

// exports.cariPendaftaranIgd = (req, res) => {
//   const { nik } = req.query;
//   return models.pasienonline
//     .findOne({
//       where: {
//         regpsonline_id_jns_id_nomor: nik,
//       },
//       order: [["regpsonline_id_reg", "DESC"]],
//     })
//     .then((pendaftaran) => {
//       if (!pendaftaran) {
//         throw new Error(`Data ${nik} tidak ditemukan`);
//       }
//       return success(req, res, pendaftaran, "Berhasil Cari.");
//     })
//     .catch((err) => {
//       return error(req, res, {}, "Gagal Cari", 500, err);
//     });
// };

// exports.scanKTPIgd = (req, res) => {
//   const {
//     responseCode,
//     nik,
//     namaLengkap,
//     jenisKelamin,
//     tanggalLahir,
//     tempatLahir,
//     statusKawin,
//     alamat,
//     namaProvinsi,
//     namaKabupaten,
//     namaKecamatan,
//     namaKelurahan,
//     nomorRt,
//     nomorRw,
//     kodePos,
//     foto,
//     serialNumber,
//     fpImage,
//     agama,
//     tokenfcm
//   } = req.body;
//   console.log("MULAI INTI SMART READER");
//   // console.log(req.body);

//   //   return models.pasienonline
//   //     .create({
//   //       regpsonline_id_jns_id: "1",
//   //       regpsonline_id_jns_id_nomor: nik,
//   //       regpsonline_namalengkap: namaLengkap,
//   //       regpsonline_namapanggilan: namaLengkap,
//   //       regpsonline_tmptlahir: tempatLahir,
//   //       regpsonline_tgllahir: moment(tanggalLahir, "DD-MM-YYYY").format(
//   //         "YYYY-MM-DD"
//   //       ),
//   //       regpsonline_jnskelamin: jenisKelamin === "LAKI-LAKI" ? "1" : "2",
//   //       regpsonline_alamat: alamat,
//   //       regpsonline_rtrw: nomorRt + "/" + nomorRw,
//   //       regpsonline_kelurahan: namaKelurahan,
//   //       regpsonline_kecamatan: namaKecamatan,
//   //       regpsonline_kotadati: namaKabupaten,
//   //       regpsonline_kdpos: kodePos,
//   //       regpsonline_propinsi: namaProvinsi,
//   //       regpsonline_notelpon: "-",
//   //       regpsonline_agama: agama === "ISLAM" ? 1 : null,
//   //       regpsonline_nilaiyakin: 0,
//   //       // regpsonline_textnilaiyakin: textNilaiYakin || null,
//   //       regpsonline_stsnikah: statusKawin === "BELUM KAWIN" ? 1 : 2,
//   //       regpsonline_stswarganegara: "1",
//   //       regpsonline_infoibu: "-",
//   //       regpsonline_infoayah: "-",
//   //       // regpsonline_infoistrisuami: infoIstriSuami || "-",
//   //       // regpsonline_nopenjamin: noPenjamin || null,
//   //       regpsonline_nmwalidarurat: "-",
//   //       regpsonline_telponwalidarurat: "-",
//   //       regpsonline_fileupload: req.fileName || "-",
//   //       regpsonline_filephoto: req.fileName || "-",
//   //       regpsonline_flig_flag: false,
//   //       // regpasienonline_notelpon2: noTelpon2 || null,
//   //       regpsonline_alamat_domisili: `${alamat} RT.${nomorRt} RW.${nomorRw}`,
//   //       // regpsonline_stspendidikan: statusPendidikan || null,
//   //       // regpsonline_penjamin: penjamin || null,
//   //       // regpsonline_bahasa: bahasa || null,
//   //       // regpsonline_infokerja: infoKerja || null,
//   //       // regpsonline_infokerja_lainnya: infoKerjaLainnya || null,
//   //     })
//   //     .then((pasien) => {
//   //       if (pasien) {
//   //         return success(req, res, pasien, "Pasien berhasil terdaftar.");
//   //       }
//   //       return error(req, res, {}, "Gagal mendaftar", 400);
//   //     })
//   //     .catch((err) => {
//   //       return error(req, res, {}, "Gagal mendaftar", 500, err);
//   //     });

//   // return models.user_mobile_child
//   //   .findOne({
//   //     where: {
//   //       // iot_dvc_type: "inti_smart_reader",
//   //       iot_dvc_code: serialNumber,
//   //     },
//   //   })
//   //   .then((dvc) => {
//   //     if (!dvc) {
//   //       console.log("error");
//   //       throw new Error("Device not found");
//   //     }
//   //     console.log(dvc.tokenfcm_igd);

//       //   let qCekKtp = `select * from v_pasien
//       //   where ps_nomor_identitas = :noktp`;

//       return models.v_pasien
//         .findOne({
//           where: {
//             // iot_dvc_type: "inti_smart_reader",
//             ps_nomor_identitas: nik,
//           },
//         })
//         .then((pasienn) => {

//           //console.log(pasienn);

//           if (!pasienn) {

//             return axiosBPJS
//               .get(`/vclaim-rest/Peserta/nik/${nik}/tglSEP/${moment().format("YYYY-MM-DD")}`, {
//                 // kodebooking: `${rkun_id}`,${moment().format("YYYY-MM-DD")}
//                 // taskid: 99,
//                 // waktu: moment.utc().format("x"),
//               })
//               .then((databpjs) => {

//                 let statusaktifbpjs = '';
//                 let ketstatusaktifbpjs = '';
//                 let nokartubpjs = '';
//                 let psid = null;
//                 console.log(databpjs);
//                 console.log(databpjs['metaData']['code']);

//                 if (databpjs['metaData']['code'] == '201') {

//                 } else {

//                   statusaktifbpjs = databpjs['response']['peserta']['statusPeserta']['kode'];
//                   ketstatusaktifbpjs = databpjs['response']['peserta']['statusPeserta']['keterangan'];
//                   nokartubpjs = databpjs['response']['peserta']['noKartu'];

//                 }
//                 // console.log(databpjs);


//                 // console.log(statusaktifbpjs);
//                 // console.log(ketstatusaktifbpjs);
//                 // console.log(databpjs['response']['peserta']['jenisPeserta']);

//                 return models.pasienonline
//                   .findOne({
//                     where: {
//                       // iot_dvc_type: "inti_smart_reader",
//                       regpsonline_id_jns_id_nomor: nik,
//                     },
//                   })
//                   .then((pasienonline) => {

//                     if (pasienonline) {

//                       const pasienonlineid = pasienonline.regpsonline_id_reg;

//                       return funcSendFcm({
//                         title: "KTP READER",
//                         body: "Membaca KTP anda",
//                         to: tokenfcm,
//                         data: {
//                           nik,
//                           namaLengkap,
//                           jenisKelamin,
//                           psid,
//                           nokartubpjs,
//                           ketstatusaktifbpjs,
//                           jenisKelamin,
//                           statusaktifbpjs,
//                           pasienonlineid

//                           //foto,
//                           // ttd,
//                         },
//                       });



//                     } else {

//                       return models.pasienonline
//                         .create({
//                           regpsonline_id_jns_id: "1",
//                           regpsonline_id_jns_id_nomor: nik,
//                           regpsonline_namalengkap: namaLengkap,
//                           regpsonline_namapanggilan: namaLengkap,
//                           regpsonline_tmptlahir: tempatLahir,
//                           regpsonline_tgllahir: moment(tanggalLahir, "DD-MM-YYYY").format(
//                             "YYYY-MM-DD"
//                           ),
//                           regpsonline_jnskelamin: jenisKelamin === "LAKI-LAKI" ? "1" : "2",
//                           regpsonline_alamat: alamat,
//                           regpsonline_rtrw: nomorRt + "/" + nomorRw,
//                           regpsonline_kelurahan: namaKelurahan,
//                           regpsonline_kecamatan: namaKecamatan,
//                           regpsonline_kotadati: namaKabupaten,
//                           regpsonline_kdpos: kodePos || '-',
//                           regpsonline_propinsi: namaProvinsi,
//                           regpsonline_notelpon: "02154372874",
//                           regpsonline_agama: agama === "ISLAM" ? 1 : 0,
//                           regpsonline_nilaiyakin: 0,
//                           // regpsonline_textnilaiyakin: textNilaiYakin || null,
//                           regpsonline_stsnikah: statusKawin === "BELUM KAWIN" ? 1 : 2,
//                           regpsonline_stswarganegara: "1",
//                           regpsonline_infoibu: "-",
//                           regpsonline_infoayah: "-",
//                           // regpsonline_infoistrisuami: infoIstriSuami || "-",
//                           // regpsonline_nopenjamin: noPenjamin || null,
//                           regpsonline_nmwalidarurat: "-",
//                           regpsonline_telponwalidarurat: "-",
//                           regpsonline_fileupload: req.fileName || "-",
//                           regpsonline_filephoto: req.fileName || "-",
//                           regpsonline_flig_flag: false,
//                           // regpasienonline_notelpon2: noTelpon2 || null,
//                           regpsonline_alamat_domisili: `${alamat} RT.${nomorRt} RW.${nomorRw}`,
//                           // regpsonline_stspendidikan: statusPendidikan || null,
//                           regpsonline_penjamin: nokartubpjs || null,
//                           // regpsonline_bahasa: bahasa || null,
//                           // regpsonline_infokerja: infoKerja || null,
//                           // regpsonline_infokerja_lainnya: infoKerjaLainnya || null,
//                         })
//                         .then((registerpasienonline) => {
//                           if (registerpasienonline) {
//                             // return success(req, res, pasien, "Pasien berhasil terdaftar.");
//                             const pasienonlineid = registerpasienonline.regpsonline_id_reg;

//                             return funcSendFcm({
//                               title: "KTP READER",
//                               body: "Membaca KTP anda",
//                               to: tokenfcm,
//                               data: {
//                                 nik,
//                                 namaLengkap,
//                                 jenisKelamin,
//                                 psid,
//                                 nokartubpjs,
//                                 ketstatusaktifbpjs,
//                                 jenisKelamin,
//                                 statusaktifbpjs,
//                                 pasienonlineid

//                                 //foto,
//                                 // ttd,
//                               },
//                             });
//                           }
//                           return error(req, res, {}, "Gagal mendaftar", 400);
//                         })
//                         .catch((err) => {
//                           return error(req, res, {}, "Gagal mendaftar", 500, err);
//                         });

//                     }



//                   })
//                   .catch((err) => {
//                     return error(req, res, {}, "Gagal memuat", 500, err);
//                   });


//               })
//               .catch((err) => {
//                 return console.log(err);
//               });
//           }

//           //     const statusaktifbpjs = null;
//           //     const ketstatusaktifbpjs = null;
//           //     const nokartubpjs = null;
//           //     const psid =  pasienn.ps_id;


//           // return funcSendFcm({
//           //   title: "KTP READER",
//           //   body: "Membaca KTP anda",
//           //   to: dvc.tokenfcm_igd,
//           //   data: {
//           //     nik,
//           //     namaLengkap,
//           //     psid,
//           //     nokartubpjs,
//           //     ketstatusaktifbpjs,
//           //     jenisKelamin,
//           //     statusaktifbpjs,
//           //     //foto,
//           //     // ttd,
//           //   },
//           // });

//           //console.log(moment().format("YYYY-MM-DD"));

//           return axiosBPJS
//             .get(`/vclaim-rest/Peserta/nik/${nik}/tglSEP/${moment().format("YYYY-MM-DD")}`, {
//               // kodebooking: `${rkun_id}`,${moment().format("YYYY-MM-DD")}
//               // taskid: 99,
//               // waktu: moment.utc().format("x"),
//             })
//             .then((databpjs) => {

//               let statusaktifbpjs = '';
//               let ketstatusaktifbpjs = '';
//               let nokartubpjs = '';
//               let psid = pasienn.ps_id;
//               console.log(databpjs);
//               console.log(databpjs['metaData']['code']);

//               if (databpjs['metaData']['code'] == '201') {

//               } else {

//                 statusaktifbpjs = databpjs['response']['peserta']['statusPeserta']['kode'];
//                 ketstatusaktifbpjs = databpjs['response']['peserta']['statusPeserta']['keterangan'];
//                 nokartubpjs = databpjs['response']['peserta']['noKartu'];

//               }
//               // console.log(databpjs);


//               // console.log(statusaktifbpjs);
//               // console.log(ketstatusaktifbpjs);
//               // console.log(databpjs['response']['peserta']['jenisPeserta']);
//               const pasienonlineid = null;

//               return funcSendFcm({
//                 title: "KTP READER",
//                 body: "Membaca KTP anda",
//                 to: tokenfcm,
//                 data: {
//                   nik,
//                   namaLengkap,
//                   psid,
//                   nokartubpjs,
//                   ketstatusaktifbpjs,
//                   jenisKelamin,
//                   statusaktifbpjs,
//                   pasienonlineid,
//                   //foto,
//                   // ttd,
//                 },
//               });
//             })
//             .catch((err) => {
//               return console.log(err);
//             });

//         })
//         .catch((err) => {
//           return error(req, res, {}, "Gagal memuat", 500, err);
//         });


//     // })
//     // .catch((err) => {
//     //   return error(req, res, {}, "Gagal memuat", 500, err);
//     // });
// };

// exports.updatedevicescanktp = (req, res) => {
//   const { tokenfcm, idalat, refrestoken } = req.body;

//   console.log(idalat);
//   // const { refreshtoken,  } = req.user;

//   // return models.user_mobile_child
//   //   .update(
//   //     {
//   //       tokenfcm_igd: tokenfcm,
//   //       iot_dvc_code: idalat
//   //     },
//   //     {
//   //       where: {
//   //         user_mobile_token: refrestoken,
//   //       },
//   //     }
//   //   )
//   //   .then((pasien) => {
//   //     return success(req, res, pasien, "Data berhasil diupdate.");
//   //   })
//   //   .catch((err) => {
//   //     return error(req, res, {}, "Gagal update", 500, err);
//   //   });
  
//   const query = `
//   select * from "v_listpasien_rajal" 
//   left join v_pasien on v_pasien.ps_id = kun_id_pasien
//   left join igd_register ir on ir.id_rkun_igd = kun_id_rencana_kunjungan
//   where "rkun_inap" = false and "kun_id_layanan" = 25 and ("kun_rajal_batal" != true or "kun_rajal_batal" is null) 
//   and "kun_tervalidasi" is null and "kun_tgl" >= '2023-11-27' 
//   and "kun_rajal_pulang" is null and "kun_inap" = false and "kun_id_pasien" > 0
//   and kun_id_pasien = (select ps_id from pasien where ps_mrn = :psmrnn)
//   and ir.validasi is true and ir.igd_register_valid_perawat is false
//   order by "kun_perawat_validasi" desc, "rkun_nomor" asc
//                 `;

//               return models.sequelize
//                 .query(query, {
//                   type: QueryTypes.SELECT,
//                   replacements: {
//                     psmrnn: idalat

//                     // no_mr: no_mr,
//                     // png_id: png_id,
//                     // limit: limit,
//                     // offset: offset,
//                     // ps_nama: ps_nama ? `%${ps_nama}%` : "",
//                     // start_date: start_date || moment().format("YYYY-MM-DD"),
//                     // end_date: end_date || moment().format("YYYY-MM-DD"),
//                   },
//                 })
//                 .then((pasiennn) => {
                

//                         console.log(pasiennn);
                        
//                         const cont = pasiennn.length;
//                         console.log(cont);
                        
//                         if(cont == 0)
//                         {
//                           return models.v_pasien
//                           .findOne({
//                             where: {
//                               // iot_dvc_type: "inti_smart_reader",
//                               ps_mrn: idalat,
//                             },
//                           })
//                           .then((pasienn) => {
//                               console.log(pasienn);
//                               if(pasienn)
//                                 {
//                                   return models.rencana_kunjungan
//                                   .findOne({
//                                     attributes: [
//                                       "rkun_terkunci",
//                                       "rkun_id",
//                                       "rkun_id_pasien",
//                                       "rkun_tgl_visit",
//                                       "rkun_id_layanan",
//                                     ],
//                                     include: {
//                                       model: models.ref_layanan,
//                                       required: true,
//                                       as: "layanan",
//                                       attributes: ["ref_layanan_id", "ref_layanan_nama"],
//                                     },
//                                     order: [["rkun_id", "DESC"]],
//                                     where: {
//                                       rkun_id_pasien: pasienn.ps_id,
//                                       rkun_terkunci: false,
//                                       rkun_tgl_visit: {
//                                         [Op.gt]: ""
//                                       }
//                                     },
//                                   })
//                                   .then((payload) => {
//                                       console.log(payload);
//                                       if(payload)
//                                       {
//                                         return error(req, res, {}, "Ada Tagihan Yang Belum Lunas di Poli "+payload.layanan.ref_layanan_nama+", Silahkan Cek Ke Kasir", 400);
   
//                                       }else{
                                        
//                                         let nikk = pasienn.ps_nomor_identitas;

                                          
//                                           let namaLengkap = pasienn.ps_namalengkap;
//                                           console.log(namaLengkap);
//                                           console.log(nikk);

//                                           return axiosBPJS
//                                           .get(`/vclaim-rest/Peserta/nik/${nikk}/tglSEP/${moment().format("YYYY-MM-DD")}`, {
//                                             // kodebooking: `${rkun_id}`,${moment().format("YYYY-MM-DD")}
//                                             // taskid: 99,
//                                             // waktu: moment.utc().format("x"),
//                                           })
//                                           .then((databpjs) => {

//                                             let statusaktifbpjs = '';
//                                             let ketstatusaktifbpjs = '';
//                                             let nokartubpjs = '';
//                                             let psid = pasienn.ps_id;
//                                             let jenisKelamin = pasienn.ps_jeniskelamin;
//                                             console.log(databpjs);
//                                             console.log(databpjs['metaData']['code']);

//                                             if (databpjs['metaData']['code'] == '201') {

//                                             } else if (databpjs['metaData']['code'] == '200')  {

//                                               statusaktifbpjs = databpjs['response']['peserta']['statusPeserta']['kode'];
//                                               ketstatusaktifbpjs = databpjs['response']['peserta']['statusPeserta']['keterangan'];
//                                               nokartubpjs = databpjs['response']['peserta']['noKartu'];

//                                             }
//                                             // console.log(databpjs);


//                                             // console.log(statusaktifbpjs);
//                                             // console.log(ketstatusaktifbpjs);
//                                             // console.log(databpjs['response']['peserta']['jenisPeserta']);
//                                             const pasienonlineid = null;

//                                             const hhh = funcSendFcm({
//                                               title: "KTP READER",
//                                               body: "Membaca KTP anda",
//                                               to: tokenfcm,
//                                               data: {
//                                                 nikk,
//                                                 namaLengkap,
//                                                 psid,
//                                                 nokartubpjs,
//                                                 ketstatusaktifbpjs,
//                                                 jenisKelamin,
//                                                 statusaktifbpjs,
//                                                 pasienonlineid,
//                                                 //foto,
//                                                 // ttd,
//                                               },
//                                             });

//                                             return success(req, res, hhh, "Load Data Pasien By MR");
//                                           })
//                                           .catch((err) => {
//                                             let nikk = pasienn.ps_nomor_identitas;

                                          
//                                             let namaLengkap = pasienn.ps_namalengkap;
//                                             let statusaktifbpjs = '';
//                                             let ketstatusaktifbpjs = '';
//                                             let nokartubpjs = '';
//                                             let psid = pasienn.ps_id;
//                                             let jenisKelamin = '';
//                                             const pasienonlineid = null;

//                                             const hhh = funcSendFcm({
//                                               title: "KTP READER",
//                                               body: "Membaca KTP anda",
//                                               to: tokenfcm,
//                                               data: {
//                                                 nikk,
//                                                 namaLengkap,
//                                                 psid,
//                                                 nokartubpjs,
//                                                 ketstatusaktifbpjs,
//                                                 jenisKelamin,
//                                                 statusaktifbpjs,
//                                                 pasienonlineid,
//                                                 //foto,
//                                                 // ttd,
//                                               },
//                                             });

//                                             return success(req, res, hhh, "Load Data Pasien By MR");
//                                           });
//                                       }
//                                   })
//                                   .catch((err) => {
//                                     console.log(err);
//                                     return error(req, res, err, "Gagal mendaftar", 400);
//                                   });
                                  
//                                 }else{
//                                   return error(req, res, {}, "Pasien Tidak Ditemukan Atau Sudah Terdaftar", 500, true);
//                                 }
//                           })
//                           .catch((err) => {
//                             return error(req, res, {}, "Gagal memuat", 500, err);
//                           });
                          
//                         }else{
//                           return error(req, res, {}, "Pasien Tidak Ditemukan Atau Sudah Terdaftar", 500, true);
//                         }
          

          

//       })
//       .catch((err) => {
//         return error(req, res, {}, "Gagal memuat", 500, err);
//       });

// };

// exports.inserttriase = (req, res) => {

//   const { refrestoken, nik,
//     namalengkap,
//     psid,
//     nokartubpjs,
//     ketstatusaktifbpjs,
//     jeniskelamin,
//     statusaktifbpjs, airway, hentijantung,
//     frekuensinadi, frekuensinafas,
//     akral, kekuatannadi, suaranafas,
//     sianosis, hasiltriase, penempatantriase, keluhanutama,
//     jeniskasus, statusbatal, alasanbatal, namalengkap2, pasienonlineid, 
//     tanggallahir } = req.body;
//   const { peg_id, peg_nama } = req.user;

//   console.log(pasienonlineid);
//   let hasiltriasee = 1;
//   //console.log(req.user);
//   if(hasiltriase == "TRIASE HIJAU")
//     {
//       hasiltriasee = 1;
//     }else if(hasiltriase == "TRIASE KUNING")
//     {
//       hasiltriasee = 2;
//     }else if(hasiltriase == "TRIASE MERAH")
//     {
//       hasiltriasee = 3;
//     }else if(hasiltriase == "TRIASE HITAM")
//     {
//       hasiltriasee = 4;
//     }else{
//       hasiltriasee = 1;
//     }

//   if (penempatantriase == "Batal") {

//     return models.igd_triase
//       .create({
//         triase_tanggaldatang: moment().format("YYYY-MM-DD HH:mm:ss") || null,
//         triase_jeniskasus: (jeniskasus != "null") ? jeniskasus : 1 || null,
//         triase_namapasien: namalengkap ? namalengkap2 : '' || null,
//         triase_jeniskelamin: (jeniskelamin != "null") ? jeniskelamin : null,
//         triase_usia: (tanggallahir != "null") ? tanggallahir : null,
//         triase_keluhanutama: (keluhanutama != "null") ? keluhanutama : null,
//         // triase_keluhanlain: textNilaiYakin || null, 
//         triase_airway: (airway != "null") ? airway : null,
//         triase_freqnafas: (frekuensinafas != "null") ? frekuensinafas : null,
//         triase_suaranafas: (suaranafas != "null") ? suaranafas : null,
//         triase_hentijantung: (hentijantung != "null") ? hentijantung : 1 || null,
//         triase_akral: (akral != "null") ? akral : null,
//         triase_sianosis: (sianosis != "null") ? sianosis : 1 || null,
//         triase_freqnadi: (frekuensinadi != "null") ? frekuensinadi : null,
//         // triase_stsdisposisi: textNilaiYakin || null, 
//         triase_stsdisposisi: hasiltriasee || 1,
//         triase_disposisipasien: (penempatantriase != "null") ? penempatantriase : null,
//         triase_mulaitindakan: moment().format("YYYY-MM-DD h:mm:ss") || null,
//         triase_selesaitindakan: moment().format("YYYY-MM-DD h:mm:ss") || null,
//         // triase_inputwaktu: textNilaiYakin || null, 
//         triase_isbatal: true || null,
//         triase_isbatal_alasan: (alasanbatal != "null") ? alasanbatal : null,
//         triase_status_batal: (statusbatal != "null") ? statusbatal : null,
//         triase_kodeform: `TB-${(Math.floor(100000 + Math.random() * 900000)).toString()}` || null,
//         // triase_idkun, 
//         // triase_peg_hubung, 
//         // triase_date_hubung, 
//         triase_kuatnadi: (kekuatannadi != "null") ? kekuatannadi : null,
//         triase_peg_inputwaktu: peg_nama || null,
//         triase_pegid_input: peg_id || null,
//         // triase_status, 
//         // triase_emergency, 
//         // triase_regpsonline_id_reg, 
//         // triase_durasitindakan, 
//         //triase_psid: psid || null,
//         // triase_caradatang, 
//         // triase_konfirmspgdt, 
//         // triase_asalrujukan, 
//         // triase_asalrujukan_nomor
//       })
//       .then((pasien) => {
//         if (pasien) {

//           return models.user_mobile_child
//             .update(
//               {
//                 tokenfcm_igd: null,
//                 iot_dvc_code: null
//               },
//               {
//                 where: {
//                   user_mobile_token: refrestoken,
//                 },
//               }
//             )
//             .then((pasient) => {
//               return success(req, res, pasien, "Pasien Batal");
//             })
//             .catch((err) => {
//               return error(req, res, {}, "Gagal update", 500, err);
//             });
//         }
//         return error(req, res, {}, "Gagal mendaftar", 400);
//       })
//       .catch((err) => {
//         return error(req, res, {}, "Gagal mendaftar", 500, err);
//       });



//   } else {

    

//     if (namalengkap2 != "null") {

//       let jkk = 0;
//       if(jeniskelamin == "LAKI-LAKI")
//       {
//         jkk = 1;
//       }else{
//         jkk = 2;
//       }

//       return models.igd_triase
//         .create({
//           triase_tanggaldatang: moment().format("YYYY-MM-DD HH:mm:ss") || null,
//           triase_jeniskasus: (jeniskasus != "null") ? jeniskasus : 1 || null,
//           triase_namapasien: namalengkap2 || null,
//           triase_jeniskelamin: (jeniskelamin != "null") ? jeniskelamin : null,
//           triase_usia: (tanggallahir != "null") ? tanggallahir : null,
//           triase_keluhanutama: (keluhanutama != "null") ? keluhanutama : null,
//           // triase_keluhanlain: textNilaiYakin || null, 
//           triase_airway: (airway != "null") ? airway : null,
//           triase_freqnafas: (frekuensinafas != "null") ? frekuensinafas : null,
//           triase_suaranafas: (suaranafas != "null") ? suaranafas : null,
//           triase_hentijantung: (hentijantung != "null") ? hentijantung : 1 || null,
//           triase_akral: (akral != "null") ? akral : null,
//           triase_sianosis: (sianosis != "null") ? sianosis : 1 || null,
//           triase_freqnadi: (frekuensinadi != "null") ? frekuensinadi : null,
//           // triase_stsdisposisi: textNilaiYakin || null, 
//           triase_stsdisposisi: hasiltriasee || 1,
//           triase_disposisipasien: (penempatantriase != "null") ? penempatantriase : null,
//           triase_mulaitindakan: moment().format("YYYY-MM-DD h:mm:ss") || null,
//           triase_selesaitindakan: moment().format("YYYY-MM-DD h:mm:ss") || null,
//           // triase_inputwaktu: textNilaiYakin || null, 
//           // triase_isbatal: true || null,
//           // triase_isbatal_alasan: (alasanbatal != "null") ? alasanbatal : null,
//           // triase_status_batal: (statusbatal != "null") ? statusbatal : null,
//           triase_kodeform: `TR-${(Math.floor(100000 + Math.random() * 900000)).toString()}` || null,
//           // triase_idkun, 
//           // triase_peg_hubung, 
//           // triase_date_hubung, 
//           triase_kuatnadi: (kekuatannadi != "null") ? kekuatannadi : null,
          
//           // triase_tanggaldatang: moment().format("YYYY-MM-DD h:mm:ss") || null,
//           // triase_jeniskasus: (jeniskasus != "null") ? jeniskasus : 1 || null,
//           // triase_namapasien: namalengkap2 || null,
//           // triase_jeniskelamin: jeniskelamin || null,
//           // triase_usia: tanggallahir || null, 
//           // triase_keluhanutama: keluhanutama || null,
//           // // triase_keluhanlain: textNilaiYakin || null, 
//           // triase_airway: airway || null,
//           // triase_freqnafas: frekuensinafas || null,
//           // triase_suaranafas: suaranafas || null,
//           // triase_hentijantung: (hentijantung != "null") ? hentijantung : 1 || null,
//           // triase_akral: akral || null,
//           // triase_sianosis: (sianosis != "null") ? sianosis : 1 || null,
//           // triase_freqnadi: frekuensinadi || null,
//           // triase_stsdisposisi: hasiltriasee || 1, 
//           // triase_disposisipasien: penempatantriase || null,
//           // triase_mulaitindakan: moment().format("YYYY-MM-DD h:mm:ss") || null,
//           // triase_selesaitindakan: moment().format("YYYY-MM-DD h:mm:ss") || null,
//           // // triase_inputwaktu: textNilaiYakin || null, 
//           // // triase_isbatal: true || null, 
//           // // triase_isbatal_alasan: alasanbatal || null, 
//           // // triase_status_batal: statusbatal || null, 
//           // triase_kodeform: `TR-${(Math.floor(100000 + Math.random() * 900000)).toString()}` || null,
//           // triase_idkun, 
//           // triase_peg_hubung, 
//           // triase_date_hubung, 
//           triase_kuatnadi: kekuatannadi || null,
//           triase_peg_inputwaktu: peg_nama || null,
//           triase_pegid_input: peg_id || null,
//           // triase_status, 
//           // triase_emergency, 
//           // triase_regpsonline_id_reg, 
//           // triase_durasitindakan, 
//           // triase_psid: psid || null, 
//           // triase_caradatang, 
//           // triase_konfirmspgdt, 
//           // triase_asalrujukan, 
//           // triase_asalrujukan_nomor
//         })
//         .then((pasien) => {
//           if (pasien) {
//             //console.log(pasien);

//             return models.user_mobile_child
//               .update(
//                 {
//                   tokenfcm_igd: null,
//                   iot_dvc_code: null
//                 },
//                 {
//                   where: {
//                     user_mobile_token: refrestoken,
//                   },
//                 }
//               )
//               .then((pasient) => {
//                 console.log(pasien);
//                 return success(req, res, pasien, "Pasien Daftar Triase");
//               })
//               .catch((err) => {
//                 return error(req, res, {}, "Gagal update", 500, err);
//               });
//           }
//           return error(req, res, {}, "Gagal mendaftar", 400);
//         })
//         .catch((err) => {
//           return error(req, res, {}, "Gagal mendaftar", 500, err);
//         });

//     } else {

//       console.log(psid);

//       if (psid) {

//         // select insertrencanakunjungan (25 as idlayanan,'2023-10-13' as t_tanggal,1 as t_waktu_kunjung,1001 as t_idpasien,85892 t_pngid,176 t_pngidklausul,100800 t_iddokter)

//         // select insert_tindakan_rsud_2 (7290952 t_rkun_id,57045 t_ref_prod_id,1 t_qty)

//         // select insertrencanakunjungan (25,'2023-10-13',1,542912 ,85892,176,100800);
//         // select insert_tindakan_rsud_2 (7290952,57045,1);

        

//         return models.igd_triase
//           .create({
//             triase_tanggaldatang: moment().format("YYYY-MM-DD HH:mm:ss") || null,
//             triase_jeniskasus: (jeniskasus != "null") ? jeniskasus : 1 || null,
//             triase_namapasien: namalengkap || null,
//             triase_jeniskelamin: (jeniskelamin != "null") ? jeniskelamin : null,
//             triase_usia: (tanggallahir != "null") ? tanggallahir : null,
//             triase_keluhanutama: (keluhanutama != "null") ? keluhanutama : null,
//             // triase_keluhanlain: textNilaiYakin || null, 
//             triase_airway: (airway != "null") ? airway : null,
//             triase_freqnafas: (frekuensinafas != "null") ? frekuensinafas : null,
//             triase_suaranafas: (suaranafas != "null") ? suaranafas : null,
//             triase_hentijantung: (hentijantung != "null") ? hentijantung : 1 || null,
//             triase_akral: (akral != "null") ? akral : null,
//             triase_sianosis: (sianosis != "null") ? sianosis : 1 || null,
//             triase_freqnadi: (frekuensinadi != "null") ? frekuensinadi : null,
//             // triase_stsdisposisi: textNilaiYakin || null, 
//             triase_stsdisposisi: hasiltriasee || 1,
//             triase_disposisipasien: (penempatantriase != "null") ? penempatantriase : null,
//             triase_mulaitindakan: moment().format("YYYY-MM-DD h:mm:ss") || null,
//             triase_selesaitindakan: moment().format("YYYY-MM-DD h:mm:ss") || null,
//             // triase_inputwaktu: textNilaiYakin || null, 
//             // triase_isbatal: true || null,
//             // triase_isbatal_alasan: (alasanbatal != "null") ? alasanbatal : null,
//             // triase_status_batal: (statusbatal != "null") ? statusbatal : null,
//             triase_kodeform: `TI-${(Math.floor(100000 + Math.random() * 900000)).toString()}` || null,
//             // triase_idkun, 
//             // triase_peg_hubung, 
//             // triase_date_hubung, 
//             triase_kuatnadi: (kekuatannadi != "null") ? kekuatannadi : null,

//             // triase_tanggaldatang: moment().format("YYYY-MM-DD h:mm:ss") || null,
//             // triase_jeniskasus: (jeniskasus != "null") ? jeniskasus : 1 || null,
//             // triase_namapasien: namalengkap || null,
//             // triase_jeniskelamin: jeniskelamin || null,
//             // triase_usia: tanggallahir || null, 
//             // triase_keluhanutama: keluhanutama || null,
//             // // triase_keluhanlain: textNilaiYakin || null, 
//             // triase_airway: airway || null,
//             // triase_freqnafas: frekuensinafas || null,
//             // triase_suaranafas: suaranafas || null,
//             // triase_hentijantung: (hentijantung != "null") ? hentijantung : 1 || null,
//             // triase_akral: akral || null,
//             // triase_sianosis: (sianosis != "null") ? sianosis : 1 || null,
//             // triase_freqnadi: frekuensinadi || null,
//             // // triase_stsdisposisi: textNilaiYakin || null, 
//             // triase_stsdisposisi: hasiltriasee || 1,
//             // triase_disposisipasien: penempatantriase || null,
//             // triase_mulaitindakan: moment().format("YYYY-MM-DD h:mm:ss") || null,
//             // triase_selesaitindakan: moment().format("YYYY-MM-DD h:mm:ss") || null,
//             // // triase_inputwaktu: textNilaiYakin || null, 
//             // // triase_isbatal: true || null, 
//             // // triase_isbatal_alasan: alasanbatal || null, 
//             // // triase_status_batal: statusbatal || null, 
//             // triase_kodeform: `TI-${(Math.floor(100000 + Math.random() * 900000)).toString()}` || null,
//             // // triase_idkun, 
//             // // triase_peg_hubung, 
//             // // triase_date_hubung, 
//             // triase_kuatnadi: kekuatannadi || null,
//             triase_peg_inputwaktu: peg_nama || null,
//             triase_pegid_input: peg_id || null,
//             // triase_status, 
//             // triase_emergency, 
//             // triase_regpsonline_id_reg, 
//             // triase_durasitindakan, 
//             triase_psid: psid || null,
//             // triase_caradatang, 
//             // triase_konfirmspgdt, 
//             // triase_asalrujukan, 
//             // triase_asalrujukan_nomor
//           })
//           .then((pasien) => {
//             if (pasien) {
//               console.log(pasien.triase_id);
//               const triaseid = pasien.triase_id;

//               const query = `select insertrencanakunjungan (25,:tanggal,(select get_waktu_kunjungan(cast(to_char(now(), 'HH24MISS') as int))),:ps_id ,:pngid,:pngkalusul,:iddokter)`;

//               // select insert_tindakan_rsud_2 (7290952 t_rkun_id,57045 t_ref_prod_id,1 t_qty)

//               const qCekKunjungan = `select * from rencana_kunjungan where rkun_id_pasien = :p_psid and rkun_tgl_daftar = :p_tanggal and rkun_id_layanan = 25 limit 1`;

//               const qCount = `
//                   select insert_tindakan_rsud_2 (:rkunidk,57045,1);
//                 `;

//               const qKunjungan = `
//                   select a.*,c.ps_mrn,ps_namalengkap,ps_telpon,ps_jeniskelamin,b.ps_nomor_identitas,d.bill_id_rec from kunjungan a 
//                   left join asp_pasien b on b.ps_id = a.kun_id_pasien 
//                   left join pasien c on c.ps_id = a.kun_id_pasien
//                   left join billing d on d.bill_id_kun = a.kun_id and d.bill_id_rkun = a.kun_id_rencana_kunjungan
//                   where kun_id_rencana_kunjungan = :rkunid and kun_id_layanan = 25
//                 `;

//               const qOtobilling = `
//                 select oto_update_billing(57045,:rkun_png_noncash_id_klausul,:rkun_ido,false,:billidrec,'tindakan');
//                 `;

//               const insertregisterigd = `
//               select insertregisterigd(:rkunidd);
//               `;

//               return models.sequelize
//                 .query(query, {
//                   type: QueryTypes.SELECT,
//                   replacements: {
//                     tanggal: moment().format("YYYY-MM-DD"),
//                     ps_id: parseInt(psid),
//                     pngid: 85892,
//                     pngkalusul: 176,
//                     iddokter: peg_id,
//                     tanggal: moment().format("YYYY-MM-DD")

//                     // no_mr: no_mr,
//                     // png_id: png_id,
//                     // limit: limit,
//                     // offset: offset,
//                     // ps_nama: ps_nama ? `%${ps_nama}%` : "",
//                     // start_date: start_date || moment().format("YYYY-MM-DD"),
//                     // end_date: end_date || moment().format("YYYY-MM-DD"),
//                   },
//                 })
//                 .then((payload) => {

//                   if (payload) {

//                     return models.sequelize
//                       .query(qCekKunjungan, {
//                         type: QueryTypes.SELECT,
//                         replacements: {
//                           p_psid: parseInt(psid),
//                           p_tanggal: moment().format("YYYY-MM-DD")
//                         },
//                       })
//                       .then((count) => {
//                         console.log(count[0].rkun_id);
//                         if (count) {
//                           const rkunid = count[0].rkun_id;
//                           let rkun_png_noncash_id_klausull = count[0].rkun_png_noncash_id_klausul;
//                           return models.sequelize
//                             .query(qCount, {
//                               type: QueryTypes.SELECT,
//                               replacements: {
//                                 rkunidk: rkunid
//                               },
//                             })
//                             .then((kunjungann) => {

//                               if (kunjungann) {


//                                 return models.sequelize
//                                   .query(qKunjungan, {
//                                     type: QueryTypes.SELECT,
//                                     replacements: {
//                                       rkunid: rkunid
//                                     },
//                                   })
//                                   .then((kunjungann2) => {

//                                     console.log(kunjungann2);

//                                     if (kunjungann2) {

//                                       const kunid = kunjungann2[0].kun_id;
//                                       let namaapasien = kunjungann2[0].ps_namalengkap;
//                                       let nomrpasien = kunjungann2[0].ps_mrn;
//                                       let notelponpasien = kunjungann2[0].ps_telpon;
//                                       let jeniskelaminpasien = kunjungann2[0].ps_jeniskelamin;
//                                       let nikk = kunjungann2[0].ps_nomor_identitas;

//                                       if(notelponpasien == "-")
//                                       {
//                                         notelponpasien = "02154372874";
//                                       }
                                      
                                      
//                                       let billidrec = kunjungann2[0].bill_id_rec;//:rkun_png_noncash_id_klausul,:rkun_ido,0,:billidrec

//                                       console.log(nomrpasien);
//                                       console.log(kunid);

//                                       return models.sequelize
//                                         .query(qOtobilling, {
//                                           type: QueryTypes.SELECT,
//                                           replacements: {
//                                             rkun_ido: parseInt(rkunid),
//                                             rkun_png_noncash_id_klausul: parseInt(rkun_png_noncash_id_klausull),
//                                             billidrec: parseInt(billidrec)
//                                           },
//                                         })
//                                         .then((otobilling) => {

//                                           if (otobilling) {

//                                             return models.igd_triase
//                                               .update(
//                                                 {
//                                                   triase_idkun: kunid
//                                                 },
//                                                 {
//                                                   where: {
//                                                     triase_id: triaseid,
//                                                   },
//                                                 }
//                                               )
//                                               .then((pasient) => {
//                                                 // return success(req, res, pasient, "Pasien Daftar Triase");
//                                                 return axiosBPJS
//                                                   .get(`/vclaim-rest/Peserta/nik/${nikk}/tglSEP/${moment().format("YYYY-MM-DD")}`, {
//                                                     // kodebooking: `${rkun_id}`,${moment().format("YYYY-MM-DD")}
//                                                     // taskid: 99,
//                                                     // waktu: moment.utc().format("x"),
//                                                   })
//                                                   .then((databpjs) => {

//                                                     console.log(databpjs);
//                                                     //console.log(ketstatusaktifbpjs);

//                                                     if (databpjs) {

//                                                       let p_statusaktifbpjs = '';
//                                                       let p_ketstatusaktifbpjs = '';
//                                                       let p_nokartubpjs = '';
//                                                       let ketjenispeserta = '';
//                                                       let p_hakkelas = ''

//                                                       // let psid = null;


//                                                       if (databpjs['metaData']['code'] == '201') {

//                                                       } else {

//                                                         p_statusaktifbpjs = databpjs['response']['peserta']['statusPeserta']['kode'];
//                                                         p_ketstatusaktifbpjs = databpjs['response']['peserta']['statusPeserta']['keterangan'];
//                                                         p_nokartubpjs = databpjs['response']['peserta']['noKartu'];
//                                                         ketjenispeserta = databpjs['response']['peserta']['jenisPeserta']['keterangan'];
//                                                         p_hakkelas = databpjs['response']['peserta']['hakKelas']['keterangan'];

//                                                       }

//                                                       // console.log(databpjs['response']['peserta']['sex']);
//                                                       // console.log(databpjs['response']['peserta']['provUmum']);
//                                                       // console.log(databpjs['response']['peserta']['jenisPeserta']);
//                                                       // console.log(databpjs['response']['peserta']['hakKelas']['keterangan']);
//                                                       // console.log(databpjs['response']['peserta']['umur']);
//                                                       // console.log(databpjs['response']['peserta']['informasi']);
//                                                       // console.log(databpjs['response']['peserta']['cob']);
//                                                       // console.log(databpjs['response']['peserta']['mr']['noMR']);

//                                                       if (p_ketstatusaktifbpjs == "AKTIF") {

//                                                         return axiosBPJS
//                                                           .get(`/vclaim-rest/referensi/dokter/pelayanan/2/tglPelayanan/${moment().format("YYYY-MM-DD")}/Spesialis/UMU`, {

//                                                           })
//                                                           .then((referensidokterbpjs) => {

//                                                             let kodedokter = '';

//                                                             if (referensidokterbpjs) {
//                                                               kodedokter = referensidokterbpjs['response']['list'][0]['kode'];
//                                                             }

//                                                             // const form = new FormData()
//                                                             // form.append('name', "Dillion")
//                                                             var body = {
//                                                               request: {
//                                                                 t_sep: {
//                                                                   noKartu: p_nokartubpjs,
//                                                                   tglSep: moment().format("YYYY-MM-DD"),
//                                                                   ppkPelayanan: "0904R007",
//                                                                   jnsPelayanan: "2",
//                                                                   klsRawat: {
//                                                                     klsRawatHak: "3",
//                                                                     klsRawatNaik: "",
//                                                                     pembiayaan: "",
//                                                                     penanggungJawab: ""
//                                                                   },
//                                                                   noMR: nomrpasien,
//                                                                   rujukan: {
//                                                                     asalRujukan: "2",
//                                                                     tglRujukan: "",
//                                                                     noRujukan: "",
//                                                                     ppkRujukan: "0904R007"
//                                                                   },
//                                                                   catatan: "-",
//                                                                   diagAwal: "Z03.8",
//                                                                   poli: {
//                                                                     tujuan: "IGD",
//                                                                     eksekutif: "0"
//                                                                   },
//                                                                   cob: {
//                                                                     cob: "0"
//                                                                   },
//                                                                   katarak: {
//                                                                     katarak: "0"
//                                                                   },
//                                                                   jaminan: {
//                                                                     lakaLantas: "0",
//                                                                     noLP: "",
//                                                                     penjamin: {
//                                                                       tglKejadian: "",
//                                                                       keterangan: "",
//                                                                       suplesi: {
//                                                                         suplesi: "0",
//                                                                         noSepSuplesi: "",
//                                                                         lokasiLaka: {
//                                                                           kdPropinsi: "",
//                                                                           kdKabupaten: "",
//                                                                           kdKecamatan: ""
//                                                                         }
//                                                                       }
//                                                                     }
//                                                                   },
//                                                                   tujuanKunj: "0",
//                                                                   flagProcedure: "",
//                                                                   kdPenunjang: "",
//                                                                   assesmentPel: "",
//                                                                   skdp: {
//                                                                     noSurat: "",
//                                                                     kodeDPJP: ""
//                                                                   },
//                                                                   dpjpLayan: kodedokter,
//                                                                   noTelp: notelponpasien || "02154372874",
//                                                                   user: peg_nama
//                                                                 }
//                                                               }
//                                                             };

//                                                             console.log(body);
//                                                             // const formFile = new FormData();
//                                                             // formFile.append('request', buffer, { filename });


//                                                             return axiosBPJS
//                                                               .post(`/vclaim-rest/SEP/2.0/insert`, body, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
//                                                               .then((datasepbpjs) => {

//                                                                 console.log(datasepbpjs);

//                                                                 if (datasepbpjs) {
//                                                                   let kodd = datasepbpjs['metaData']['code'];
//                                                                   let mess = datasepbpjs['metaData']['message'];
//                                                                   let nosepp = datasepbpjs['response']['sep']['noSep'];

//                                                                   console.log(mess);

//                                                                   if (mess == "Sukses" || kodd == "200") {

//                                                                     if (nosepp == "000") {

//                                                                     } else {

//                                                                       return models.sep_history
//                                                                         .create({
//                                                                           tglsep: datasepbpjs['response']['sep']['tglSep'] || null,
//                                                                           ppkpelayanan: "0904R007" || null,
//                                                                           jnspelayanan: datasepbpjs['response']['sep']['jnsPelayanan'] || null,
//                                                                           klsrawat: p_hakkelas || null,
//                                                                           // triase_usia: textNilaiYakin || null, 
//                                                                           nomr: nomrpasien || null,
//                                                                           // triase_keluhanlain: textNilaiYakin || null, 
//                                                                           tglrujukan: datasepbpjs['response']['sep']['tglSep'] || null,
//                                                                           // norujukan: frekuensinafas || null,
//                                                                           // ppkrujukan: suaranafas || null,
//                                                                           catatan: datasepbpjs['response']['sep']['catatan'] || null,
//                                                                           diagawal: "Z03.8" || null,
//                                                                           // politujuan: sianosis || null,
//                                                                           // polieksekutif: frekuensinadi || null,
//                                                                           // triase_stsdisposisi: textNilaiYakin || null, 
//                                                                           cob: "0" || null,
//                                                                           lakalantas: "0",
//                                                                           penjamin: '-' || null,
//                                                                           // triase_inputwaktu: textNilaiYakin || null, 
//                                                                           // triase_isbatal: true || null, 
//                                                                           // triase_isbatal_alasan: alasanbatal || null, 
//                                                                           // triase_status_batal: statusbatal || null, 
//                                                                           notelp: notelponpasien || "02154372874",
//                                                                           // triase_idkun, 
//                                                                           // triase_peg_hubung, 
//                                                                           // triase_date_hubung, 
//                                                                           pegid: peg_id || null,
//                                                                           psid: psid || null,
//                                                                           nosep: nosepp || null,
//                                                                           nmdiag: "Observation for other suspected diseases and condi",
//                                                                           noka: p_nokartubpjs,
//                                                                           // hakkelas: ,
//                                                                           namapasien: namaapasien,
//                                                                           kdpoli: 'IGD',
//                                                                           sex: jeniskelaminpasien,
//                                                                           // jnspeserta: ,
//                                                                           // psiat: ,
//                                                                         })
//                                                                         .then((sephistory) => {
//                                                                           console.log(sephistory);
//                                                                           if (sephistory) {
//                                                                             //console.log(pasien);

//                                                                             return models.sequelize
//                                                                             .query(insertregisterigd, {
//                                                                               type: QueryTypes.SELECT,
//                                                                               replacements: {
//                                                                                 rkunidd: parseInt(rkunid),
//                                                                               },
//                                                                             })
//                                                                             .then((otobilling) => {
//                                                                                 return success(req, res, pasien, "Pasien Daftar Triase");
//                                                                               })
//                                                                               .catch((err) => {
//                                                                                 return error(req, res, {}, "Gagal update", 500, err);
//                                                                               });
//                                                                           }
//                                                                           return error(req, res, {}, "Gagal mendaftar", 400);
//                                                                         })
//                                                                         .catch((err) => {
//                                                                           return error(req, res, {}, "Gagal mendaftar", 500, err);
//                                                                         });

//                                                                     }

//                                                                   }
//                                                                 }else{
//                                                                   return models.sequelize
//                                                                             .query(insertregisterigd, {
//                                                                               type: QueryTypes.SELECT,
//                                                                               replacements: {
//                                                                                 rkunidd: parseInt(rkunid),
//                                                                               },
//                                                                             })
//                                                                             .then((otobilling) => {
//                                                                                 return success(req, res, pasien, "Pasien Daftar Triase");
//                                                                               })
//                                                                               .catch((err) => {
//                                                                                 return error(req, res, {}, "Gagal update", 500, err);
//                                                                               });
//                                                                 }

//                                                                 //console.log(datasepbpjs);

//                                                               })
//                                                               .catch((err) => {
//                                                                 //return console.log(err);
//                                                                 return models.sequelize
//                                                                             .query(insertregisterigd, {
//                                                                               type: QueryTypes.SELECT,
//                                                                               replacements: {
//                                                                                 rkunidd: parseInt(rkunid),
//                                                                               },
//                                                                             })
//                                                                             .then((otobilling) => {
//                                                                                 return success(req, res, pasien, "Pasien Daftar Triase");
//                                                                               })
//                                                                               .catch((err) => {
//                                                                                 return error(req, res, {}, "Gagal update", 500, err);
//                                                                               });
//                                                               });


//                                                             //console.log(referensidokterbpjs['response']['list'][0]['kode']);

//                                                           })
//                                                           .catch((err) => {
//                                                             return models.sequelize
//                                                                             .query(insertregisterigd, {
//                                                                               type: QueryTypes.SELECT,
//                                                                               replacements: {
//                                                                                 rkunidd: parseInt(rkunid),
//                                                                               },
//                                                                             })
//                                                                             .then((otobilling) => {
//                                                                                 return success(req, res, pasien, "Pasien Daftar Triase");
//                                                                               })
//                                                                               .catch((err) => {
//                                                                                 return error(req, res, {}, "Gagal update", 500, err);
//                                                                               });
//                                                           });


//                                                       } else {

//                                                         return models.sequelize
//                                                                             .query(insertregisterigd, {
//                                                                               type: QueryTypes.SELECT,
//                                                                               replacements: {
//                                                                                 rkunidd: parseInt(rkunid),
//                                                                               },
//                                                                             })
//                                                                             .then((otobilling) => {
//                                                             return success(req, res, pasien, "Pasien Daftar Triase");
//                                                           })
//                                                           .catch((err) => {
//                                                             return error(req, res, {}, "Gagal update", 500, err);
//                                                           });

//                                                       }


//                                                     }else{
//                                                       return models.sequelize
//                                                                             .query(insertregisterigd, {
//                                                                               type: QueryTypes.SELECT,
//                                                                               replacements: {
//                                                                                 rkunidd: parseInt(rkunid),
//                                                                               },
//                                                                             })
//                                                                             .then((otobilling) => {
//                                                                                 return success(req, res, pasien, "Pasien Daftar Triase");
//                                                                               })
//                                                                               .catch((err) => {
//                                                                                 return error(req, res, {}, "Gagal update", 500, err);
//                                                                               });
//                                                     }



//                                                   })
//                                                   .catch((err) => {
//                                                     return models.sequelize
//                                                                             .query(insertregisterigd, {
//                                                                               type: QueryTypes.SELECT,
//                                                                               replacements: {
//                                                                                 rkunidd: parseInt(rkunid),
//                                                                               },
//                                                                             })
//                                                                             .then((otobilling) => {
//                                                                                 return success(req, res, pasien, "Pasien Daftar Triase");
//                                                                               })
//                                                                               .catch((err) => {
//                                                                                 return error(req, res, {}, "Gagal update", 500, err);
//                                                                               });
//                                                   });

//                                               })
//                                               .catch((err) => {
//                                                 return error(req, res, {}, "Gagal update", 500, err);
//                                               });

//                                           }
//                                           return error(req, res, {}, "Gagal update", 500, false);

//                                         })
//                                         .catch((err) => {
//                                           return error(req, res, {}, "Gagal update", 500, err);
//                                         });




//                                     }
//                                     return error(req, res, {}, "Gagal memuat", 500, err);
//                                   })
//                                   .catch((err) => {
//                                     return error(req, res, {}, "Gagal memuat", 500, err);
//                                   });

//                               }
//                               return error(req, res, {}, "Gagal memuat", 500, err);
//                             })
//                             .catch((err) => {
//                               return error(req, res, {}, "Gagal memuat", 500, err);
//                             });


//                         }
//                         return error(req, res, {}, "Gagal memuat", 500, err);
//                       })
//                       .catch((err) => {
//                         return error(req, res, {}, "Gagal memuat", 500, err);
//                       });


//                   }

//                 })
//                 .catch((err) => {
//                   return error(req, res, {}, "Gagal memuat", 500, err);
//                 });




//             }
//             return error(req, res, {}, "Gagal mendaftar", 400);
//           })
//           .catch((err) => {
//             return error(req, res, {}, "Gagal mendaftar", 500, err);
//           });



//       } else {

//         if (pasienonlineid) {
//           return models.pasienonline
//             .update(
//               {
//                 regpsonline_prosespsid: 1,
//               },
//               {
//                 where: {
//                   regpsonline_id_reg: pasienonlineid,
//                 },
//               }
//             )
//             .then((pasient) => {

//               console.log(pasient);

//               return models.pasienonline
//                 .findOne({
//                   where: {
//                     regpsonline_id_reg: pasienonlineid,
//                   },
//                   order: [["regpsonline_id_reg", "DESC"]],
//                 })
//                 .then((pendaftaran) => {
//                   const p_psid = pendaftaran.regpsonline_id_pasien_ps_id;

//                   console.log(p_psid);

//                   if (p_psid) {

//                     return models.igd_triase
//                       .create({
//                         triase_tanggaldatang: moment().format("YYYY-MM-DD HH:mm:ss") || null,
//                         triase_jeniskasus: (jeniskasus != "null") ? jeniskasus : 1 || null,
//                         triase_namapasien: namalengkap || null,
//                         triase_jeniskelamin: (jeniskelamin != "null") ? jeniskelamin : null,
//                         triase_usia: (tanggallahir != "null") ? tanggallahir : null,
//                         triase_keluhanutama: (keluhanutama != "null") ? keluhanutama : null,
//                         // triase_keluhanlain: textNilaiYakin || null, 
//                         triase_airway: (airway != "null") ? airway : null,
//                         triase_freqnafas: (frekuensinafas != "null") ? frekuensinafas : null,
//                         triase_suaranafas: (suaranafas != "null") ? suaranafas : null,
//                         triase_hentijantung: (hentijantung != "null") ? hentijantung : 1 || null,
//                         triase_akral: (akral != "null") ? akral : null,
//                         triase_sianosis: (sianosis != "null") ? sianosis : 1 || null,
//                         triase_freqnadi: (frekuensinadi != "null") ? frekuensinadi : null,
//                         // triase_stsdisposisi: textNilaiYakin || null, 
//                         triase_stsdisposisi: hasiltriasee || 1,
//                         triase_disposisipasien: (penempatantriase != "null") ? penempatantriase : null,
//                         triase_mulaitindakan: moment().format("YYYY-MM-DD h:mm:ss") || null,
//                         triase_selesaitindakan: moment().format("YYYY-MM-DD h:mm:ss") || null,
//                         // triase_inputwaktu: textNilaiYakin || null, 
//                         // triase_isbatal: true || null,
//                         // triase_isbatal_alasan: (alasanbatal != "null") ? alasanbatal : null,
//                         // triase_status_batal: (statusbatal != "null") ? statusbatal : null,
//                         triase_kodeform: `TI-${(Math.floor(100000 + Math.random() * 900000)).toString()}` || null,
//                         // triase_idkun, 
//                         // triase_peg_hubung, 
//                         // triase_date_hubung, 
//                         triase_kuatnadi: (kekuatannadi != "null") ? kekuatannadi : null,


//                         // triase_tanggaldatang: moment().format("YYYY-MM-DD h:mm:ss") || null,
//                         // triase_jeniskasus: (jeniskasus != "null") ? jeniskasus : 1 || null,
//                         // triase_namapasien: namalengkap || null,
//                         // triase_jeniskelamin: jeniskelamin || null,
//                         // triase_usia: tanggallahir || null, 
//                         // triase_keluhanutama: keluhanutama || null,
//                         // // triase_keluhanlain: textNilaiYakin || null, 
//                         // triase_airway: airway || null,
//                         // triase_freqnafas: frekuensinafas || null,
//                         // triase_suaranafas: suaranafas || null,
//                         // triase_hentijantung: (hentijantung != "null") ? hentijantung : 1 || null,
//                         // triase_akral: akral || null,
//                         // triase_sianosis: (sianosis != "null") ? sianosis : 1 || null,
//                         // triase_freqnadi: frekuensinadi || null,
//                         // // triase_stsdisposisi: textNilaiYakin || null,
//                         // triase_stsdisposisi: hasiltriasee || 1, 
//                         // triase_disposisipasien: penempatantriase || null,
//                         // triase_mulaitindakan: moment().format("YYYY-MM-DD h:mm:ss") || null,
//                         // triase_selesaitindakan: moment().format("YYYY-MM-DD h:mm:ss") || null,
//                         // // triase_inputwaktu: textNilaiYakin || null, 
//                         // // triase_isbatal: true || null, 
//                         // // triase_isbatal_alasan: alasanbatal || null, 
//                         // // triase_status_batal: statusbatal || null, 
//                         // triase_kodeform: `TI-${(Math.floor(100000 + Math.random() * 900000)).toString()}` || null,
//                         // // triase_idkun, 
//                         // // triase_peg_hubung, 
//                         // // triase_date_hubung, 
//                         // triase_kuatnadi: kekuatannadi || null,
//                         triase_peg_inputwaktu: peg_nama || null,
//                         triase_pegid_input: peg_id || null,
//                         // triase_status, 
//                         // triase_emergency, 
//                         // triase_regpsonline_id_reg, 
//                         // triase_durasitindakan, 
//                         triase_psid: p_psid || null,
//                         // triase_caradatang, 
//                         // triase_konfirmspgdt, 
//                         // triase_asalrujukan, 
//                         // triase_asalrujukan_nomor
//                       })
//                       .then((pasien) => {
//                         if (pasien) {
//                           console.log(pasien.triase_id);
//                           const triaseid = pasien.triase_id;

//                           const query = `select insertrencanakunjungan (25,:tanggal,(select get_waktu_kunjungan(cast(to_char(now(), 'HH24MISS') as int))),:ps_id ,:pngid,:pngkalusul,:iddokter)`;

//                           // select insert_tindakan_rsud_2 (7290952 t_rkun_id,57045 t_ref_prod_id,1 t_qty)

//                           const qCekKunjungan = `select * from rencana_kunjungan where rkun_id_pasien = :p_psid and rkun_tgl_daftar = :p_tanggal and rkun_id_layanan = 25 limit 1`;

//                           const qCount = `
//                             select insert_tindakan_rsud_2 (:rkunidk,57045,1);
//                           `;

//                           const qKunjungan = `
//                             select a.*,c.ps_mrn,ps_namalengkap,b.ps_nomor_identitas,d.bill_id_rec from kunjungan a 
//                             left join asp_pasien b on b.ps_id = a.kun_id_pasien 
//                             left join pasien c on c.ps_id = a.kun_id_pasien
//                             left join billing d on d.bill_id_kun = a.kun_id and d.bill_id_rkun = a.kun_id_rencana_kunjungan
//                             where kun_id_rencana_kunjungan = :rkunid and kun_id_layanan = 25
//                           `;

//                           const qOtobilling = `
//                             select oto_update_billing(57045,:rkun_png_noncash_id_klausul,:rkun_ido,false,:billidrec,'tindakan');
//                           `;

//                           return models.sequelize
//                             .query(query, {
//                               type: QueryTypes.SELECT,
//                               replacements: {
//                                 tanggal: moment().format("YYYY-MM-DD"),
//                                 ps_id: parseInt(p_psid),
//                                 pngid: 85892,
//                                 pngkalusul: 176,
//                                 iddokter: peg_id

//                                 // no_mr: no_mr,
//                                 // png_id: png_id,
//                                 // limit: limit,
//                                 // offset: offset,
//                                 // ps_nama: ps_nama ? `%${ps_nama}%` : "",
//                                 // start_date: start_date || moment().format("YYYY-MM-DD"),
//                                 // end_date: end_date || moment().format("YYYY-MM-DD"),
//                               },
//                             })
//                             .then((payload) => {

//                               if (payload) {

//                                 return models.sequelize
//                                   .query(qCekKunjungan, {
//                                     type: QueryTypes.SELECT,
//                                     replacements: {
//                                       p_psid: parseInt(p_psid),
//                                       p_tanggal: moment().format("YYYY-MM-DD")
//                                     },
//                                   })
//                                   .then((count) => {
//                                     console.log(count[0].rkun_id);
//                                     if (count) {
//                                       const rkunid = count[0].rkun_id;
//                                       let rkun_png_noncash_id_klausull = count[0].rkun_png_noncash_id_klausul;
//                                       return models.sequelize
//                                         .query(qCount, {
//                                           type: QueryTypes.SELECT,
//                                           replacements: {
//                                             rkunidk: rkunid
//                                           },
//                                         })
//                                         .then((kunjungann) => {

//                                           if (kunjungann)


//                                             return models.sequelize
//                                               .query(qKunjungan, {
//                                                 type: QueryTypes.SELECT,
//                                                 replacements: {
//                                                   rkunid: rkunid
//                                                 },
//                                               })
//                                               .then((kunjungann2) => {

//                                                 console.log(kunjungann2);

//                                                 if (kunjungann2) {

//                                                   const kunid = kunjungann2[0].kun_id;
//                                                   let namaapasien = kunjungann2[0].ps_namalengkap;
//                                                   let nomrpasien = kunjungann2[0].ps_mrn;
//                                                   let notelponpasien = kunjungann2[0].ps_telpon;
//                                                   let jeniskelaminpasien = kunjungann2[0].ps_jeniskelamin;
//                                                   let nikk = kunjungann2[0].ps_nomor_identitas;
                                                  
//                                                   let billidrec = kunjungann2[0].bill_id_rec;

//                                                   if(notelponpasien == "-")
//                                                   {
//                                                     notelponpasien = "02154372874";
//                                                   }

//                                                   console.log(nomrpasien);
//                                                   console.log(kunid);

//                                                   return models.sequelize
//                                                     .query(qOtobilling, {
//                                                       type: QueryTypes.SELECT,
//                                                       replacements: {
//                                                         rkun_ido: parseInt(rkunid),
//                                                         rkun_png_noncash_id_klausul: parseInt(rkun_png_noncash_id_klausull),
//                                                         billidrec: parseInt(billidrec)
//                                                       },
//                                                     })
//                                                     .then((otobilling) => {

//                                                       if (otobilling) {

//                                                         return models.igd_triase
//                                                           .update(
//                                                             {
//                                                               triase_idkun: kunid
//                                                             },
//                                                             {
//                                                               where: {
//                                                                 triase_id: triaseid,
//                                                               },
//                                                             }
//                                                           )
//                                                           .then((pasient) => {
//                                                             // return success(req, res, pasient, "Pasien Daftar Triase");
//                                                             return axiosBPJS
//                                                               .get(`/vclaim-rest/Peserta/nik/${nikk}/tglSEP/${moment().format("YYYY-MM-DD")}`, {
//                                                                 // kodebooking: `${rkun_id}`,${moment().format("YYYY-MM-DD")}
//                                                                 // taskid: 99,
//                                                                 // waktu: moment.utc().format("x"),
//                                                               })
//                                                               .then((databpjs) => {

//                                                                 console.log(databpjs);
//                                                                 //console.log(ketstatusaktifbpjs);

//                                                                 if (databpjs) {

//                                                                   let p_statusaktifbpjs = '';
//                                                                   let p_ketstatusaktifbpjs = '';
//                                                                   let p_nokartubpjs = '';
//                                                                   let ketjenispeserta = '';
//                                                                   let p_hakkelas = ''

//                                                                   // let psid = null;


//                                                                   if (databpjs['metaData']['code'] == '201') {

//                                                                   } else {

//                                                                     p_statusaktifbpjs = databpjs['response']['peserta']['statusPeserta']['kode'];
//                                                                     p_ketstatusaktifbpjs = databpjs['response']['peserta']['statusPeserta']['keterangan'];
//                                                                     p_nokartubpjs = databpjs['response']['peserta']['noKartu'];
//                                                                     ketjenispeserta = databpjs['response']['peserta']['jenisPeserta']['keterangan'];
//                                                                     p_hakkelas = databpjs['response']['peserta']['hakKelas']['keterangan'];

//                                                                   }

//                                                                   // console.log(databpjs['response']['peserta']['sex']);
//                                                                   // console.log(databpjs['response']['peserta']['provUmum']);
//                                                                   // console.log(databpjs['response']['peserta']['jenisPeserta']);
//                                                                   // console.log(databpjs['response']['peserta']['hakKelas']['keterangan']);
//                                                                   // console.log(databpjs['response']['peserta']['umur']);
//                                                                   // console.log(databpjs['response']['peserta']['informasi']);
//                                                                   // console.log(databpjs['response']['peserta']['cob']);
//                                                                   // console.log(databpjs['response']['peserta']['mr']['noMR']);

//                                                                   if (p_ketstatusaktifbpjs == "AKTIF") {

//                                                                     return axiosBPJS
//                                                                       .get(`/vclaim-rest/referensi/dokter/pelayanan/2/tglPelayanan/${moment().format("YYYY-MM-DD")}/Spesialis/UMU`, {

//                                                                       })
//                                                                       .then((referensidokterbpjs) => {

//                                                                         let kodedokter = '';

//                                                                         if (referensidokterbpjs) {
//                                                                           kodedokter = referensidokterbpjs['response']['list'][0]['kode'];
//                                                                         }

//                                                                         // const form = new FormData()
//                                                                         // form.append('name', "Dillion")
//                                                                         var body = {
//                                                                           request: {
//                                                                             t_sep: {
//                                                                               noKartu: p_nokartubpjs,
//                                                                               tglSep: moment().format("YYYY-MM-DD"),
//                                                                               ppkPelayanan: "0904R007",
//                                                                               jnsPelayanan: "2",
//                                                                               klsRawat: {
//                                                                                 klsRawatHak: "3",
//                                                                                 klsRawatNaik: "",
//                                                                                 pembiayaan: "",
//                                                                                 penanggungJawab: ""
//                                                                               },
//                                                                               noMR: nomrpasien,
//                                                                               rujukan: {
//                                                                                 asalRujukan: "2",
//                                                                                 tglRujukan: "",
//                                                                                 noRujukan: "",
//                                                                                 ppkRujukan: "0904R007"
//                                                                               },
//                                                                               catatan: "-",
//                                                                               diagAwal: "Z03.8",
//                                                                               poli: {
//                                                                                 tujuan: "IGD",
//                                                                                 eksekutif: "0"
//                                                                               },
//                                                                               cob: {
//                                                                                 cob: "0"
//                                                                               },
//                                                                               katarak: {
//                                                                                 katarak: "0"
//                                                                               },
//                                                                               jaminan: {
//                                                                                 lakaLantas: "0",
//                                                                                 noLP: "",
//                                                                                 penjamin: {
//                                                                                   tglKejadian: "",
//                                                                                   keterangan: "",
//                                                                                   suplesi: {
//                                                                                     suplesi: "0",
//                                                                                     noSepSuplesi: "",
//                                                                                     lokasiLaka: {
//                                                                                       kdPropinsi: "",
//                                                                                       kdKabupaten: "",
//                                                                                       kdKecamatan: ""
//                                                                                     }
//                                                                                   }
//                                                                                 }
//                                                                               },
//                                                                               tujuanKunj: "0",
//                                                                               flagProcedure: "",
//                                                                               kdPenunjang: "",
//                                                                               assesmentPel: "",
//                                                                               skdp: {
//                                                                                 noSurat: "",
//                                                                                 kodeDPJP: ""
//                                                                               },
//                                                                               dpjpLayan: kodedokter,
//                                                                               noTelp: notelponpasien || "02154372874",
//                                                                               user: peg_nama
//                                                                             }
//                                                                           }
//                                                                         };

//                                                                         console.log(body);
//                                                                         // const formFile = new FormData();
//                                                                         // formFile.append('request', buffer, { filename });


//                                                                         return axiosBPJS
//                                                                           .post(`/vclaim-rest/SEP/2.0/insert`, body, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
//                                                                           .then((datasepbpjs) => {

//                                                                             console.log(datasepbpjs);

//                                                                             if (datasepbpjs) {
//                                                                               let kodd = datasepbpjs['metaData']['code'];
//                                                                               let mess = datasepbpjs['metaData']['message'];
//                                                                               let nosepp = datasepbpjs['response']['sep']['noSep'];

//                                                                               if (mess == "Sukses" || kodd == "200") {

//                                                                                 if (nosepp == "000") {

//                                                                                 } else {

//                                                                                   return models.sep_history
//                                                                                     .create({
//                                                                                       tglsep: datasepbpjs['response']['sep']['tglSep'] || null,
//                                                                                       ppkpelayanan: "0904R007" || null,
//                                                                                       jnspelayanan: datasepbpjs['response']['sep']['jnsPelayanan'] || null,
//                                                                                       klsrawat: p_hakkelas || null,
//                                                                                       // triase_usia: textNilaiYakin || null, 
//                                                                                       nomr: nomrpasien || null,
//                                                                                       // triase_keluhanlain: textNilaiYakin || null, 
//                                                                                       tglrujukan: datasepbpjs['response']['sep']['tglSep'] || null,
//                                                                                       // norujukan: frekuensinafas || null,
//                                                                                       // ppkrujukan: suaranafas || null,
//                                                                                       catatan: datasepbpjs['response']['sep']['catatan'] || null,
//                                                                                       diagawal: "Z03.8" || null,
//                                                                                       // politujuan: sianosis || null,
//                                                                                       // polieksekutif: frekuensinadi || null,
//                                                                                       // triase_stsdisposisi: textNilaiYakin || null, 
//                                                                                       cob: "0" || null,
//                                                                                       lakalantas: "0",
//                                                                                       penjamin: '-' || null,
//                                                                                       // triase_inputwaktu: textNilaiYakin || null, 
//                                                                                       // triase_isbatal: true || null, 
//                                                                                       // triase_isbatal_alasan: alasanbatal || null, 
//                                                                                       // triase_status_batal: statusbatal || null, 
//                                                                                       notelp: notelponpasien || "02154372874",
//                                                                                       // triase_idkun, 
//                                                                                       // triase_peg_hubung, 
//                                                                                       // triase_date_hubung, 
//                                                                                       pegid: peg_id || null,
//                                                                                       psid: psid || null,
//                                                                                       nosep: nosepp || null,
//                                                                                       nmdiag: "Observation for other suspected diseases and condi",
//                                                                                       noka: p_nokartubpjs,
//                                                                                       // hakkelas: ,
//                                                                                       namapasien: namaapasien,
//                                                                                       kdpoli: 'IGD',
//                                                                                       sex: jeniskelaminpasien,
//                                                                                       jnspeserta: ketjenispeserta || null,
//                                                                                       // psiat: ,
//                                                                                     })
//                                                                                     .then((sephistory) => {
//                                                                                       console.log(sephistory);
//                                                                                       if (sephistory) {
//                                                                                         //console.log(pasien);

//                                                                                         return models.user_mobile_child
//                                                                                           .update(
//                                                                                             {
//                                                                                               tokenfcm_igd: null,
//                                                                                               iot_dvc_code: null
//                                                                                             },
//                                                                                             {
//                                                                                               where: {
//                                                                                                 user_mobile_token: refrestoken,
//                                                                                               },
//                                                                                             }
//                                                                                           )
//                                                                                           .then((pasient) => {
//                                                                                             return success(req, res, pasient, "Pasien Daftar Triase");
//                                                                                           })
//                                                                                           .catch((err) => {
//                                                                                             return error(req, res, {}, "Gagal update", 500, err);
//                                                                                           });
//                                                                                       }
//                                                                                       return error(req, res, {}, "Gagal mendaftar", 400);
//                                                                                     })
//                                                                                     .catch((err) => {
//                                                                                       return error(req, res, {}, "Gagal mendaftar", 500, err);
//                                                                                     });

//                                                                                 }

//                                                                               }
//                                                                             } else {
//                                                                               return models.user_mobile_child
//                                                                                 .update(
//                                                                                   {
//                                                                                     tokenfcm_igd: null,
//                                                                                     iot_dvc_code: null
//                                                                                   },
//                                                                                   {
//                                                                                     where: {
//                                                                                       user_mobile_token: refrestoken,
//                                                                                     },
//                                                                                   }
//                                                                                 )
//                                                                                 .then((pasient) => {
//                                                                                   return success(req, res, pasien, "Pasien Daftar Triase");
//                                                                                 })
//                                                                                 .catch((err) => {
//                                                                                   return error(req, res, {}, "Gagal update", 500, err);
//                                                                                 });

//                                                                             }

//                                                                             //console.log(datasepbpjs);

//                                                                           })
//                                                                           .catch((err) => {
//                                                                             return success(req, res, pasien, "Pasien Daftar Triase");
//                                                                           });


//                                                                         //console.log(referensidokterbpjs['response']['list'][0]['kode']);

//                                                                       })
//                                                                       .catch((err) => {
//                                                                         return success(req, res, pasien, "Pasien Daftar Triase");
//                                                                       });


//                                                                   } else {

//                                                                     return models.user_mobile_child
//                                                                       .update(
//                                                                         {
//                                                                           tokenfcm_igd: null,
//                                                                           iot_dvc_code: null
//                                                                         },
//                                                                         {
//                                                                           where: {
//                                                                             user_mobile_token: refrestoken,
//                                                                           },
//                                                                         }
//                                                                       )
//                                                                       .then((pasient) => {
//                                                                         return success(req, res, pasien, "Pasien Daftar Triase");
//                                                                       })
//                                                                       .catch((err) => {
//                                                                         return error(req, res, {}, "Gagal update", 500, err);
//                                                                       });

//                                                                   }


//                                                                 }



//                                                               })
//                                                               .catch((err) => {
//                                                                 return success(req, res, pasien, "Pasien Daftar Triase");
//                                                               });

//                                                           })
//                                                           .catch((err) => {
//                                                             return error(req, res, {}, "Gagal update", 500, err);
//                                                           });

//                                                       }
//                                                       return error(req, res, {}, "Gagal update", 500, false);

//                                                     })
//                                                     .catch((err) => {
//                                                       return error(req, res, {}, "Gagal update", 500, err);
//                                                     });



//                                                 }
//                                                 return error(req, res, {}, "Gagal memuat", 500, err);
//                                               })
//                                               .catch((err) => {
//                                                 return error(req, res, {}, "Gagal memuat", 500, err);
//                                               });

//                                         })
//                                         .catch((err) => {
//                                           return error(req, res, {}, "Gagal memuat", 500, err);
//                                         });


//                                     }
//                                     return error(req, res, {}, "Gagal memuat", 500, err);
//                                   })
//                                   .catch((err) => {
//                                     return error(req, res, {}, "Gagal memuat", 500, err);
//                                   });


//                               }

//                             })
//                             .catch((err) => {
//                               return error(req, res, {}, "Gagal memuat", 500, err);
//                             });




//                         }
//                         return error(req, res, {}, "Gagal mendaftar", 400);
//                       })
//                       .catch((err) => {
//                         return error(req, res, {}, "Gagal mendaftar", 500, err);
//                       });

//                   }

//                 })
//                 .catch((err) => {
//                   return error(req, res, {}, "Gagal Cari", 500, err);
//                 });
//             })
//             .catch((err) => {
//               return error(req, res, {}, "Gagal update", 500, err);
//             });

//         } else {
//           return error(req, res, {}, "Gagal mendaftar", 500, false);
//         }



//       }




//     }



//   }

// }
