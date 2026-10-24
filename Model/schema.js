const mongoose = require("mongoose");

const myAffiliateSchema = new mongoose.Schema({
  affiliateId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
});

const getAffiliateModel = async () => {
  const db = await mongoose.connect(process.env.MONGODB_URI);
  return db.model("Affiliate", myAffiliateSchema);
};

const schema = {
  getAffiliateModel,
};

module.exports = schema;
