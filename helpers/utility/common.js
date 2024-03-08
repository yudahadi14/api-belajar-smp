const moment = require("moment");
const { quotaJKNPercent, quotaUmumPercent } = require("./variables");

exports.pagination = (page = 1, limit = 10) => {
  // let limit = 20; // number of records per page
  let offset = limit * (page - 1);
  return {
    limit,
    offset,
  };
};

exports.getDiffDate = (date) => {
  let now = moment(moment().format("YYYY-MM-DD"));
  let end = moment(date, "YYYY-MM-DD");
  let duration = moment.duration(now.diff(end));
  return duration.asDays();
};

exports.getHari = (day) => {
  let hari = "";
  switch (day) {
    case "Monday":
      hari = "Senin";
      break;
    case "Tuesday":
      hari = "Selasa";
      break;
    case "Wednesday":
      hari = "Rabu";
      break;
    case "Thursday":
      hari = "Kamis";
      break;
    case "Friday":
      hari = "Jumat";
      break;
    case "Saturday":
      hari = "Sabtu";
      break;
    case "Sunday":
      hari = "Minggu";
      break;
    default:
      break;
  }
  return hari;
};

exports.removeVocal = (text) => {
  let vokal = /[aiueo]/gi;
  return text ? text.replace(vokal, "*") : "";
};

exports.plainMr = (text) => {
  return text ? text.replace(/-/g, "") : "";
};
exports.stringToMR = (text) => {
  let string = "";
  let digit = text.replace(/\W/g, "");
  digit.split("").forEach((element, idx) => {
    if (idx > 1 && idx % 2 === 0) {
      return (string += `-${element}`);
    }
    return (string += element);
  });
  return string;
};

exports.getPeriodeTanggal = (tgl) => {
  let bulan = moment(tgl, "YYYY-MM-DD").format("M");
  let tahun = moment(tgl, "YYYY-MM-DD").format("YYYY");
  let periode1 = 1;
  let periode2 = 3;
  if (bulan >= 1 && bulan <= 3) {
    periode1 = 1;
    periode2 = 3;
  } else if (bulan >= 4 && bulan <= 6) {
    periode1 = 4;
    periode2 = 6;
  } else if (bulan >= 7 && bulan <= 9) {
    periode1 = 7;
    periode2 = 9;
  } else if (bulan >= 10 && bulan <= 12) {
    periode1 = 10;
    periode2 = 12;
  }
  return { periode1, periode2, tahun };
};

exports.maskString = (data, length, replacer) => {
  let str = "";
  str = data.substring(0, length);
  let i = 0;
  let space = data.length - length;
  while (i < space) {
    str += replacer;
    i++;
  }
  return str;
};
exports.maskEmail = (data) => {
  let arr = data.split("@");
  let length = arr[0].length;
  let strLength = Math.floor(length / 2);
  let mask = this.maskString(arr[0], strLength, "*");
  return `${mask}@${arr[1]}`;
};

exports.phoneParser = (data) => {
  let reg = /^62/g;
  let val = typeof data === "string" ? data.replace(reg, "0") : "";
  return val;
};

exports.sisaKuota = (quota) => {
  let quota_jkn = Number(quotaJKNPercent) || 80;
  let quota_umum = Number(quotaUmumPercent) || 20;
  let bpjs = Math.floor((Number(quota) * quota_jkn) / 100);
  let umum = Math.floor((Number(quota) * quota_umum) / 100);

  return {
    bpjs: Number(bpjs),
    umum: Number(umum),
  };
};

exports.isSiang = (payload) => {
  if (!payload) {
    return false;
  }
  let waktu_awal = payload.split("-")[0];
  let jam = waktu_awal.split(":")[0];
  if (Number(jam) >= 12) {
    return true;
  }
  return false;
};

exports.getBulan = (bulan) => {
  let hari = "";
  switch (bulan) {
    case 1:
      hari = "Januari";
      break;
    case 2:
      hari = "Februari";
      break;
    case 3:
      hari = "Maret";
      break;
    case 4:
      hari = "April";
      break;
    case 5:
      hari = "Mei";
      break;
    case 6:
      hari = "Juni";
      break;
    case 7:
      hari = "Juli";
      break;
    case 8:
      hari = "Agustus";
      break;
    case 9:
      hari = "September";
      break;
    case 10:
      hari = "Oktober";
      break;
    case 11:
      hari = "November";
      break;
    case 12:
      hari = "Desember";
      break;
    default:
      break;
  }
  return hari;
};

exports.batasPendaftaranRajal = (tanggal) => {
  let batasTime = "12:00";
  let batasTimeRsv = "14:00";
  let today = moment().format("YYYY-MM-DD");
  let timeOver = moment().diff(
    moment(`${today} ${batasTime}`, "YYYY-MM-DD hh:mm"),
    "minute"
  );
  let isToday = moment().isSame(moment(`${tanggal}`, "YYYY-MM-DD"), "day");
  let timeOverTmrw = moment()
    .add(1, "d")
    .diff(moment(`${tanggal} ${batasTimeRsv}`, "YYYY-MM-DD hh:mm"), "minute");
  if (isToday) {
    if (timeOver >= 0) {
      return true;
      // throw new Error(`Batas pendaftaran poli jam ${batasTime} WIB`);
    }
  } else {
    if (timeOverTmrw >= 0) {
      return true;
      // throw new Error(`Batas reservasi poli untuk H-1 jam ${batasTimeRsv} WIB`);
    }
  }
  return false;
};

exports.sequencePromise = async (iterable, action) => {
  for (const x of iterable) {
    await action(x);
  }
};

exports.getDOW = (tgl) => {
  return moment(tgl, "YYYY-MM-DD").isoWeekday();
};
