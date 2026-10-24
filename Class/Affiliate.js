const crypto = require("crypto");

class Affiliate {
  constructor({ title, description, image, link }) {
    this.affiliateId = crypto.randomBytes(8).toString("hex");
    this.title = title;
    this.description = description;
    this.image = image;
    this.link = link;
  }
}

module.exports = Affiliate;
