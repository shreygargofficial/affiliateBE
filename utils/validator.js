exports.validateAffiliateData = (data) => {
  const { title, description, image, link } = data;
  if (!title) return { isValid: false, message: "Title is required." };
  if (!link) return { isValid: false, message: "Link is required." };
  if (title.length > 100 || title.length < 5)
    return {
      isValid: false,
      message: "Title must be between 5 and 100 characters.",
    };

  return { isValid: true };
};

exports.validateUpdateAffiliateData = (data) => {
  const { title, affiliateId, description, image, link } = data;
  if (!title) return { isValid: false, message: "Title is required." };
  if (!link) return { isValid: false, message: "Link is required." };
  if (!affiliateId)
    return { isValid: false, message: "Affiliate ID is required." };
  if (title.length > 100 || title.length < 5)
    return {
      isValid: false,
      message: "Title must be between 5 and 100 characters.",
    };

  return { isValid: true };
};
