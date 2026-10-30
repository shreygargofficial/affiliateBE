const Affiliate = require("../Class/Affiliate");
const UpdateAffiliate = require("../Class/UpdateAffiliate");
const model = require("../Model/model");
const {
  validateAffiliateData,
  validateUpdateAffiliateData,
} = require("../utils/validator");
const service = {};

service.getAffiliatesData = async () => {
  try {
    let myData = await model.getAffiliatesData();
    return myData;
  } catch (error) {
    console.error("Error fetching affiliates data:", error);
    throw error;
  }
};

service.getAffiliateByIdData = async (id) => {
  try {
    let myData = await model.getAffiliateByIdData(id);
    return myData;
  } catch (error) {
    console.error("Error fetching affiliates data:", error);
    throw error;
  }
};
service.addAffiliateData = async (affiliateData) => {
  try {
    let dataToSend = new Affiliate(affiliateData);
    let validateStatus = validateAffiliateData(dataToSend);
    if (!validateStatus.isValid) {
      return { error: validateStatus.message };
    }
    let newAffiliate = await model.addAffiliateData(dataToSend);
    return newAffiliate;
  } catch (error) {
    console.error("Error adding affiliate data:", error);
    throw error;
  }
};

service.updateAffiliateData = async (affiliateId, updatedData) => {
  try {
    console.log("updatedData", updatedData);

    let myData = new UpdateAffiliate({ ...updatedData, affiliateId });
    let validateStatus = validateUpdateAffiliateData(myData);
    if (!validateStatus.isValid) {
      return { error: validateStatus.message };
    }
    let updatedAffiliate = await model.updateAffiliateData(
      affiliateId,
      updatedData,
    );
    return updatedAffiliate;
  } catch (error) {
    console.error("Error updating affiliate data:", error);
    throw error;
  }
};

service.deleteAffiliateData = async (affiliateId) => {
  try {
    let deletedAffiliate = await model.deleteAffiliateData(affiliateId);
    if (!deletedAffiliate) {
      return { error: "Affiliate not found" };
    }
    return deletedAffiliate;
  } catch (error) {
    console.error("Error deleting affiliate data:", error);
    throw error;
  }
};

module.exports = service;
