const models = require("../../modelsmengajar");
const { QueryTypes,Op } = require("sequelize");
const { error, success } = require("../../helpers/utility/response");
const moment = require("moment");
// const { sequelize } = require("../../../models");
// const { default: axios } = require("axios");
// const { pagination } = require("../../../helpers/utility/common");
// const { funcSendFcm } = require("../Firebase/cloudMessagingController");
// const { globalLogger } = require("../../../helpers/utility/logger");
const fs = require("fs");

exports.loadDashboard = (req, res) => {

  let { user_id } = req.body;

  const query = `
  select nama,jml1,jml2 + 1 as jml2, jml1 - jml2 as iscomplete, jml3 from (
    select 
    nama,count(nama) as jml1,
    (
    select 
    case when count(fk_header_id) is null then 0 else
    count(fk_header_id) end as dd
    from belajar_trx_pembelajaran btp
    left join belajar_header bhh on bhh.lineid = btp.fk_header_id
    where btp.fk_user_id = :userid and bhh.nama = bh.nama
    ) as jml2,
    ( select top(1) bhh.nourut from belajar_header bhh where bhh.nama = bh.nama
    order by nourut desc ) as jml3
    from belajar_header bh 
    group by nama
    ) as data
                `;

              return models.sequelize
                .query(query, {
                  type: QueryTypes.SELECT,
                  replacements: {
                    userid: user_id

                    // no_mr: no_mr,
                    // png_id: png_id,
                    // limit: limit,
                    // offset: offset,
                    // ps_nama: ps_nama ? `%${ps_nama}%` : "",
                    // start_date: start_date || moment().format("YYYY-MM-DD"),
                    // end_date: end_date || moment().format("YYYY-MM-DD"),
                  },
                })
                .then((pasiennn) => {

                  return success(req, res, pasiennn, "Load Data ");

                })
                .catch((err) => {
                  return error(req, res, {}, "Gagal memuat", 500, err);
                });

}

exports.loadgambarbelajar = (req, res) => {

  let { namamenu,nourut,user_id } = req.body;

  console.log(nourut);
  let query = ``;

  if(namamenu == "Kontruksi Bersama" && (nourut == 2 || nourut == 3))
  {

    query = `
    select bg.* , case when bh.nourut = 3 then '' else 'http://152.42.176.182/api/public/Pembelajaran/' end  as url
    ,(select top(1) bg.lineid1 from belajar_trx_pembelajaran btp 
    left join belajar_header bh2 on bh2.lineid = btp.fk_header_id
    left join belajar_gambar bg2 on bg2.lineid1 = btp.fk_gambar_id  
    left join belajar_gambar bg on bg.Nama = bg2.Nama and bg.lineidheader = bh.lineid
    where btp.fk_user_id = :userid order by btp.lineid desc) as idgambarsebelumnya
    ,(select top(1) bg.lineidheader from belajar_trx_pembelajaran btp 
    left join belajar_header bh2 on bh2.lineid = btp.fk_header_id
    left join belajar_gambar bg2 on bg2.lineidheader = bh2.lineid 
    left join belajar_gambar bg on bg.Nama = bg2.Nama and bg.lineidheader = bh.lineid
    where btp.fk_user_id = :userid order by btp.lineid desc ) as idheadersebelumnya
    from belajar_header bh
    left join belajar_gambar bg on bg.lineidheader = bh.lineid 
    where bh.nama= :nama and bh.nourut = :nourut and bg.Nama = 
    (select top(1) bg2.Nama from belajar_trx_pembelajaran btp 
    left join belajar_header bh2 on bh2.lineid = btp.fk_header_id
    left join belajar_gambar bg2 on bg2.lineid1 = btp.fk_gambar_id  
    where btp.fk_user_id = :userid order by btp.lineid desc)
    `;

     

  }else{

    query = `
    select bg.* , case when bh.nourut = 3 then '' else 'http://152.42.176.182/api/public/Pembelajaran/' end  as url
    ,(select top(1) bg.lineid1 from belajar_trx_pembelajaran btp 
    left join belajar_header bh2 on bh2.lineid = btp.fk_header_id
    left join belajar_gambar bg2 on bg2.lineidheader = bh2.lineid 
    left join belajar_gambar bg on bg.Nama = bg2.Nama and bg.lineidheader = bh.lineid
    where btp.fk_user_id = :userid order by btp.lineid desc ) as idgambarsebelumnya
    ,(select top(1) bg.lineidheader from belajar_trx_pembelajaran btp 
    left join belajar_header bh2 on bh2.lineid = btp.fk_header_id
    left join belajar_gambar bg2 on bg2.lineidheader = bh2.lineid 
    left join belajar_gambar bg on bg.Nama = bg2.Nama and bg.lineidheader = bh.lineid
    where btp.fk_user_id = :userid order by btp.lineid desc ) as idheadersebelumnya
    from belajar_header bh
    left join belajar_gambar bg on bg.lineidheader = bh.lineid 
    where bh.nama= :nama and bh.nourut = :nourut
    `;

  }

  

              return models.sequelize
                .query(query, {
                  type: QueryTypes.SELECT,
                  replacements: {
                    nama: namamenu,
                    nourut: nourut,
                    userid: user_id
                  },
                })
                .then((pasiennn) => {

                  return success(req, res, pasiennn, "Load Data ");

                })
                .catch((err) => {
                  return error(req, res, {}, "Gagal memuat", 500, err);
                });

}

exports.loadpertanyaanbelajar = (req, res) => {

  let { idgambar } = req.body;

  const query = `
  select * ,
  (
    select top(1) pembahasan from belajar_pembahasan bp2 where bp2.lineidjawaban = bj.lineid3 
    ) as pembahasan
  from belajar_pertanyaan bp 
  left join belajar_jawaban bj on bp.lineid2 = bj.lineidpertanyaan 
  where bp.lineidgambar = :idgambar
  order by bj.lineidpertanyaan asc 
  `;

              return models.sequelize
                .query(query, {
                  type: QueryTypes.SELECT,
                  replacements: {
                    idgambar: idgambar
                  },
                })
                .then((pasiennn) => {

                  return success(req, res, pasiennn, "Load Data ");

                })
                .catch((err) => {
                  return error(req, res, {}, "Gagal memuat", 500, err);
                });

}

exports.tambahbelajar = (req, res) => {

  let { fk_gambar_id,fk_header_id,fk_user_id,jawaban_json } = req.body;

  console.log(jawaban_json.replace("/\"/g",""));
  console.log(jawaban_json);

  const query = `
  select * 
  from belajar_trx_pembelajaran where fk_user_id = :iduser and fk_header_id = :idheader
  `;

              // return models.sequelize
              //   .query(query, {
              //     type: QueryTypes.SELECT,
              //     replacements: {
              //       iduser: fk_user_id,
              //       idheader: fk_header_id
              //     },
              //   })
              return models.belajar_trx_pembelajaran
              .findOne({
                where: {
                  fk_user_id: fk_user_id,
                  fk_header_id: fk_header_id,
                },
              })
                .then((pasiennn) => {

                  if(!pasiennn)
                  {
                    return models.belajar_trx_pembelajaran.create({
                      'fk_gambar_id': fk_gambar_id,
                      'fk_header_id': fk_header_id,
                      'fk_user_id': fk_user_id,
                      'jawaban_json': jawaban_json
                    }).then((data) => {
                        if(data)
                        {
                          return success(req, res, data, "Load Data ");
                        }else{
                          return error(req, res, {}, "Not Authenticated", 401, false);
                        }
                    })
                    .catch((err) => {
                      return error(req, res, {}, "Not Authenticated", 401, err);
                    });

                    
                  }else{
                    return models.belajar_trx_pembelajaran
                    .update(
                      {
                        'fk_gambar_id': fk_gambar_id,
                        'fk_header_id': fk_header_id,
                        'fk_user_id': fk_user_id,
                        'jawaban_json': jawaban_json
                      },
                      {
                        where: {
                          lineid: pasiennn.lineid,
                        },
                      }
                    )
                    .then((pasient) => {
                      console.log(pasient);
                      return success(req, res, pasient, "Load Data ");
                    })
                    .catch((err) => {
                      return error(req, res, {}, "Not Authenticated", 500, err);
                    });
                    
                  }

                  

                })
                .catch((err) => {
                  return error(req, res, {}, "Gagal memuat", 500, err);
                });

}

exports.loadReviewBelajar = (req, res) => {

  let { user_id,namamenu } = req.body;

  const query = `
  select btp.*,bh.nourut,bg.*, case when bh.nourut = 3 then '' else 'http://152.42.176.182/api/public/Pembelajaran/' end  as url from belajar_trx_pembelajaran btp 
  left join belajar_header bh on bh.lineid = btp.fk_header_id 
  left join belajar_gambar bg on bg.lineid1 = btp.fk_gambar_id  
  where fk_user_id = :userid and bh.nama = :nama_menu
                `;

              return models.sequelize
                .query(query, {
                  type: QueryTypes.SELECT,
                  replacements: {
                    userid: user_id,
                    nama_menu: namamenu
                  },
                })
                .then((pasiennn) => {

                  return success(req, res, pasiennn, "Load Data ");

                })
                .catch((err) => {
                  return error(req, res, {}, "Gagal memuat", 500, err);
                });

}

