class UpdateAffiliate {
  constructor({ title, description, image, link, affiliateId }) {
    this.affiliateId = affiliateId;
    this.title = title;
    this.description = description;
    this.image = image;
    this.link = link;
  }
}

module.exports = UpdateAffiliate;
