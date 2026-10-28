const schema = require("./schema");
const { sampleAffiliateData } = require("./initalialSetup");

const model = {};

model.settingInitialData = async () => {
  const affiliateSchema = await schema.getAffiliateModel();
  return await affiliateSchema.create(sampleAffiliateData);
};

model.getAffiliatesData = async () => {
  const affiliateSchema = await schema.getAffiliateModel();
  return await affiliateSchema.find(
    {},
    { title: 1, description: 1, image: 1, link: 1, _id: 0, affiliateId: 1 },
  );
};

model.getAffiliateByIdData = async (id) => {
  const affiliateSchema = await schema.getAffiliateModel();
  return await affiliateSchema.findOne(
    { affiliateId: id },
    { title: 1, description: 1, image: 1, link: 1, _id: 0, affiliateId: 1 },
  );
};
model.addAffiliateData = async (affiliateData) => {
  const affiliateSchema = await schema.getAffiliateModel();
  return await affiliateSchema.create(affiliateData);
};

model.updateAffiliateData = async (affiliateId, updatedData) => {
  const affiliateSchema = await schema.getAffiliateModel();
  return await affiliateSchema.findOneAndUpdate({ affiliateId }, updatedData, {
    new: true,
  });
};
model.deleteAffiliateData = async (affiliateId) => {
  const affiliateSchema = await schema.getAffiliateModel();
  return await affiliateSchema.findOneAndDelete({ affiliateId });
};
module.exports = model;
