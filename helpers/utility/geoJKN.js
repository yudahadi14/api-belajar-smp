let village = require("../../public/geography/jkn/village.json");
let regency = require("../../public/geography/jkn/regency.json");
let province = require("../../public/geography/jkn/province.json");
let district = require("../../public/geography/jkn/district.json");

exports.getProvince = (id) => {
  let found = province.find((find) => find.province_id === id);
  if (found) {
    return found;
  }
  return null;
};

exports.getProvinceRegency = (id) => {
  let found = regency.find((find) => find.province_id === id);
  console.log(found);
  if (found) {
    return found;
  }
  return [];
};

exports.getRegency = (id) => {
  let found = regency.find((find) => find.regency_id === id);
  if (found) {
    return found;
  }
  return null;
};

exports.getRegencyDistrict = (id) => {
  let found = district.find((find) => find.regency_id === id);
  if (found) {
    return found;
  }
  return [];
};

exports.getDistrict = (id) => {
  let found = district.find((find) => find.district_id === id);
  if (found) {
    return found;
  }
  return null;
};

exports.getDistrictVillage = (id) => {
  let found = village.find((find) => find.district_id === id);
  if (found) {
    return found;
  }
  return [];
};

exports.getVillage = (id) => {
  let found = village.find((find) => find.village_id === id);
  if (found) {
    return found;
  }
  return null;
};
