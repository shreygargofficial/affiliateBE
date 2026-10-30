class UpdateAffiliate {
  constructor({ title, description, link, affiliateId }) {
    this.affiliateId = affiliateId;
    this.title = title;
    this.description = description;
    this.link = link;
  }
}

module.exports = UpdateAffiliate;
