const router = require("express").Router();
const model = require("../Model/model");
const service = require("../Services/service");
const upload = require("../MiddleWare/upload");

router.get("/", (req, res) => {
  res.send("Hello from the routing module!");
});

router.get("/setUpSample", async (req, res, next) => {
  try {
    const resData = await model.settingInitialData();
    console.log("response Data", resData);

    res.send("submitted");
  } catch (e) {
    next(e);
  }
});
router.get("/getAffiliates", async (req, res, next) => {
  try {
    const resData = await service.getAffiliatesData();
    console.log("response Data", resData);
    if (resData.error) {
      return res.status(400).json({ error: resData.error });
    }
    res.json(resData);
  } catch (e) {
    next(e);
  }
});
router.get("/getAffiliateById/:affiliateId", async (req, res, next) => {
  try {
    const affiliateId = req.params.affiliateId;
    const resData = await service.getAffiliateByIdData(affiliateId);
    console.log("response Data", resData);
    if (resData.error) {
      return res.status(400).json({ error: resData.error });
    }
    res.json(resData);
  } catch (e) {
    next(e);
  }
});
router.post("/addAffiliate", upload.single("image"), async (req, res, next) => {
  try {
    const affiliateData = {
      ...req.body,
      image: req.file ? req.file.filename : "default.jpg",
    };

    const result = await service.addAffiliateData(affiliateData);

    if (result.error) {
      return res.status(400).json({ error: result.error });
    }

    res.status(201).json(result);
  } catch (e) {
    next(e);
  }
});

router.put("/updateAffiliate/:affiliateId", async (req, res, next) => {
  try {
    const affiliateId = req.params.affiliateId;
    const updatedData = req.body;
    const result = await service.updateAffiliateData(affiliateId, updatedData);
    if (result.error) {
      return res.status(400).json({ error: result.error });
    }
    res.json(result);
  } catch (e) {
    next(e);
  }
});

router.delete("/deleteAffiliate/:affiliateId", async (req, res, next) => {
  try {
    const affiliateId = req.params.affiliateId;
    const result = await service.deleteAffiliateData(affiliateId);
    if (result.error) {
      return res.status(404).json({ error: result.error });
    }
    res.json(result);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
